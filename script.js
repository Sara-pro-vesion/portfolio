
const clickSound = new Audio("mouse-button-fast-click.wav"); // Put the sound file in the same folder
const blob = document.querySelector('.blob');
const button = document.querySelector('button');

function playClick() {
  clickSound.currentTime = 0;
  clickSound.play();
}

button.addEventListener("click", () => {
  // Get button center at click time
  const rect = button.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;
  blob.style.left = `${centerX - 50}px`;
  blob.style.top = `${centerY - 50}px`;
  blob.offsetWidth;
  blob.style.transform = "scale(30)";
  playClick();
});
