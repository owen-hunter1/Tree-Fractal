window.addEventListener("DOMContentLoaded", main);

const renderer = {
	canvas: null,
	ctx: null,
	width: 0,
	height: 0
};

function main(){
	renderer.canvas = document.getElementById("id_canvas");
	renderer.ctx = renderer.canvas.getContext("2d");
	
	renderer.width = renderer.canvas.width;
	renderer.height = renderer.canvas.height;


	//generateTree(renderer.width * 0.2, renderer.height - 20, 10, Math.PI * 0.5, 40, 71, 39, 0, 10);
	generateTree(renderer.width * 0.5, renderer.height - 20, 15, Math.PI * 0.5, 100, 71, 39, 0, 10);
	//generateTree(renderer.width * 0.8, renderer.height - 20, 10, Math.PI * 0.5, 25, 71, 39, 0, 10);
}

function generateTree(x, y, depth, angle, length, red, green, blue, lineWidth){

	if(red < 0) red = 0;
	if(green > 200) green = 200;
	if(lineWidth < 1) lineWidth = 1;
	
	let rotation = Math.PI / (4 * (1 + Math.random()));

	if(depth == 0) return;

	renderer.ctx.strokeStyle = `rgb(${red},${green},${blue})`;
	renderer.ctx.lineWidth = lineWidth;

	let endX = x - length * Math.cos(angle);
	let endY = y - length * Math.sin(angle);
	
	renderer.ctx.beginPath();
	renderer.ctx.moveTo(x, y);
	renderer.ctx.lineTo(endX, endY);	
	renderer.ctx.stroke();
	
	setTimeout(() => {
		generateTree(endX, endY, depth - 1, angle - rotation, length * 0.75, red - 5, green + 10, blue, lineWidth - 2);
		generateTree(endX, endY, depth - 1, angle + rotation, length * 0.75, red - 5, green + 10, blue, lineWidth - 2);
	}, 50);
}