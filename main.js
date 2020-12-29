mouseEvent = "empty";
canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

var mycolor;
var myradius;
var mywidth;

canvas.addEventListener("mousedown",mymousedown);
function mymousedown(e){
mycolor=document.getElementById("colorin").value;
myradius=document.getElementById("radiusin").value;
mywidth=document.getElementById("widthin").value;
    mouseEvent = "mousedown";
}

canvas.addEventListener("mouseup",mymouseup);
function mymouseup(e){
    mouseEvent = "mouseup";
}

canvas.addEventListener("mouseleave",mymouseleave);
function mymouseleave(e){
    mouseEvent = "mouseleave";
}

canvas.addEventListener("mousemove",mymousemove);
function mymousemove(e){
    current_position_of_mouse_X = e.clientX - canvas.offsetLeft;
    current_position_of_mouse_Y = e.clientY  - canvas.offsetTop;
 if(mouseEvent == "mousedown")
 {
     
    
     console.log("Current Position of X and Y cordinates = ");
     console.log("x= "+current_position_of_mouse_X+"y= "+current_position_of_mouse_Y);
     ctx.beginPath();
     ctx.strokeStyle=mycolor;
     ctx.lineWidth = mywidth;
     ctx.arc(current_position_of_mouse_X,current_position_of_mouse_Y,myradius,0,2*Math.PI);
     ctx.stroke();
 }
}
