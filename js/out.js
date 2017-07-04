/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

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
    var self=this;
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


/***/ })
/******/ ]);