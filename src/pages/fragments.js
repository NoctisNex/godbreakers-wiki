import { createItemCard, createModal } from '../components/card.js';
import { loadData } from '../utils/dataLoader.js';

export class FragmentsPage {
  constructor() {
    this.fragments = [];
    this.currentCategory = 'all';
  }

  async render(container) {
    container.innerHTML = '<div class="loading">Loading fragments...</div>';

    try {
      this.fragments = await loadData('fragments');
      this.renderContent(container);
    } catch (error) {
      container.innerHTML = `
        <div class="empty-state">
          <div class="empty-state-icon">⚠️</div>
          <p class="empty-state-message">Failed to load fragments data</p>
        </div>
      `;
    }
  }

  renderContent(container) {
    const categories = ['all', 'arms', 'chest', 'feet', 'legs', 'shoulder'];
    
    container.innerHTML = `
      <div class="page-header">
        <h1 class="page-title">Fragments</h1>
        <p class="page-description">
          Fragments enhance your character with powerful abilities and stat modifications
        </p>
      </div>

      <div class="tabs" id="fragment-tabs">
        ${categories.map(cat => `
          <button 
            class="tab-button ${cat === this.currentCategory ? 'active' : ''}" 
            data-category="${cat}"
          >
            ${cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        `).join('')}
      </div>

      <div id="fragments-grid" class="card-grid"></div>
    `;

    // Add tab click handlers
    container.querySelectorAll('.tab-button').forEach(btn => {
      btn.addEventListener('click', (e) => {
        this.currentCategory = e.target.dataset.category;
        this.updateFragments(container);
      });
    });

    this.updateFragments(container);
  }

  updateFragments(container) {
    const grid = container.querySelector('#fragments-grid');
    const filtered = this.currentCategory === 'all' 
      ? this.fragments 
      : this.fragments.filter(f => f.category === this.currentCategory);

    // Update active tab
    container.querySelectorAll('.tab-button').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.category === this.currentCategory);
    });

    if (filtered.length === 0) {
      grid.innerHTML = `
        <div class="empty-state" style="grid-column: 1 / -1;">
          <div class="empty-state-icon">📦</div>
          <p class="empty-state-message">No fragments found in this category</p>
        </div>
      `;
      return;
    }

    grid.innerHTML = filtered.map(fragment => 
      createItemCard(fragment, () => this.showDetails(fragment))
    ).join('');

    // Add click handlers
    grid.querySelectorAll('.item-card').forEach((card, index) => {
      card.addEventListener('click', () => this.showDetails(filtered[index]));
    });
  }

  showDetails(fragment) {
    const modal = createModal({
      title: fragment.name,
      image: fragment.image,
      category: fragment.category,
      content: `
        <p><strong>Category:</strong> ${fragment.category}</p>
        ${fragment.baseDescription ? `
          <div style="margin: 1.5rem 0;">
            <h4>Base Effect</h4>
            <p>${fragment.baseDescription}</p>
          </div>
        ` : ''}
        ${fragment.upgradedDescription ? `
          <div style="margin: 1.5rem 0;">
            <h4>Upgraded Effect</h4>
            <p>${fragment.upgradedDescription}</p>
          </div>
        ` : ''}
        ${fragment.description ? `
          <div style="margin: 1.5rem 0;">
            <p>${fragment.description}</p>
          </div>
        ` : ''}
      `
    });

    document.body.appendChild(modal);
  }
}

