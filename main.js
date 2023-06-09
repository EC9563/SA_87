/*get the canvas element using its id and store it in a variable “canvas” so that we can 
manipulate the canvas throughout the js code.*/
canvas = document.getElementById("myCanvas");
color = "red";

//Get rference of canvas created.
canvas.getContext("2d").beginpath();
canvas.getContext("2d").strokeStyle = color;
canvas.getContext("2d").lineWidth = 2;
canvas.getContext("2d").arc(200,200,40,0,2*Math.PI);
canvas.getContext("2d").stroke();

 

ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 2;
ctx.arc(200, 200, 40 ,0 , 2*Math.PI);
ctx.stroke();

// Attach canvas and addEventListener with 'mousedown' event.
canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e)
{
    //taking color from input box
    //additional activity start
    color = document.getElementById("color").value;
    console.log(color);

    //additional activity ends

    mouse_x = e.clientX - canvas.offsetLeft;
    mouse_y = e.clientY - canvas.offsetTop;

    console.log("X =" + "mouse_x +","Y = " = mouse_y);
    //Get the x and y coordinates when the mouse is clicked.
    
        
    console.log("X = " + mouse_x + " ,Y =  " + mouse_y);
    //Call the "circle()" function with mouse_x and mouse_y as parameters.  
    function circle(mouse_X , mouse_y)
    {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = 2;
        ctx.arc(200, 200, 40 ,0 , 2*Math.PI);
        ctx.stroke();   
    }

}


function circle(mouse_x , mouse_y)
{
ctx.beginPath();
//Assign 'color' to the 'strokeStyle' of the circle.
ctx.strokeStyle = color;
ctx.lineWidth = 2;
// Use "arc()" function to create a circle.


ctx.stroke();
}

//additional activity



	
