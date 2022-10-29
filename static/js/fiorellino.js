let width = 600
let height = 300
let d = 80

let xA = 300
let yA = 150

let direzione = 1

let origineX = xA-xA
let origineFinalCircle = width
let hiddenIterationFlower= origineX - xA

function setup () {
	createCanvas(width, height)
}

function drawFiorellino(x, y, d) {
	let r = d/2

	stroke("rgb(0,0,0)")
	strokeWeight(2)

	fill("rgb(255,165,0)")
	circle(x-r, y-r, d)
	circle(x+r, y+r, d)
	circle(x-r, y+r, d)
	circle(x+r, y-r, d)
	fill("rgb(255,51,0)")
	circle(x, y, d)
}

function draw() {
	
	hiddenIterationFlower = hiddenIterationFlower + direzione
	xA = xA + direzione
	origineX = origineX + direzione
	origineFinalCircle = origineFinalCircle + direzione

	background(0,255,0)
	drawFiorellino(hiddenIterationFlower, yA, d) 

	drawFiorellino(xA, yA, d)					 
	drawFiorellino(origineX, yA, d)				 
	drawFiorellino(origineFinalCircle, yA, d) 	 

	if (xA == 600) {
		origineX = 0
		xA = 300

		hiddenIterationFlower = origineX - xA
		origineFinalCircle = width
		let iterazioneFlowerOrigine = hiddenIterationFlower - xA

		drawFiorellino(iterazioneFlowerOrigine, yA, d)		
	}



}