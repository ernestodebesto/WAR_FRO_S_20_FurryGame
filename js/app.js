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

  this.hideVisibleFury = function() {
    var findFurry = document.querySelector('.furry');
    findFurry.classList.remove('furry');
  }
  this.showFurry = function() {

    this.board[ this.index(this.furry.x,this.furry.y) ].classList.add('furry');
  }

  this.showCoin = function () {
    this.board[ this.index(this.coin.x,this.coin.y) ].classList.add('coin');
  }

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

  this.startGame = function () {
    this.idSetInterval=setInterval(function () {
          self.moveFurry();
        }, 250);
  }
}

var testGame =  new Game() ;

testGame.startGame();
testGame.showFurry();
testGame.showCoin();
