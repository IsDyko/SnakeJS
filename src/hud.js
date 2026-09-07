/**
 * Dessine le score et le temps sur le canvas.
 *
 * Cette fonction affiche le score actuel du jeu dans le coin supérieur gauche du canvas.
 * Le score est affiché en noir avec une police Arial de 20px.
 *
 * @param {CanvasRenderingContext2D} ctx - Le contexte de rendu 2D du canvas utilisé pour dessiner.
 * @param {number} score - Le score à afficher, qui est un entier.
 */
export function drawScore(ctx, score) {
	ctx.font = "20px Arial";
	ctx.fillStyle = "Black";
	ctx.fillText(`Score: ${score}`, 10, 20);
}

export function drawTime(ctx, time, canvas) {
	const timeBox = `Time: ${time}`;

	ctx.font = "20px Arial";
	ctx.fillStyle = "Black";

	const timeBoxWidth = ctx.measureText(timeBox).width;

	ctx.fillText(`${timeBox}`, canvas.width - timeBoxWidth - 10, 20);
}

export function drawPause(ctx, canvas) {
	ctx.fillStyle = "rgba(128, 128, 128, 0.5)";
	ctx.fillRect(0, 0, canvas.width, canvas.height);

	ctx.font = "40px Arial";
	const text = "PAUSE";
	const textBox = ctx.measureText(text).width;
	ctx.fillStyle = "Black";
	ctx.fillText(text, (canvas.width - textBox) / 2, canvas.height / 2);
}
