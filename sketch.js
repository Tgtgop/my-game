var player, playerdata
var ground
var float1,float2


function Preload(){
    playerdata = loadJSON("spriteshet.json")

}

function setup(){
  canvas = createCanvas(1200,600);
  ground = new Ground(0, height - 1, width * 2, 1);
}

function Draw(){
    background(189)
    engine = Engine.create();
    world = engine.world;
    ground.display()
}