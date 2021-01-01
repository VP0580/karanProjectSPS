var chosen,chooseRock,chooseScissors,choosePaper,chosenItem,computer,choice,player,start,pressed,winner;
var chooseRockImg ,choosePaperImg,chooseScissorsImg,chosenItemImg,startImg;

function preload(){
chooseRockImg = loadAnimation("images/Rock.png");
choosePaperImg = loadAnimation("images/Paper.png");
chooseScissorsImg = loadAnimation("images/Scissors.png");
chosenItemImg=loadAnimation("images/Mystery.png");
startImg=loadAnimation("images/Start.png");

}


//buttons
function setup(){
  createCanvas(600, 200);
 chooseRock = createSprite(70,100);
chooseRock.addAnimation("Rock",chooseRockImg);
 choosePaper = createSprite(200,100);
choosePaper.addAnimation("Paper",choosePaperImg);
 chooseScissors = createSprite(330,100);
chooseScissors.addAnimation("Scissors",chooseScissorsImg);

//chosen item
 chosen = "none";
 chosenItem = createSprite(250, 172.5);
chosenItem.addAnimation("chosen",chosenItemImg);
chosenItem.scale = 0.5;

//computer item
 computer = createSprite(80,300);
 choice = 0;
computer.addAnimation("chosen",chosenItemImg);

//player item
 player = createSprite(320,300);
player.addAnimation("chosen",chosenItemImg);

//start button
var start = createSprite(200,375);
var pressed = false;
start.addAnimation("start",startImg);
start.scale = 0.3;

//winner selected
 winner = "not selected";
}
function draw() {
  //draw background
  background(200,200,200);
  
  //choosing text
  textSize(30);
  fill("black");
  text("Choose One:", 115,40);
  
  //what you chose
  textSize(25);
  text("You Chose:", 90, 180);
  
  //computer text
  text("Computer:",20,240);
  
  //player text
  text("You:",295,240);
  
  //dividing line
  fill(50,50,50);
  rect(0,200,400,10);
  
  //button function
  if(mousePressedOver(chooseRock)){
    chosen = "Rock";
    chosenItem.addAnimation("Rock",chooseRockImg);
    chosenItem.scale = 0.5;
  }
  if(mousePressedOver(choosePaper)){
    chosen = "Paper";
    chosenItem.addAnimation("Paper",choosePaperImg);
    chosenItem.scale = 0.5;
  }
  if(mousePressedOver(chooseScissors)){
    chosen = "Scissors";
    chosenItem.addAnimation("Scissors",chooseScissorsImg);
    chosenItem.scale = 0.5;
  }
  
  //start the duel
  if(mousePressedOver(start) && chosen !== "none" && pressed === false){
    player.addAnimation("chosen",chosenItem);
    choice = round(random(1,3));

    if(choice === 1){
      computer.addAnimation("Rock",chooseRockImg);
    }else if(choice === 2){
      computer.addAnimation("Paper",choosePaperImg);
    }else if(choice === 3){
      computer.addAnimation("Scissors",chooseScissorsImg);
    }
    pressed = true;
    
    if((chosen === "Rock" && choice === 1) || (chosen === "Paper" && choice === 2) || (chosen === "Scissors" && choice === 3)){
      winner = "none";
    }else if((chosen === "Rock" && choice === 2) || (chosen === "Paper" && choice === 3) || (chosen === "Scissors" && choice === 1)){
      winner = "computer";
    }else{
      winner = "player";
    }
    console.log(winner);
  }
  
  if(winner === "none"){
    textSize(50);
    text("Draw", 140,310);
  }else if(winner === "computer"){
    textSize(30);
    text("Computer\n   Wins!", 135,300);
  }else if(winner === "player"){
    textSize(30);
    text("You Win!", 140,310);
  }
  
  //end the press
  if(mouseWentUp()){
    pressed = false;
  }
  //draw sprites
  drawSprites();
}


