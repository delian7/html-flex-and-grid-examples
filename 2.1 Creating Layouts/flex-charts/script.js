let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

let speed = 10;
let position = 0;
let moveSpeed = 0;
let radius = 40;

function moveBall() {
  position += moveSpeed;
  if (position + radius > 640) {
    moveSpeed = -speed;
  } else if (position - radius < 0) {
    moveSpeed = speed;
  }
}

function drawBall() {
  ctx.clearRect(0, 0, 640, 480);
  ctx.fillStyle = 'black';
  ctx.beginPath();
  ctx.arc(position, 240, radius, 0, Math.PI * 2);
  ctx.fillStyle = 'red';
  ctx.fill();
}

function animate() {
  moveBall();
  drawBall();
  requestAnimationFrame(animate);
}

animate();