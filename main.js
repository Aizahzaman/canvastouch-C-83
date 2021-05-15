var canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

var lastpositionofx;
var lastpositionofy;
color="red";

width=screen.width;

canvasnewheight=screen.height-150;
canvasnewwidth=screen.width-50;
if (width<992){
    document.getElementById("myCanvas").width=canvasnewwidth;
    document.getElementById("myCanvas").height=canvasnewheight;
}

canvas.addEventListener("touchstart",TouchStart);

function TouchStart(e){
   lastpositionofx = e.touches[0].clientX - canvas.offsetLeft;
   lastpositionofy = e.touches[0].clientY - canvas.offsetTop;

    color=document.getElementById("input").value;
}



canvas.addEventListener("touchmove",TouchMove);

function TouchMove(e){
    
    current_mouse_x=e.touches[0].clientX-canvas.offsetLeft;
    current_mouse_y=e.touches[0].clientY-canvas.offsetTop;
    
   
        ctx.beginPath(); 
        ctx.strokeStyle = color; 
        ctx.lineWidth = 5;
        
        ctx.moveTo(lastpositionofx,lastpositionofy);
        ctx.lineTo(current_mouse_x,current_mouse_y);
        ctx.stroke();


lastpositionofx=current_mouse_x;
lastpositionofy=current_mouse_y;

}

function clearcanvas() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
}