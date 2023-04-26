var sea,ship;
var seaImg,shipImg1,pShipImg;


function preload(){
  //uncomment the code to add animation to ship 

  shipImg1 = loadAnimation("ship-1.png","ship-2.png","ship-1.png","ship-2.png");
  //shipImg1 = loadAnimation("ship-1.png");
  //shipImg1 = loadAnimation("ship-1");
  //shipImg1 = loadAnimation("ship-1.png","ship-2.png","ship-1.png","ship-2.png");
  //shipImg1 = loadAnimation("ship-1","ship-2","ship-1","ship-2");
  
  seaImg = loadImage("sea.png");
  pShipImg = loadAnimation("ship_final_opt.gif")

  
}

function setup(){
  createCanvas(400,400);
  background("blue");

  // Moving background
  sea=createSprite(400,200);
  sea.addImage(seaImg);
  sea.velocityX = -5;
  sea.scale=0.3;

  
  ship = createSprite(130,200,30,30);
  ship.addAnimation("movingShip",shipImg1);
  ship.addAnimation("pirateShip",pShipImg)
  ship.scale =0.25;

  
  
}

function draw() {
  background(0);
  sea.velocityX = -3;
  
  
  //uncomment code to reset the background
  if(sea.x < 0){
    //sea.x = 0;
    //sea.x = sea.width;
    //sea.x = sea.width/8;
    //sea.y = height;
    //sea.x = 0;
    sea.x = sea.width/8
    
  }
   
  if (keyDown("space"))
  {
    ship.changeAnimation("pirateShip",pShipImg);
    ship.scale = 0.5
  }


  drawSprites(); 

   
}
    

  


  
   