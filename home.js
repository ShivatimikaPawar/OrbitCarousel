const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
const slide = document.querySelector('.slide');

// Function to update classes based on position
function updateClasses() {
  const items = document.querySelectorAll('.item');
  items.forEach(item => item.className = 'item'); // Reset classes

  if (items[0]) items[0].classList.add('main');
  if (items[1]) items[1].classList.add('right-1');
  if (items[2]) items[2].classList.add('right-2');
  if (items[3]) items[3].classList.add('right-3');
}

// Manual navigation
next.addEventListener('click', () => {
  slide.appendChild(slide.firstElementChild);
  updateClasses();
});

prev.addEventListener('click', () => {
  slide.prepend(slide.lastElementChild);
  updateClasses();
});

// 🚀 Auto-slide every 5 seconds
setInterval(() => {
  slide.appendChild(slide.firstElementChild);
  updateClasses();
}, 2000); // Change time (in ms) as needed

// Initialize on load
window.addEventListener('load', updateClasses);

