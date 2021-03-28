var background;
var cat,mouse

function preload() {
    
background = loadImage("garden.png");
catImage1 = loadAnimation("images/cat1.png");
mouseImage1 = loadAnimation("images/mouse1.png");
catImage2 = loadAnimation("images/cat2.png,cat3.png");
mouseImage3 = loadAnimation("images/mouse2.png,mouse3.png");
    
}

function setup(){
    createCanvas(1000,650);

    cat = createSprite(100,300,40,40);
    mouse = createSprite(400,300,40,40);
 
}

function draw() {
    background("background");
    
    if(cat.x - mouse.x , (cat.width - mouse.width)/2){
        cat.addAnimation("catRunning",catImage2);
        cat.changeAnimation("catRunning");
    }

   

    drawSprites();
}


function keyPressed(){

  

  if(keyCode === LEFT_ARROW){
      mouse.addAnimation("mouseTeasing",mouseImage2);
      mouse.changeAnimation("mouseTeasing");
      mouse.frameDelay = 25;
  }

 
 
    

}
