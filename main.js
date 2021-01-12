canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
car1_width=140;
car1_height=70;
car1_image="Car 1.png";
car1_X=10;
car1_Y=10;
car2_width=140;
car2_height=70;
car2_image="Car 2.png";
car2_X=10;
car2_Y=100;
background_image = "https://i.postimg.cc/bv5d35nK/racing.jpg";
function add(){
    background_imgTag = new Image(); //defining a variable with a new image
     background_imgTag.onload = uploadBackground; // setting a function, onloading this variable
      background_imgTag.src = background_image; // load imagebackground_imgTag = new Image(); //defining a variable with a new image
     background_imgTag.onload = uploadBackground; // setting a function, onloading this variable
      background_imgTag.src = background_image; // load image
    car1_imgTag= new Image();
    car1_imgTag.onload=uploadCar1;
    car1_imgTag.src=car1_image;
    car2_imgTag = new Image();
    car2_imgTag.onload = uploadCar2;
    car2_imgTag.src=car2_image;

}
function uploadBackground() { ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height); }
  
 function uploadCar1(){
    ctx.drawImage(car1_imgTag, car1_X, car1_Y, car1_width, car1_height);
    }
    function uploadCar2(){
        ctx.drawImage(car2_imgTag,car2_X,car2_Y,car2_width,car2_height);
    }

window.addEventListener("keydown",my_keydown);
function my_keydown(e){
    var keyPressed=e.keyCode;
    console.log(keyPressed);

if (keyPressed=="38"){
    car1_up();
console.log("Up arrow key");
}
if (keyPressed=="40"){
    car1_down();
console.log("down arrow key");
}
if (keyPressed=="37"){
    car1_left();
    console.log("left arrow key");
}
if (keyPressed=="39"){
    car1_right();
    console.log("right arrow key");
}
if (keyPressed=="87"){
    car2_up();
    console.log("key w");
}
if (keyPressed=="83"){
    car2_down();
    console.log("key s");
}
if (keyPressed=="65"){
    car2_left();
    console.log("key a");
}
if (keyPressed=="68"){
    car2_right();
    console.log("key d");
}
}
function car1_up(){
    if (car1_Y>=0){
        car1_Y=car1_Y-10;
        console.log("When Up arrow is pressed x=" +car1_X + " Y =" +car1_Y);
        uploadBackground();
        uploadCar1();
        uploadCar2();
    }
}
function car1_down(){
    if (car1_Y<=500){
        car1_Y=car1_Y+10;
        console.log("When  down is pressed x=" +car1_X + " Y =" +car1_Y);
        uploadBackground();
        uploadCar1();
        uploadCar2();
    }
}
function car1_left(){
    if (car1_X>=0){
        car1_X=car1_X-10;
        console.log("When  left is pressed x=" +car1_X + " Y =" +car1_Y);
        uploadBackground();
        uploadCar1();
        uploadCar2();
    }
}
function car1_right(){
    if (car1_X<=500){
        car1_X=car1_X + 10;
        console.log("When right is pressed x=" +car1_X + " Y =" +car1_Y);
        uploadBackground();
        uploadCar1();
        uploadCar2();
    }
}
function car2_down(){
    if (car2_Y<=500){
        car2_Y=car2_Y+10;
        console.log("When s is pressed x=" +car2_X + " Y =" +car2_Y);
        uploadBackground();
        uploadCar1();
        uploadCar2();
    }
}
function car2_left(){
    if (car2_X>=0){
        car2_X=car2_X-10;
        console.log("When a key is pressed x=" +car2_X + " Y =" +car2_Y);
        uploadBackground();
        uploadCar1();
        uploadCar2();
    }
}
function car2_right(){
    if (car2_X<=500){
        car2_X=car2_X+10;
        console.log("When d key is pressed x=" +car2_X + " Y =" +car2_Y);
        uploadBackground();
        uploadCar1();
        uploadCar2();
    }
}
function car2_up(){
    if (car2_Y>=0){
        car2_Y=car2_Y-10;
        console.log("When w arrow is pressed x=" +car2_X + " Y =" +car2_Y);
        uploadBackground();
        uploadCar1();
        uploadCar2();
    }
}
if(car1_X > 700) {
    console.log("Car 1 Won !! 👏");
    document.getElementById(" game_status").innerHTML= "Car 1 won !! 👏";
}
if(car2_X > 700) {
    console.log("Car 2 Won !! 👏");
    document.getElementById(" game_status").innerHTML= "Car 2 won !! 👏";
}
