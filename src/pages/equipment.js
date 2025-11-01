import { createItemCard, createModal } from '../components/card.js';
import { loadData } from '../utils/dataLoader.js';

export class EquipmentPage {
  constructor() {
    this.equipment = [];
  }

  async render(container) {
    container.innerHTML = '<div class="loading">Loading equipment...</div>';

    try {
      this.equipment = await loadData('equipment');
      this.renderContent(container);
    } catch (error) {
      container.innerHTML = `
        <div class="empty-state">
          <div class="empty-state-icon">⚠️</div>
          <p class="empty-state-message">Failed to load equipment data</p>
        </div>
      `;
    }
  }

  renderContent(container) {
    container.innerHTML = `
      <div class="page-header">
        <h1 class="page-title">Equipment</h1>
        <p class="page-description">
          Special equipment items that provide unique abilities and tactical advantages
        </p>
      </div>

      <div id="equipment-grid" class="card-grid">
        ${this.equipment.map(item => 
          createItemCard(item, () => this.showDetails(item))
        ).join('')}
      </div>
    `;

    // Add click handlers
    container.querySelectorAll('.item-card').forEach((card, index) => {
      card.addEventListener('click', () => this.showDetails(this.equipment[index]));
    });
  }

  showDetails(item) {
    const modal = createModal({
      title: item.name,
      image: item.image,
      category: item.type || 'equipment',
      content: `
        ${item.description ? `<p>${item.description}</p>` : ''}
        ${item.effect ? `
          <div style="margin: 1.5rem 0;">
            <h4>Effect</h4>
            <p>${item.effect}</p>
          </div>
        ` : ''}
      `
    });

    document.body.appendChild(modal);
  }
}

