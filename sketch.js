var dog, sadDog, happyDog, database, foodS, foodStock;

function preload() {
  //load images here
  happyDog = loadImage("images/dogImg1.png");
  sadDog = loadImage("images/dogImg.png");
}

function setup() {
  createCanvas(500, 500);
  dog = createSprite(200, 200, 20, 20);
  dog.scale = 0.2;
  dog.addImage(sadDog);
  database = firebase.database();
  foodStock = database.ref('Food');
  foodStock.on("value", readStock);
  textSize(20);
  fill("white");
}


function draw() {
  background(46, 139, 87);
  text("food remmaining: " +foodS,200,50);
  if (keyWentDown(UP_ARROW)) {
    writeStock(foodS);
    dog.addImage(happyDog);
  }


  drawSprites();
  //add styles here
}
function readStock(data) {
  foodS = data.val();
}

function writeStock(x) {
if(x>0){
  x=x-1;

}else{
  x=0;
}
  database.ref('/').update({
    Food: x
  })


}





