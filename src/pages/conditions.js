import { createItemCard, createModal } from '../components/card.js';
import { loadData } from '../utils/dataLoader.js';

export class ConditionsPage {
  constructor() {
    this.conditions = [];
    this.currentCategory = 'all';
  }

  async render(container) {
    container.innerHTML = '<div class="loading">Loading conditions...</div>';

    try {
      this.conditions = await loadData('conditions');
      this.renderContent(container);
    } catch (error) {
      container.innerHTML = `
        <div class="empty-state">
          <div class="empty-state-icon">⚠️</div>
          <p class="empty-state-message">Failed to load conditions data</p>
        </div>
      `;
    }
  }

  renderContent(container) {
    const categories = ['all', 'buff', 'debuff', 'dot', 'effect'];
    
    container.innerHTML = `
      <div class="page-header">
        <h1 class="page-title">Conditions</h1>
        <p class="page-description">
          Status effects that modify combat including buffs, debuffs, and damage-over-time effects
        </p>
      </div>

      <div class="tabs" id="condition-tabs">
        ${categories.map(cat => `
          <button 
            class="tab-button ${cat === this.currentCategory ? 'active' : ''}" 
            data-category="${cat}"
          >
            ${cat === 'dot' ? 'DOT' : cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        `).join('')}
      </div>

      <div id="conditions-grid" class="card-grid"></div>
    `;

    container.querySelectorAll('.tab-button').forEach(btn => {
      btn.addEventListener('click', (e) => {
        this.currentCategory = e.target.dataset.category;
        this.updateConditions(container);
      });
    });

    this.updateConditions(container);
  }

  updateConditions(container) {
    const grid = container.querySelector('#conditions-grid');
    const filtered = this.currentCategory === 'all' 
      ? this.conditions 
      : this.conditions.filter(c => c.type === this.currentCategory);

    container.querySelectorAll('.tab-button').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.category === this.currentCategory);
    });

    if (filtered.length === 0) {
      grid.innerHTML = `
        <div class="empty-state" style="grid-column: 1 / -1;">
          <div class="empty-state-icon">📦</div>
          <p class="empty-state-message">No conditions found in this category</p>
        </div>
      `;
      return;
    }

    grid.innerHTML = filtered.map(condition => 
      createItemCard(condition, () => this.showDetails(condition))
    ).join('');

    grid.querySelectorAll('.item-card').forEach((card, index) => {
      card.addEventListener('click', () => this.showDetails(filtered[index]));
    });
  }

  showDetails(condition) {
    const modal = createModal({
      title: condition.name,
      image: condition.image,
      category: condition.type,
      content: `
        <p><strong>Type:</strong> ${condition.type}</p>
        ${condition.description ? `<p style="margin-top: 1rem;">${condition.description}</p>` : ''}
        ${condition.effect ? `
          <div style="margin: 1.5rem 0;">
            <h4>Effect</h4>
            <p>${condition.effect}</p>
          </div>
        ` : ''}
      `
    });

    document.body.appendChild(modal);
  }
}

