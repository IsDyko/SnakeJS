import { initSnake, moveSnake, drawSnake } from "./snake.js";
import { generateFood, drawFood } from "./food.js";
import { handleDirectionChange } from "./controls.js";
import { checkCollision, checkWallCollision } from "./collision.js";
import { drawScore, drawTime, drawPause } from "./hud.js";
import { loadSettings } from "./settings.js";

const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

let box;
let startTime;
let gameSpeed;
let pauseStart;
let snake;
let food;
let pause = false;
let direction = "RIGHT";
let score = 0;
let gameInterval; // Variable pour stocker l'identifiant de l'intervalle

document.addEventListener("keydown", (event) => {
	if (event.key === " ") {
		pause = !pause;
		if (pause) {
			pauseStart = Date.now();
			clearInterval(gameInterval);
			drawPause(ctx, canvas);
		} else {
			gameInterval = setInterval(draw, gameSpeed);
			startTime += Date.now() - pauseStart;
		}
	} else if (!pause) {
		direction = handleDirectionChange(event, direction);
	}
});

// This function loads asynchrously the game settings to let the game start
async function initGame() {
	const config = await loadSettings();
	box = config.box;
	gameSpeed = config.gameSpeed;

	startGame();
}

function startGame() {
	snake = initSnake();
	food = generateFood(box, canvas);
	startTime = Date.now();

	gameInterval = setInterval(draw, gameSpeed); // Stockage de l'identifiant de l'intervalle
}

function draw() {
	const newHead = moveSnake(snake, direction, box);
	const time = Math.floor((Date.now() - startTime) / 1000);

	if (
		checkCollision(newHead, snake) ||
		checkWallCollision(newHead, canvas, box)
	) {
		clearInterval(gameInterval);
		return;
	}

	// For the movement illusion, we add one new segment at each tick and if the snake has eaten nothing,
	// the last element is removed from the array to keep the same size
	snake.unshift(newHead);
	if (newHead.x === food.x && newHead.y === food.y) {
		score += 1;
		food = generateFood(box, canvas);
	} else {
		snake.pop();
	}

	ctx.clearRect(0, 0, canvas.width, canvas.height);
	drawSnake(ctx, snake, box);
	drawFood(ctx, food, box);
	drawScore(ctx, score);
	drawTime(ctx, time, canvas);
}

initGame();
