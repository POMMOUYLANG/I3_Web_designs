const canvas = document.querySelector("#canvas");

function drawRectangular(ctx, x, y){
    ctx.fillRect(x, y, 150, 70);       
    ctx.strokeRect(x, y, 150, 70);
}
if(canvas.getContext){

    let ctx = canvas.getContext("2d");

    ctx.fillStyle = "orange";
    ctx.strokeStyle = "black";

    let x = 50;
    let y = 50;
    for(let i = 0 ; i<6; i++){
        console.log(i);
        drawRectangular(ctx, x, y)
        x = x + 150;
    }
}
// const canvas1 = document.querySelector("#canvas1");

// function drawRectangular1(ctx, x, y){
//     ctx.fillRect(x, y, 150, 70);       
//     ctx.strokeRect(x, y, 150, 70);
// }
// if(canvas.getContext){

//     let ctx = canvas.getContext("2d");

//     ctx.fillStyle = "yellow";
//     ctx.strokeStyle = "black";

//     let x = 50;
//     let y = 50;
//     for(let i = 0 ; i<6; i++){
//         console.log(i);
//         drawRectangular1(ctx, x, y)
//         x = x + 150;
//     }
// }
// if(canvas.getContext){

//     let ctx = canvas.getContext("2d");

//     ctx.fillStyle = "#F0DB4F";
//     ctx.strokeStyle = "red";

//     ctx.fillRect(50, 50, 150, 100);       
//     ctx.strokeRect(50, 50, 150, 100);
// }