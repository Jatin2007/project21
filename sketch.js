var canvas;
var music;
var floor1, floor2, floor3, floor4;
var box;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
floor1 = createSprite(100,550,90,10);
floor1.shapeColor = "Blue";

floor2 = createSprite(300,550,90,10);
floor2.shapeColor = "Yellow";

floor3 = createSprite(500,550,90,10);
floor3.shapeColor = "Pink";

floor4 = createSprite(700,550,90,10);
floor4.shapeColor = "Green";

    //create box sprite and give velocity
box = createSprite(random(20,750),280,10,10);
box.shapeColor = "White";
box.velocityX = -2;
box.velocityY = -2;

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
createEdgeSprites();
box.bounceOff(edges);
   //add condition to check if box touching surface and make it box

    if( floor1.isTouching(box)&& box.bounceOff(floor1) ){
        box.shapeColor = "Blue";
        music.play();
    }

    if ( floor2.isTouching(box)){
        box.shapeColor = "Yellow"
        box.velocityX = 0;
        box.velocityY = 0;
        music.stop();
    }

    if( floor3.isTouching(box)&& box.bounceOff(floor3)){
        box.shapeColor = "Pink";
    }

    if( floor4.isTouching(box)&& box.bounceOff(floor4)){
        box.shapeColor = "Green";
    }


    drawSprites();
}

