#index.html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width">
    <title>repl.it</title>
    <link href="index.css" rel="stylesheet" type="text/css" />
  </head>
  <body>
    <script src="index.js"></script>
    <canvas id="snake" width="400" height="400"></canvas>
  </body>
</html>

#index.js
window.onload=function() {
  canvas = document.getElementById("snake");
  pen = canvas.getContext("2d");
  document.addEventListener("keydown",keyPush);
  //set the frames per sec
  setInterval(game,1000/15)
}

/* these variables are global so don't 
use var like normal */

//player pos
player_x = 10;
player_y = 10;

// set grid size to 20 x 20
grid_size = 20;
tile_count = 20;

//apple pos
apple_x =15;
apple_y =15;

//store the whole snake x and y pos
trail=[];

//starting length
tail = 6;

//player speed
x_speed=0;
y_speed=0;

//game logic
function game(){
  //update player pos
  player_x+=x_speed;
  player_y+=y_speed;
  //boudarys
  if (player_x<0){
    player_x = tile_count-1;
  }
  if (player_x> tile_count-1){
    player_x=0;
  }
  if (player_y<0){
    player_y = tile_count-1;
  }
  if (player_y> tile_count-1){
    player_y=0;
  }
  //create black screen
  pen.fillStyle="black";
  pen.fillRect(0,0,canvas.width,canvas.height)
  //snake 
  pen.fillStyle="green";
  trail.push({x:player_x,y:player_y});
  while(trail.length>tail){
    // deletes extra tail values
    trail.shift()
  }
  for (var i=0;i<trail.length-1;i++){
    pen.fillRect(trail[i].x*grid_size,trail[i].y*grid_size,grid_size,grid_size)
    //if player hits trail
    if(trail[i].x==player_x && trail[i].y==player_y){
      tail = 6;
    }
  //detect ap
    
  }
  //store x and y pos
  
//ple collition
  if (apple_x == player_x && apple_y == player_y){
    //plus 1 tail
    tail++;
    //random
    apple_x = Math.floor(Math.random()*tile_count)
    apple_y = Math.floor(Math.random()*tile_count)

  }
  //draw apple
  pen.fillStyle="red";
  pen.fillRect(apple_x*grid_size,apple_y*grid_size,grid_size,grid_size)
  for (x=0;x<tile_count;x++){
    
  pen.beginPath();
  pen.moveTo(x*grid_size,0*grid_size);
  pen.lineTo(x*grid_size,tile_count*grid_size);
  pen.stroke();
  }
  for (x=0;x<tile_count;x++){
    
  pen.beginPath();
  pen.moveTo(0*grid_size,x*grid_size);
  pen.lineTo(tile_count*grid_size,x*grid_size);
  pen.stroke();
  }
}
function keyPush(evt){
  switch(evt.keyCode){
    case 37: //left 
      x_speed=-1;
      y_speed=0;
      break;
    case 38: //up
      y_speed=-1;
      x_speed=0;
      break;
    case 39: //right
      x_speed=1;
      y_speed=0;
      break;
    case 40: //down
      y_speed=1;
      x_speed=0;
      break;
  }
}
