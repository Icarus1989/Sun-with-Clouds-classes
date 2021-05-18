let cloudOne;
let cloudTwo;
let sun;
let angles = 0;
let long = 100;

function setup() {
	createCanvas(windowWidth, windowHeight);
	angleMode(DEGREES);
	cloudOne = new Cloud(300, 200, 100, 3);
	cloudTwo = new Cloud(400, 220, 100, 3);
	cloudThree = new Cloud(230, 210, 90, 3);
	sun = new Sun(320, 110, 100, 150);
}

function draw() {
	angles = angles + 0.5;
	long = long + 0.5;
	if (long == 120) {
		long -= 30;
	}
	background(79, 195, 247);
	sun.drawSun(angles, long);

	cloudOne.drawCloud();
	cloudTwo.drawCloud();
	cloudThree.drawCloud();

	// cloud.move();
}