console.log('hello world');
function Furry() {
  this.x = 0;
  this.y = 0;
  this.direction = "right";
}

function Coin () {
  this.x= Math.floor(Math.random() * 10);
  this.y= Math.floor(Math.random() * 10);
}
var wholeBoard = document.querySelectorAll('#board div');


function Game() {
  var self=this;
  this.board = wholeBoard;
  this.furry = new Furry();
  this.coin = new Coin();
  this.score = 0;
  this.index = function(x,y) {
    return x + (y * 10);
  }
  //zabiera klase furry( podmetoda)
  this.hideVisibleFury = function() {
    var findFurry = document.querySelector('.furry');
    findFurry.classList.remove('furry');
  }
  // pokazuje furiego( podmetoda)
  this.showFurry = function() {
    if ((this.furry.y>9) || (this.furry.y<0)|| (this.furry.x>9) || (this.furry.x<0)){
      clearInterval(this.idSetInterval);
    }
    this.board[ this.index(this.furry.x,this.furry.y) ].classList.add('furry');
    // console.log('x:  '+ this.furry.x + '  y  : '+ this.furry.y);
    // console.log('x+1:  '+ this.furry.x + '  y+1  : '+ this.furry.y);
  }
// // pokazuje coin( podmetoda)
  this.showCoin = function () {
    this.board[ this.index(this.coin.x,this.coin.y) ].classList.add('coin');
  }
  // rusza furym (podmetoda)
  this.moveFurry = function () {
    this.hideVisibleFury();
    if(this.furry.direction === "right") {
      this.furry.x +=  1;
    } else if (this.furry.direction === "left") {
      this.furry.x -= 1;
    } else if (this.furry.direction === "down") {
      this.furry.y += 1;
    } else if (this.furry.direction === "up") {
      this.furry.y -= 1;
  }
    this.showFurry();
  }
  //zaczyna gre
  this.startGame = function () {
    this.idSetInterval=setInterval(function () {
          self.moveFurry();
        }, 500);
  }

  //skreca


  this.turnFurry =  function(event) {
    var self=this;
    switch (event.which) {
        case 37:
        self.furry.direction = 'left';
        break;
        case 38:
        self.furry.direction = 'up';
        break;
        case 39:
        self.furry.direction = 'right';
        break;
        case 40:
        self.furry.direction = 'down';
        break;
        default: self.furry.direction = 'right;'
      }
  }
  //koniec gry

}
var testGame =  new Game() ;

testGame.startGame();
testGame.showFurry();
testGame.showCoin();
document.addEventListener('keydown', function(event){
    testGame.turnFurry(event);
});
