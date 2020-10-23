var dog, happyDog, database, foodS, foodStock;

//img
var dogImg;

function preload()
{
  dogImg=loadImage('Dog.png')
  happyDog=loadImage('happydog.png')
}

function setup() {
	createCanvas(500, 500);
  background(46, 139, 87)

dog =createSprite(250,250,30,30);

dog.scale=0.2

database = firebase.database();

foodStock= database.ref("Food");
foodStock.on("value", readStock, error)



}


function draw() {  

if(keyDown(UP_ARROW))
{

writeStock(foodS);
dog.addImage(happyDog);

}
else{dog.addImage(dogImg)}




  drawSprites();
  textSize(20);
  fill("blue")
  text("Note: Press the UP_ARROW To Feed the Dog Milk",10,100)

}



function error()

{


console.log("ERROR!!!!!!")


}

function readStock(data){

  foodS=data.val();
}

function writeStock(x){

if(x<=0){
  x=0;
}
else{

  x=x-1
}
database.ref('/').update({
  Food:x
})

}


