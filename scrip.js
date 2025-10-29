const message = document.getElementById("message");
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");
const modalDesc = document.getElementById("modalDesc");
const closeBtn = document.getElementById("closeBtn");
const toggleMode = document.getElementById("toggleMode");
const searchInput = document.getElementById("searchInput");
const images = document.querySelectorAll(".image-container img");
let currentIndex = 0;

// Show message and open modal
images.forEach((img, index) => {
  img.addEventListener("click", () => {
    const desc = img.parentElement.dataset.desc;
    message.textContent = `You clicked on: ${desc}`;
    openModal(index);
  });
});

// Open modal
function openModal(index) {
  currentIndex = index;
  const img = images[index];
  modal.style.display = "flex";
  modalImg.src = img.src;
  modalDesc.textContent = img.parentElement.dataset.desc;
}

// Close modal
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// Navigate images
document.getElementById("nextBtn").addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  openModal(currentIndex);
});

document.getElementById("prevBtn").addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  openModal(currentIndex);
});

// Toggle dark mode
toggleMode.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Filter images by search
searchInput.addEventListener("input", () => {
  const filter = searchInput.value.toLowerCase();
  document.querySelectorAll(".image-container").forEach(container => {
    const desc = container.dataset.desc.toLowerCase();
    container.style.display = desc.includes(filter) ? "block" : "none";
  });
});
