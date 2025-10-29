let likes = [0, 0, 0];

function handleImageClick(img, index) {
    //increment like counter
    likes[index]++;
    document.getElementById(`like-${index}`).textContent = `❤️ ${likes[index]}`;
    

    const imageName = img.getAttribute('data-name');
    const message = document.getElementById("message");
    message.textContent = `You liked the ${imageName} image! (${likes[index]} likes)`;
}

//doubleclick to open
document.querySelectorAll('.gallery img').forEach(img => {
    img.addEventListener('dblclick', function(e) {
    e.stopPropagation();
    openLightbox(this);
    });
});

function openLightbox(img) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const caption = document.getElementById('lightbox-caption');
    
    lightbox.style.display = 'block';
    lightboxImg.src = img.src;
    caption.textContent = img.getAttribute('data-name');
}

function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
}

//filters
function applyFilter(filterType) {
    const images = document.querySelectorAll('.gallery img');
    images.forEach(img => {
    img.classList.remove('grayscale', 'sepia', 'blur');
    if (filterType !== 'none') {
        img.classList.add(filterType);
    }
    });
}

//shuffling
function shuffleGallery() {
  const gallery = document.getElementById('gallery');
  const items = Array.from(gallery.children);


  for (let i = items.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [items[i], items[j]] = [items[j], items[i]];
  }

  items.forEach(item => gallery.appendChild(item));

  document.getElementById('message').textContent = 'Gallery shuffled! ';
}


//reset likes
function resetLikes() {
    likes = [0, 0, 0];
    for (let i = 0; i < 3; i++) {
    document.getElementById(`like-${i}`).textContent = `0`;
    }
    document.getElementById('message').textContent = 'All likes have been reset!';
}


document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
    closeLightbox();
    }
});