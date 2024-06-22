/*

The Game Project

Week 3

Game interaction

*/


var gameChar_x;
var gameChar_y;
var floorPos_y;
var isLeft;
var isRight;
var isFalling;
var isPlummeting;
var isJumping;
var collectable;
var collectables;
var canyon;
// var treePos_x;
var treePos_y;
var mountain;
var cameraPosX = 0;


function setup()
{
	createCanvas(1024, 576);
	floorPos_y = height * 3/4;
	gameChar_x = width/2;
	gameChar_y = floorPos_y;



	isLeft = false;
	isRight = false;
	isPlummeting = false;
	isFalling = false;
	isJumping = false;

	collectables = [{x_pos: 80, y_pos:420, size: 40, isFound: false},
		{x_pos: 820, y_pos:420, size: 40, isFound: false},
		{x_pos: 400, y_pos:420, size: 40, isFound: false},
		{x_pos: 1000, y_pos:320, size: 40, isFound: false},
		{x_pos: -480, y_pos:420, size: 40, isFound: false
	}]

	t_collectable = {x_pos: 80, y_pos:420, size: 40, isFound: false};

	isPlummeting = false;

	canyon = {x_pos: 150, width: 120};

	trees_x = [-200,300,500,900,1150,1400,1700];
	treePos_y = height/2;
	clouds_x = [-500,0,600,900,1300,1500]
	clouds_y = [height/6,height/9,height/7,height/6,height/9,height/7]

	mountains_x = [-200,600,1200,1500,2050]
	mountain = {width: 110};


}

function draw()
{

	// From what I recall, I've wrote all the code aside from the basic code that was already written like the background and the ground. 

	cameraPosX = gameChar_x - width / 2;

	///////////DRAWING CODE//////////

	background(100,155,255); //fill the sky blue

	
	noStroke();
	fill(0,155,0);
	rect(0, floorPos_y, width, height - floorPos_y); //draw some green ground
	
	push();
	translate(-cameraPosX, 0);
	// draw mountains

	drawMountains()

	// draw trees

	drawTrees()

	// draw clouds
	
	drawClouds()

	//draw the canyon

	drawCanyon(canyon)

	checkCanyon(canyon)


	for (var i = 0; i < collectables.length; i++) {
        var t_collectable = collectables[i]; // Get the current collectable
        
        // Check if the collectable has been found
        checkCollectable(t_collectable);
        
        // Draw the collectable if it has not been found
        if (!t_collectable.isFound) {
            drawCollectable(t_collectable);
        }
    }


	//the game character
	if(isLeft && isFalling)
	{
		// add your jumping-left code

			// head
		fill(255,220,177);
		ellipse(gameChar_x, gameChar_y - 63, 25);
		// body
		fill(20,255,20);
		rect(gameChar_x - 5, gameChar_y - 52, 10, 20);
		// arms
		stroke(20,255,20);
		strokeWeight(5);
		// right
		line(gameChar_x + 5, gameChar_y - 47, gameChar_x + 15, gameChar_y - 37);
		// left
		line(gameChar_x - 3, gameChar_y - 49, gameChar_x - 15, gameChar_y - 57);
		// legs
		
		line(gameChar_x - 2, gameChar_y - 37, gameChar_x - 5, gameChar_y - 15);
		line(gameChar_x + 1, gameChar_y - 37, gameChar_x + 3, gameChar_y - 17);
		// feet
		fill(0);
		stroke(0);
		rect(gameChar_x - 3, gameChar_y - 12, 7, 1);
		rect(gameChar_x - 12, gameChar_y - 15, 7, 1);

	}
	else if(isRight && isFalling)
	{
		// add your jumping-right code

		// head
		fill(255,220,177);
		ellipse(gameChar_x, gameChar_y - 63, 25);
		// body
		fill(20,255,20);
		rect(gameChar_x - 5, gameChar_y - 52, 10, 20);
		// arms
		stroke(20,255,20);
		strokeWeight(5);
		// right
		line(gameChar_x + 5, gameChar_y - 47, gameChar_x + 15, gameChar_y - 57);
		// left
		line(gameChar_x - 3, gameChar_y - 49, gameChar_x - 15, gameChar_y - 37);
		// legs
		
		line(gameChar_x - 2, gameChar_y - 37, gameChar_x - 1, gameChar_y - 15);
		line(gameChar_x + 1, gameChar_y - 37, gameChar_x + 8, gameChar_y - 17);
		// feet
		stroke(0);
		fill(0);
		rect(gameChar_x - 3, gameChar_y - 12, 7, 1);
		rect(gameChar_x + 8, gameChar_y - 15, 7, 1);

	}
	else if(isLeft)
	{
		// add your walking left code

			// head
		fill(255,220,177);
		ellipse(gameChar_x, gameChar_y - 60, 25);
		// body
		fill(20,255,20);
		rect(gameChar_x - 5, gameChar_y - 50, 10, 25);
		// arms
		stroke(20,255,20);
		strokeWeight(5);
		// right
		line(gameChar_x + 5, gameChar_y - 45, gameChar_x + 10, gameChar_y - 32);
		// left
		line(gameChar_x - 3, gameChar_y - 47, gameChar_x - 12, gameChar_y - 32);
		// legs
		line(gameChar_x - 2, gameChar_y - 27, gameChar_x - 5, gameChar_y - 5);
		line(gameChar_x + 1, gameChar_y - 27, gameChar_x + 12, gameChar_y - 7);
		// feet
		stroke(0);
		fill(0);
		rect(gameChar_x - 12, gameChar_y - 2, 7, 1);
		rect(gameChar_x + 6, gameChar_y - 3, 7, 1);

	}
	else if(isRight)
	{
		// add your walking right code

		// head
		fill(255,220,177);
		ellipse(gameChar_x, gameChar_y - 60, 25);
		// body
		fill(20,255,20);
		rect(gameChar_x - 5, gameChar_y - 50, 10, 25);
		// arms
		stroke(20,255,20);
		strokeWeight(5);
		// right
		line(gameChar_x + 5, gameChar_y - 45, gameChar_x + 10, gameChar_y - 32);
		// left
		line(gameChar_x - 3, gameChar_y - 47, gameChar_x - 12, gameChar_y - 32);
		// legs
		
		line(gameChar_x - 2, gameChar_y - 27, gameChar_x - 8, gameChar_y - 5);
		line(gameChar_x + 1, gameChar_y - 27, gameChar_x + 8, gameChar_y - 5);
		// feet
		stroke(0);
		fill(0);
		rect(gameChar_x - 12, gameChar_y - 2, 7, 1);
		rect(gameChar_x + 6, gameChar_y - 3, 7, 1);

	}
	// else if(isFalling || isPlummeting)
	else if(isFalling || isPlummeting)

	{
		// add your jumping facing forwards code

			// head
		fill(255,220,177);
		ellipse(gameChar_x, gameChar_y - 60, 25);
		// body
		fill(20,255,20);
		rect(gameChar_x - 5, gameChar_y - 50, 10, 25);
		// arms
		stroke(20,255,20);
		strokeWeight(5);
		// right
		line(gameChar_x + 5, gameChar_y - 45, gameChar_x + 15, gameChar_y - 57);
		// left
		line(gameChar_x - 3, gameChar_y - 47, gameChar_x - 15, gameChar_y - 57);
		// legs
		
		line(gameChar_x - 2, gameChar_y - 27, gameChar_x - 5, gameChar_y - 10);
		line(gameChar_x + 1, gameChar_y - 27, gameChar_x + 8, gameChar_y - 10);
		// feet
		stroke(0);
		fill(0);
		rect(gameChar_x - 12, gameChar_y - 10, 7, 1);
		rect(gameChar_x + 6, gameChar_y - 10, 7, 1);

	}
	else
	{
		// add your standing front facing code

		// Head
		fill(255,220,177);
		ellipse(gameChar_x, gameChar_y - 60, 25); 

		// Body
		fill(20,255,20);
		rect(gameChar_x - 5, gameChar_y - 50, 10, 25); 

		// Arms
		stroke(20,255,20);
		strokeWeight(5);
		// Right arm
		line(gameChar_x + 5, gameChar_y - 45, gameChar_x + 15, gameChar_y - 37);
		// Left arm
		line(gameChar_x - 3, gameChar_y - 47, gameChar_x - 15, gameChar_y - 37);

		// Legs
		
		// Left leg
		line(gameChar_x - 2, gameChar_y - 27, gameChar_x - 5, gameChar_y - 5);
		// Right leg
		line(gameChar_x + 1, gameChar_y - 27, gameChar_x + 8, gameChar_y - 5);

		// Feet
		stroke(0);
		fill(0);
		rect(gameChar_x - 12, gameChar_y - 2, 7, 1); // left foot
		rect(gameChar_x + 6, gameChar_y - 2, 7, 1); // right foot



	}

	///////////INTERACTION CODE//////////
	//Put conditional statements to move the game character below here


	// move left

	if (isLeft == true)
	{
		gameChar_x -= 10;
	}

	// move right
	else if (isRight == true)
	{
		gameChar_x += 10;
	}


	// jump
	
	
	if (gameChar_y < floorPos_y)
	{
		isFalling == true;
		gameChar_y += 5;
	}
	else
	{
		isFalling == false;
	}


	if (isPlummeting)
	{
		if(gameChar_y <= height && !isJumping)
		{
			gameChar_y += 10;
		}
	}

	pop();

}


function keyPressed()
{
	// if statements to control the animation of the character when
	// keys are pressed.

	//open up the console to see how these work
	console.log("keyPressed: " + key);
	console.log("keyPressed: " + keyCode);

	if (isPlummeting) {
        return;
    }


	if (gameChar_y < floorPos_y)
	{
		isJumping = true;
	}
	else
	{
		isJumping = false;
	}

	// move left

	if (keyCode == 37)
	{
		isLeft = true;
		// gameChar_x -= 10;
	}

	// move right
	else if (keyCode == 39)
	{
		isRight = true; 
		// gameChar_x += 10;
	}

	// jump
	else if (keyCode == 87 && isJumping == false)
	{
		gameChar_y -= 200;
	}


}

function keyReleased()
{
	// if statements to control the animation of the character when
	// keys are released.

	console.log("keyReleased: " + key);
	console.log("keyReleased: " + keyCode);

	if (keyCode == 37)
	{
		isLeft = false;
	}

	else if (keyCode == 39)
	{
		isRight = false; 
	}

	// else if (keyCode == 87)
	// {
	// 	gameChar_y += 100;
	// }


	// floorPos_y = height * 3/4;

}
function drawClouds()
{
	for (var i = 0; i < clouds_x.length; i++)
	{
		noStroke();
		fill(255);
		ellipse(clouds_x[i] + 15, clouds_y[i] - 10, 80, 80);
		ellipse(clouds_x[i] + 40, clouds_y[i] - 10, 70, 70);
		ellipse(clouds_x[i] + 20, clouds_y[i], 130, 60);
		ellipse(clouds_x[i] + 20, clouds_y[i] + 5, 70, 70);


		// ellipse(cloudPos_x + 40,cloudPos_y,100,70);
		// ellipse(cloudPos_x + 50,cloudPos_y ,70,90);
	}
}

function drawMountains()
{
	for(var i = 0; i < mountains_x.length; i++)
	{
		noStroke();
	
		fill(90,90,90);
		triangle(mountains_x[i] + mountain.width/2 -20, 150, mountains_x[i]- 40, 432, mountains_x[i] + mountain.width -40,432);
		fill(105,105,105)
	
		triangle(mountains_x[i] + mountain.width/2 + 10,100, mountains_x[i] + 20,432, mountains_x[i] + mountain.width, 432);
		fill(90,90,90);
	
		triangle(mountains_x[i] + mountain.width/2 + 10, 100,mountains_x[i] + mountain.width ,432, mountains_x[i] + mountain.width + 180 ,432);
		fill(255)
	}
}

function drawTrees()
{
	for(var i = 0; i < trees_x.length; i++)
	{
		noStroke();
		fill(79, 36, 12);
		rect(trees_x[i], treePos_y - 86, 30, 232); 
		triangle(trees_x[i] - 20, treePos_y + 146, trees_x[i], treePos_y + 146, trees_x[i], treePos_y + 50)
		triangle(trees_x[i], treePos_y + 146, trees_x[i] + 50, treePos_y + 146, trees_x[i] + 30, treePos_y + 50)

		// Tree branches
		noStroke();
		fill(0, 200, 90);
		ellipse(trees_x[i] + 15, treePos_y - 100, 170, 70);
		ellipse(trees_x[i] + 22, treePos_y - 129, 80, 90); 
		ellipse(trees_x[i] + 2, treePos_y - 127, 80, 60);
		}

}

function drawCollectable(t_collectable)
{
	// if(dist(gameChar_x, gameChar_y, t_collectable.x_pos,t_collectable.y_pos) < 20)
	// {
	// 	t_collectable.isFound = true
	// }


	if(t_collectable.isFound == false){
		fill(255,223,0);
		ellipse(t_collectable.x_pos, t_collectable.y_pos, t_collectable.size ,40);
		fill(0);
		textSize(24);
		text('£',t_collectable.x_pos -6.5, t_collectable.y_pos -11, 436);
		stroke(0);
		strokeWeight(1);  
		noFill(); 
		ellipse(t_collectable.x_pos, t_collectable.y_pos, t_collectable.size, 40);};
		noStroke();
}

function checkCollectable(t_collectable)
{
	if(dist(gameChar_x, gameChar_y, t_collectable.x_pos,t_collectable.y_pos) < 20)
	{
		t_collectable.isFound = true
	}
}

function drawCanyon(canyon){
	// Draw the main body of the canyon
	fill(100, 155, 255);
	rect(canyon.x_pos, 432, canyon.width, 150);

	// Draw the lighter vertical sections on the sides of the canyon
	fill(250, 182, 126);
	rect(canyon.x_pos, 432, 10, 150); // Left small vertical rect
	rect(canyon.x_pos + canyon.width - 10, 432, 10, 150); // Right small vertical rect

	// Additional features of the canyon
	fill(250, 182, 126);
	rect(canyon.x_pos, 492, 28, 150); 

	// Darkened sides with triangles and rectangles for depth effect
	
	fill(240, 172, 126);
	triangle(canyon.x_pos, 432, canyon.x_pos, 574, canyon.x_pos + 50, 578); 
	rect(canyon.x_pos + canyon.width - 20, 492, 20, 180); 
	triangle(canyon.x_pos + canyon.width, 432, canyon.x_pos + canyon.width, 574, canyon.x_pos + canyon.width - 30, 578);

	// if(gameChar_x > canyon.x_pos && gameChar_x < canyon.x_pos + canyon.width)
	// {
	// 	isPlummeting = true
	// }
	// else
	// {
	// 	isPlummeting = false
	// }


}

function checkCanyon(canyon)
{

	if(gameChar_x > canyon.x_pos && gameChar_x < canyon.x_pos + canyon.width)
	{
		isPlummeting = true
	}
	else
	{
		isPlummeting = false
	}
}

