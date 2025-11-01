export function createItemCard(item, onClickHandler) {
  return `
    <div class="item-card" data-item-id="${item.id || item.name}">
      ${item.image ? `
        <img 
          src="${item.image}" 
          alt="${item.name}" 
          class="item-card-image"
          onerror="this.style.display='none'"
        />
      ` : ''}
      <div class="item-card-content">
        ${item.category || item.type ? `
          <span class="item-card-category">${item.category || item.type}</span>
        ` : ''}
        <h3 class="item-card-title">${item.name}</h3>
        ${item.description ? `
          <p class="item-card-description">
            ${truncateText(item.description, 120)}
          </p>
        ` : ''}
      </div>
    </div>
  `;
}

export function createModal({ title, image, category, content }) {
  const modal = document.createElement('div');
  modal.className = 'modal-overlay';
  
  modal.innerHTML = `
    <div class="modal-content">
      <div class="modal-header">
        <h2>${title}</h2>
        <button class="modal-close" aria-label="Close">&times;</button>
      </div>
      <div class="modal-body">
        ${image ? `
          <img 
            src="${image}" 
            alt="${title}" 
            class="modal-image"
            onerror="this.style.display='none'"
          />
        ` : ''}
        ${content}
      </div>
    </div>
  `;

  // Close modal handlers
  const closeBtn = modal.querySelector('.modal-close');
  closeBtn.addEventListener('click', () => modal.remove());
  
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.remove();
    }
  });

  // ESC key to close
  const escHandler = (e) => {
    if (e.key === 'Escape') {
      modal.remove();
      document.removeEventListener('keydown', escHandler);
    }
  };
  document.addEventListener('keydown', escHandler);

  return modal;
}

function truncateText(text, maxLength) {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength).trim() + '...';
}

