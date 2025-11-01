import { HomePage } from './pages/home.js';
import { FragmentsPage } from './pages/fragments.js';
import { EquipmentPage } from './pages/equipment.js';
import { ConditionsPage } from './pages/conditions.js';
import { AbilitiesPage } from './pages/abilities.js';
import { GuidePage } from './pages/guide.js';

export class Router {
  constructor() {
    this.routes = {
      'home': HomePage,
      '': HomePage,
      'fragments': FragmentsPage,
      'equipment': EquipmentPage,
      'conditions': ConditionsPage,
      'abilities': AbilitiesPage,
      'guide': GuidePage
    };
    this.contentArea = null;
  }

  init() {
    this.contentArea = document.getElementById('content');
    
    // Listen for hash changes
    window.addEventListener('hashchange', () => this.handleRoute());
    
    // Handle initial route
    this.handleRoute();
  }

  handleRoute() {
    const hash = window.location.hash.slice(1) || 'home';
    const PageClass = this.routes[hash] || HomePage;
    
    // Clear content
    this.contentArea.innerHTML = '';
    
    // Load new page
    const page = new PageClass();
    page.render(this.contentArea);
    
    // Update active nav link
    this.updateActiveNav(hash);
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  updateActiveNav(currentRoute) {
    document.querySelectorAll('nav a[data-route]').forEach(link => {
      const route = link.getAttribute('data-route');
      if (route === currentRoute) {
        link.setAttribute('aria-current', 'page');
      } else {
        link.removeAttribute('aria-current');
      }
    });
  }
}

