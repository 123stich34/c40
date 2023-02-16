 var game,player,form,bg,pc,db,gameState,track,c1i,c2i,c1,c2,cars,allPlayers
 function preload(){
  bg=loadImage("background.png")
  track=loadImage("track.jpg")
  c1i=loadImage("car1.png")
  c2i=loadImage("car2.png")


 }
function setup() {
  createCanvas(windowWidth,windowHeight );
  db=firebase.database()
  game=new Game()
  game.getstate()
  game.start()
}

function draw() 
{
  //console.log(gameState)
  background(bg);
  if(pc==2){
    game.setState(1)
  }
  if(gameState==1){
   // console.log("play")
   game.play()
  }

}
function windowResized(){
  resizeCanvas(windowWidth,windowHeight)
}




