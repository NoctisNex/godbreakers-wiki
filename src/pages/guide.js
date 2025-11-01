export class GuidePage {
  render(container) {
    container.innerHTML = `
      <div class="page-header">
        <h1 class="page-title">Guide</h1>
        <p class="page-description">
          Learn the fundamentals and advanced strategies of Godbreakers
        </p>
      </div>

      <div class="category-section">
        <h2 class="category-title">Archetypes</h2>
        <p class="category-description">
          Different playstyles and character builds to master
        </p>
        <div class="card-grid">
          ${this.createArchetypeCards()}
        </div>
      </div>

      <div class="category-section">
        <h2 class="category-title">Game Mechanics</h2>
        <div class="card-grid">
          ${this.createMechanicCards()}
        </div>
      </div>
    `;
  }

  createArchetypeCards() {
    const archetypes = [
      { name: 'Duelist', description: 'Balanced offense and defense' },
      { name: 'Lancer', description: 'Long-range precision attacks' },
      { name: 'Pillar', description: 'Tank and defensive specialist' },
      { name: 'Reaper', description: 'High damage burst specialist' },
      { name: 'Striker', description: 'Fast-paced aggressive combat' },
      { name: 'Twin Blade', description: 'Dual-wielding speed fighter' }
    ];

    return archetypes.map(arch => `
      <div class="item-card">
        <div class="item-card-content">
          <h3 class="item-card-title">${arch.name}</h3>
          <p class="item-card-description">${arch.description}</p>
        </div>
      </div>
    `).join('');
  }

  createMechanicCards() {
    const mechanics = [
      { name: 'Fragments', description: 'Equipment modifications that enhance your abilities', icon: '⚡' },
      { name: 'Equipment', description: 'Special gear that provides unique tactical options', icon: '🛡️' },
      { name: 'Essences', description: 'Core energy system for powering abilities', icon: '💎' },
      { name: 'Consume', description: 'Absorb defeated enemies to gain power', icon: '🔥' },
      { name: 'Stacks', description: 'Accumulate bonuses through combat actions', icon: '📊' }
    ];

    return mechanics.map(mech => `
      <div class="item-card">
        <div class="item-card-content">
          <div style="font-size: 3rem; text-align: center; margin-bottom: 1rem;">${mech.icon}</div>
          <h3 class="item-card-title">${mech.name}</h3>
          <p class="item-card-description">${mech.description}</p>
        </div>
      </div>
    `).join('');
  }
}

