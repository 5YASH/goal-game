
var canvas=new fabric.canvas('myCanvas');

//Set initial positions for ball and hole images.
bally=_0;
ballx=_0;
hole_y=400;
hole_x=800;
block_image_width = 5;
block_image_height = 5;

function load_img(){
	fabric.image.fromURL("golf-h1.png",function(img){
		hole_obj=img;
		hole_obj.scaletowidth(50);
		hole_obj.scaletoheight(50);
hole_obj.set({
	top:hole_y,
	left:hole_x,
});
canvas.add(hole_obj);
	});
}
function new_image()
{
fabric.image.fromURL("ball.png"), function(img) {
	ball_obj=img;
	ball_obj.scalletowidth(50);
	ball_obj.scaletoheight(50);
	ball_obj.set({
		top:ball_y,
		left:ball_y
	});
	canvas.add(ball_obj);
});
{
if(((ball_x==hole_x)&&(ball_y==hole_y)){
	canvas.remove (ball_obj);
	document.getElementById(hd3).innerHTML="You haveHit the Goal!!!"
document.getElementById("myCanvas").style.bordercolor="red";
function down()
{
	if(ball_y <=450)
{
	ball_y = ball_y + block_image_height;
	console.log("block image height = " + block_image_height);
	console.log("When Up arrow key is pressed,X = " + ball_x + " ,Y = "+ball_y);
	canvas.remove(ball_obj);
	new_image();
	febric.image.fromURL("ball.png", function(img){
		window.addEventListener("keydown",my_keydown);
		ball_obj.scaletowidth(50);
		ball_obj.scaletoheight(50);
}
		
}

}

	new_image();
}

function new_image()
{
	// write code to Upload ball image on canvas
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	/* Check the coordinates of the ball and hole images to finish the game. 
	And id coordinates matches them remove ball image, 
	display "GAME OVER!!!" 
	and make canvas border 'red'. */
	
	else{
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	function up()
	{
		// Write a code to move ball upward.
	}

	function down()
	{
		 // Write a code to move ball downward.
	}

	function left()
	{
		if(ball_x >5)
		{
			// Write a code to move ball left side.
		}
	}

	function right()
	{
		if(ball_x <=1050)
		{
			// Write a code to move ball right side.
		}
	}
	
}

