import './styles/main.css';
import { Router } from './router.js';
import { Search } from './components/search.js';

// Initialize the application
class App {
  constructor() {
    this.router = new Router();
    this.search = new Search();
    this.init();
  }

  init() {
    // Initialize router
    this.router.init();
    
    // Initialize search
    this.search.init();
    
    // Add smooth scroll behavior
    document.querySelectorAll('a[data-route]').forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const route = e.target.getAttribute('data-route');
        window.location.hash = route;
      });
    });
    
    console.log('Godbreakers Wiki initialized');
  }
}

// Start the app when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  new App();
});

