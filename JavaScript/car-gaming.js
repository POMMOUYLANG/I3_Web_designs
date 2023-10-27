// console.log("Hello Word!");

const defaultSpeed = 5;
const playGround = {
  w: 1600,
  h: 2300,
};

class Player {
  constructor(name, car) {
    this.name = name;
    this.car = car;
    this.score = 0;
    this.level = 2;
    this.x = 500;
    this.y = 1900;
  }
}
class Obstacle {
  constructor(name, obstacle) {
    this.name = name;
    this.obstacle = obstacle;
    this.x = Math.floor(Math.random() * playGround.w) + 1;
    this.y = 0;
  }
}

const canvas = document.querySelector("#my-canvas");
if (canvas.getContext) {
  let context = canvas.getContext("2d");

  // Variables
  let currentY = 0;
  let current1Y = -playGround.h;

  const road = new Image();
  road.src = "../Image/ROAD1.png";
  const car = new Image();
  car.src = "../Image/Owner_car.png";

  const player1 = new Player("Sok", car);
  const obstacles = new Array();
  let speed = player1.level * defaultSpeed;

  for (let i = 0; i < 10; i++) {
    obstacles.push(new Obstacle("Obstacle" + i, "test"));
  }

  console.log(obstacles);

  // Add event listener to the game
  document.addEventListener("keydown", function (e) {
    // keydown (arrow left/right)
    if (e.keyCode == 39) {
      player1.x = player1.x + speed;
      player1.x = player1.x > playGround.w ? playGround.w : player1.x;
    }
    if (e.keyCode == 37) {
      player1.x = player1.x - speed;
      player1.x = player1.x < 0 ? 0 : player1.x;
    }
  });
  document.addEventListener("mousedown", function (e) {
    let rect = canvas.getBoundingClientRect();
    let x = e.clientX - rect.left;
    let y = e.clientY - rect.top;
    console.log(x, y);
  });
  // Functions
  function startGame() {
    window.requestAnimationFrame(startGame);

    context.clearRect(0, 0, playGround.w, playGround.h);
    context.drawImage(road, 0, current1Y);
    context.drawImage(road, 0, currentY);
    currentY += speed;
    current1Y += speed;

    if (currentY >= playGround.h) currentY = 0;
    if (current1Y >= 0) current1Y = -playGround.h;

    context.drawImage(player1.car, player1.x, player1.y);
  }

  // Promises
  const loadRoadPromise = new Promise((resolve) => {
    road.onload = () => resolve();
  });
  const loadCarPromise = new Promise((resolve) => {
    car.onload = () => resolve();
  });

  Promise.all([loadRoadPromise, loadCarPromise]).then(() => {
    startGame();
  });
}
















































// const canvas = document.querySelector("#my-canvas");
// if(canvas.getContext){
//   let context = canvas.getContext("2d");

//   //Variable
//   const defaultspeed = 5;
//   const playGround = {
//     w: 1600,
//     h: 2300,
//   };

//   class Player {
//     constructor(name, car) {
//       this.name = name;
//       this.car = car;
//       this.score = 0;
//       this.level = 2;
//       this.x = 450;
//       this.y = 1900;
//     }
//   }

//   //Variable
//   let currentY = 0;
//   let current1Y = -playGround.h;

//   const road = new Image ();
//   road.src = "../Image/ROAD1.png";
//   const owncar = new Image ();
//   owncar.src = "../Image/Owner_car.png";
//   const police = new Image ();
//   police.src = "../Image/police-car.png";

//   const player1 = new Player("Sok", car);
//   let speed = player1.level * defaultSpeed;

//   // Add event listener to the game
//   document.addEventListener("keydown", function (e) {
//     // keydown (arrow left/right)
//     if (e.keyCode == 39) {
//       player1.x = player1.x + speed;
//       player1.x = player1.x > playGround.w ? playGround.w : player1.x;
//     }
//     if (e.keyCode == 37) {
//       player1.x = player1.x - speed;
//       player1.x = player1.x < 0 ? 0 : player1.x;
//     }
//   });
//   document.addEventListener("mousedown", function (e) {
//     let rect = canvas.getBoundingClientRect();
//     let x = e.clientX - rect.left;
//     let y = e.clientY - rect.top;
//     console.log(x, y);
//   });

//   //Function
//   function StartGame() {
//     window.requestAnimationFrame(StartGame);

//       context.clearRect(0, 0, playGround.w, playGround.h);
//       context.drawImage(road, 0, current1Y);
//       context.drawImage(road, 0, currentY);
//       currentY += speed;
//       current1Y += speed;

//       if (currentY >= playGround.h) currentY = 0;
//       if (current1Y >= 0) current1Y = -playGround.h;

//       context.drawImage(player1.owncar, 450, 1900);
//       context.drawImage(police, 80, 200);
//   }

//   //Promise
//   const loadRoadPromise =  new Promise((resolve) => {
//     load.onload = () => reslove();
//   });

//   const loadCarPromise =  new Promise((resolve) => {
//     Car.onload = () => reslove();
//   });
  
//   Promise.all(loadRoadPromise,loadCarPromise).then(() => {
//     StartGame();
//   });
 
//   road.onload = () => {
//     StartGame();
//   };
// }
















// function drawImage(context, image) {
//   const imageTag = new Image(); // <img />
//   imageTag.src = image.src;     // <img src="./assets/images/car.png" />

//   imageTag.onload = function () {
//     context.drawImage(imageTag, image.x, image.y);
//   };
// }
// const canvas = document.querySelector("#my-canvas");
// if (canvas.getContext) {
//   let context = canvas.getContext("2d");

//   const car = {
//     src: "../Image/Own-car.png",
//     x: 170,
//     y: 430,
//   };
//   const car1 = {
//     src: "../Image/police-car.png",
//     x: 290,
//     y: 10,
//   };
//   const stone = {
//     src: "../Image/stone.png",
//     x : 30,
//     y: 10,
//   };

//   drawImage(context, car);
//   drawImage(context, car1);
//   drawImage(context, stone);
// }






// if(canvas.getContext){

//     let context = canvas.getContext("2d");
//     const car = new Image();
//     car.src = "";
//     car.onload = function () {
//         context.drawImage(car, 0, 0);
//   };

// }
