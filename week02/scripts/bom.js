// Declare variables for input, button, and list elements
const chapterInput = document.getElementById('chapter-input');
const addButton = document.getElementById('add-button');
const chapterList = document.getElementById('chapter-list');

// Function to create a list item with delete button
function createListItem(chapter) {
  const li = document.createElement('li');
  li.textContent = chapter;

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = '❌';
  deleteBtn.className = 'delete-button';
  deleteBtn.setAttribute('aria-label', `Remove ${chapter}`);

  li.appendChild(deleteBtn);
  return li;
}

// Note: Event handling and adding/removing items will be implemented in future activities.
