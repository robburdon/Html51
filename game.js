// Grab the canvas and context
const canvas = document.getElementById('c');
const ctx = canvas.getContext('2d');

// Set canvas dimensions
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Define player
let player = {
  x: canvas.width / 2,
  y: canvas.height / 2,
  speed: 5
};

// Draw player
function drawPlayer() {
  ctx.beginPath();
  ctx.moveTo(player.x, player.y - 50); // Top point
  ctx.lineTo(player.x - 50, player.y + 50); // Bottom left
  ctx.lineTo(player.x + 50, player.y + 50); // Bottom right
  ctx.closePath();
  ctx.stroke();
}

// Clear canvas
function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

// Update game
function updateGame() {
  clearCanvas();
  drawPlayer();
  requestAnimationFrame(updateGame);
}

// Update player position
function movePlayer(e) {
  switch (e.key) {
    case 'ArrowUp':
      player.y -= player.speed;
      break;
    case 'ArrowDown':
      player.y += player.speed;
      break;
    case 'ArrowLeft':
      player.x -= player.speed;
      break;
    case 'ArrowRight':
      player.x += player.speed;
      break;
  }
}

// Listen for keydown event
window.addEventListener('keydown', movePlayer);

// Start game
updateGame();

