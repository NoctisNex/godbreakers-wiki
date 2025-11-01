import { createItemCard, createModal } from '../components/card.js';
import { loadData } from '../utils/dataLoader.js';

export class AbilitiesPage {
  constructor() {
    this.abilities = [];
  }

  async render(container) {
    container.innerHTML = '<div class="loading">Loading godbreak abilities...</div>';

    try {
      this.abilities = await loadData('abilities');
      this.renderContent(container);
    } catch (error) {
      container.innerHTML = `
        <div class="empty-state">
          <div class="empty-state-icon">⚠️</div>
          <p class="empty-state-message">Failed to load abilities data</p>
        </div>
      `;
    }
  }

  renderContent(container) {
    container.innerHTML = `
      <div class="page-header">
        <h1 class="page-title">Godbreak Abilities</h1>
        <p class="page-description">
          Powerful special abilities that can turn the tide of battle
        </p>
      </div>

      <div id="abilities-grid" class="card-grid">
        ${this.abilities.map(ability => 
          createItemCard(ability, () => this.showDetails(ability))
        ).join('')}
      </div>
    `;

    container.querySelectorAll('.item-card').forEach((card, index) => {
      card.addEventListener('click', () => this.showDetails(this.abilities[index]));
    });
  }

  showDetails(ability) {
    const modal = createModal({
      title: ability.name,
      image: ability.image,
      category: 'godbreak ability',
      content: `
        ${ability.description ? `<p>${ability.description}</p>` : ''}
        ${ability.effect ? `
          <div style="margin: 1.5rem 0;">
            <h4>Effect</h4>
            <p>${ability.effect}</p>
          </div>
        ` : ''}
        ${ability.cooldown ? `<p style="margin-top: 1rem;"><strong>Cooldown:</strong> ${ability.cooldown}</p>` : ''}
      `
    });

    document.body.appendChild(modal);
  }
}

