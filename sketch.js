var canvas;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    
    surfaces1=createSprite(100,550,190,20);
    surfaces1.shapeColor="red";
    surfaces2=createSprite(300,550,190,20);
    surfaces2.shapeColor="green";
    surfaces3=createSprite(500,550,190,20);
    surfaces3.shapeColor="yellow";
    surfaces4=createSprite(700,550,190,20);
    surfaces4.shapeColor="orange";
  

    
    
    //create box sprite and give velocity
    box=createSprite(700,520,50,50);
    box.shapeColor="pink";
    box.velocityY=-5;
    box.velocityX=-5;

}

function draw() {
    background("black");
    drawSprites();

  
    
    //create edgeSprite
    edges=createEdgeSprites();
    box.bounceOff(edges)
  
    
    //add condition to check if box touching surface and make it box
    if(box.isTouching(surfaces1)){
        box.shapeColor="red";
        music.play();
    }
    if(box.isTouching(surfaces2)){
        box.shapeColor="green";
        
    }
    if(box.isTouching(surfaces3)){
        box.shapeColor="yellow";
        
        box.velocityX=0;
        box.velocityY=0;
    }
    if(box.isTouching(surfaces4)){
        box.shapeColor="orange";

    }
}
