
var form;


//create sprite for leader, robber1,robber2,robber3
var leader,leaderStand, leaderJump, leaderShoot
var robber1,robber2,robber3,robberImage;

//sprite for marshal
var marshal,marshalStand, marshalJump, marshalShoot;

//b1,b2,b3,b4,b5 = background images

function preload(){
  //animation because there are jumps scenes
  leaderStand = loadAnimation("")//leader standing
  leaderJump = loadAnimation("images/robber/1_")//leader jumping and for group of animations use ',' and add images
  leaderShoot = loadAnimation("")//
  robberImage = loadAnimation("")//
  marshalImage = loadAnimation("")
}


function setup() {
  createCanvas(displayWidth, displayHeight);
  //form = new Form()
  
  //create the sprite for all of them at random position
}

function draw() {
  background(255,255,255);  
  //form.display()


  drawSprites();
}