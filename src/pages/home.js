export class HomePage {
  render(container) {
    container.innerHTML = `
      <div class="hero">
        <h1>Godbreakers Wiki</h1>
        <p>Your complete guide to fragments, equipment, conditions, and godbreak abilities</p>
      </div>

      <div class="page-content">
        <div class="card-grid">
          <a href="#fragments" class="item-card" style="text-decoration: none;">
            <div class="item-card-content">
              <h3 class="item-card-title">Fragments</h3>
              <p class="item-card-description">
                Explore all fragments categorized by equipment slot: Arms, Chest, Feet, Legs, and Shoulder.
              </p>
            </div>
          </a>

          <a href="#equipment" class="item-card" style="text-decoration: none;">
            <div class="item-card-content">
              <h3 class="item-card-title">Equipment</h3>
              <p class="item-card-description">
                Discover equipment items like orbs, traps, generators, and special gear.
              </p>
            </div>
          </a>

          <a href="#conditions" class="item-card" style="text-decoration: none;">
            <div class="item-card-content">
              <h3 class="item-card-title">Conditions</h3>
              <p class="item-card-description">
                Learn about buffs, debuffs, damage-over-time effects, and special conditions.
              </p>
            </div>
          </a>

          <a href="#abilities" class="item-card" style="text-decoration: none;">
            <div class="item-card-content">
              <h3 class="item-card-title">Godbreak Abilities</h3>
              <p class="item-card-description">
                Master powerful godbreak abilities and their unique effects.
              </p>
            </div>
          </a>

          <a href="#guide" class="item-card" style="text-decoration: none;">
            <div class="item-card-content">
              <h3 class="item-card-title">Guide</h3>
              <p class="item-card-description">
                Understand game mechanics, archetypes, essences, and advanced strategies.
              </p>
            </div>
          </a>
        </div>

        <div style="margin-top: 4rem; text-align: center;">
          <h2>Welcome to the Godbreakers Community Wiki</h2>
          <p style="max-width: 700px; margin: 1rem auto; line-height: 1.8;">
            This is a fan-made wiki dedicated to providing comprehensive information about Godbreakers.
            Browse through our categories to learn about every aspect of the game, from fragments and equipment
            to advanced combat strategies.
          </p>
        </div>
      </div>
    `;
  }
}

