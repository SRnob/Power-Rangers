


var canvas = new fabric.Canvas('myCanvas');
// Create canvas variable
 blockY=1;
 blockX=1;

blockImageWidth = 350;
blockImageHeight = 430;

var blockImageObject= "";

function newImage(getImage)
{
	fabric.Image.fromURL(get_image, function(Img){
		block_image_object = Img;

		block_image_object.scaleToWidth(block_image_width);
		block_image_object.scaleToHeight(block_image_height);
		block_image_object.set({
			top:block_y,
			left:block_x
		});
		canvas.add(block_image_object);
	})
}

window.addEventListener("keydown", myKeyDown);

function myKeyDown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

	if(keyPressed == '69') // é a tecla E
	{
		newImage('rr1.png');
	}
	if(keyPressed == '86')	// é a tecla V
	{
		blockX = 200;
		newImage('gr.png');
	}
	
	if(keyPressed == '65') // é a tecla A
	{
		blockX =350;
		newImage('yr.png');
	}
	if(keyPressed == '82')	// é a tecla R 
	{
		blockX = 600;
		newImage('pr.png');
	}
	if(keyPressed == '73') // é a tecla I
	{
		blockX = 700;
		newImage('rr.jpg');
	}
	
}

