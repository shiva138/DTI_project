// Add any interactive features here (optional)

// Example: Simple image gallery lightbox feature
const galleryItems = document.querySelectorAll('.gallery-item img');
galleryItems.forEach(item => {
  item.addEventListener('click', function() {
    alert('You clicked on ' + this.alt);
  });
});
