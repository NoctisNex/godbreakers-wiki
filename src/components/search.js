export class Search {
  constructor() {
    this.searchInput = null;
    this.allData = [];
  }

  init() {
    this.searchInput = document.getElementById('search-input');
    
    if (this.searchInput) {
      this.searchInput.addEventListener('input', (e) => {
        this.handleSearch(e.target.value);
      });
    }
  }

  handleSearch(query) {
    // TODO: Implement search functionality
    // This will search across all loaded data and filter results
    // For now, it's a placeholder for future implementation
    console.log('Search query:', query);
  }

  setData(data) {
    this.allData = data;
  }
}

