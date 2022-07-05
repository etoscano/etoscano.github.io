import React , {useEffect} from 'react';

function Car() {
  var mouse = { x: 0, y: 0 }; //mouse.x, mouse.y
  // var width = document.documentElement.clientWidth;
  var width = 1440;
  var carpos = { x: 0, y: 0 };
  var dir = "normal";
  var car = document.getElementsByClassName("js-footer__car")[0];

  useEffect(() => {

    // var container = document.getElementsByClassName("js-footer__container")[0];
    // container.addEventListener('click', myFunction);
    document.addEventListener("mousemove", getMouse);

    const interval = setInterval(() => {
      followMouse()
    }, 50);


    return () => clearInterval(interval);
  }, []);



  function getMouse(e) {
    mouse.x = e.pageX;
    mouse.y = e.pageY;
  
    //Checking directional change
    if (mouse.x < width / 15) {
      dir = "left7";
    } else if (mouse.x < (width * 2) / 15) {
      dir = "left6";
    } else if (mouse.x < (width * 3) / 15) {
      dir = "left5";
    } else if (mouse.x < (width * 4) / 15) {
      dir = "left4";
    } else if (mouse.x < (width * 5) / 15) {
      dir = "left3";
    } else if (mouse.x < (width * 6) / 15) {
      dir = "left2";
    } else if (mouse.x < (width * 7) / 15) {
      dir = "left1";
    } else if (mouse.x < (width * 8) / 15) {
      dir = "normal";
    } else if (mouse.x < (width * 9) / 15) {
      dir = "right1";
    } else if (mouse.x < (width * 10) / 15) {
      dir = "right2";
    } else if (mouse.x < (width * 11) / 15) {
      dir = "right3";
    } else if (mouse.x < (width * 12) / 15) {
      dir = "right4";
    } else if (mouse.x < (width * 13) / 15) {
      dir = "right5";
    } else if (mouse.x < (width * 14) / 15) {
      dir = "right6";
    } else {
      dir = "right7";
    }
  
  }
  
  function followMouse() {

    var car = document.getElementsByClassName("js-footer__car")[0];
  
    //1. find distance X , distance Y
    var lambda = 0.6;
    var lambda2 = 0.2 * width;
  
    var distX = mouse.x * lambda + lambda2 - carpos.x;
    // var distY = mouse.y * lambda + lambda2 - carpos.y;
  
    var w = car.clientWidth;
    //Easing motion
    //Progressive reduction of distance
    carpos.x += distX / 5 - 0.1 * w;
    // carpos.y += distY/2;
  
    car.style.left = carpos.x + "px";
    // car.style.top = carpos.y + "px";
  
    var imgcar = document.getElementsByClassName("js-footer__img")[0];
  
    //Apply css class
    if (dir == "right7") {
      imgcar.src = "./CarR7.png";
    } else if (dir == "right6") {
      imgcar.src = "./CarR6.png";
    } else if (dir == "right5") {
      imgcar.src = "./CarR5.png";
    } else if (dir == "right4") {
      imgcar.src = "./CarR4.png";
    } else if (dir == "right3") {
      imgcar.src = "./CarR3.png";
    } else if (dir == "right2") {
      imgcar.src = "./CarR2.png";
    } else if (dir == "right1") {
      imgcar.src = "./CarR1.png";
    } else if (dir == "normal") {
      imgcar.src = "./Car1.png";
    } else if (dir == "left1") {
      imgcar.src = "./CarL1.png";
    } else if (dir == "left2") {
      imgcar.src = "./CarL2.png";
    } else if (dir == "left3") {
      imgcar.src = "./CarL3.png";
    } else if (dir == "left4") {
      imgcar.src = "./CarL4.png";
    } else if (dir == "left5") {
      imgcar.src = "./CarL5.png";
    } else if (dir == "left6") {
      imgcar.src = "./CarL6.png";
    } else if (dir == "left7") {
      imgcar.src = "./CarL7.png";
    }
  
  }
  
  // function myFunction() {
  //   // var sun = document.getElementById("sun");
  //   // sun.classList.toggle("sun");
  //   // sun.classList.toggle("sun2");
  
  //   var m1 = document.getElementsByClassName("js-footer__mountains__m1")[0];
  //   var m2 = document.getElementsByClassName("js-footer__mountains__m2")[0];
  //   var m3 = document.getElementsByClassName("js-footer__mountains__m3")[0];
  //   m1.classList.toggle("footer__mountains__m1");
  //   m2.classList.toggle("footer__mountains__m2");
  //   m3.classList.toggle("footer__mountains__m3");
  
  //   var bottombg = document.getElementsByClassName("js-footer__bg")[0];
  //   bottombg.classList.toggle("footer__road--night");
  // }




  return (


<div className="footer__container js-footer__container">


<svg className="footer__mountains " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" >
    <path className="js-footer__mountains__m1 " id="m1" fill="#AD7107" fillOpacity="1"
        d="M0,320L110.8,32L221.5,256L332.3,256L443.1,128L553.8,32L664.6,128L775.4,64L886.2,64L996.9,160L1107.7,160L1218.5,128L1329.2,256L1440,64L1440,320L1329.2,320L1218.5,320L1107.7,320L996.9,320L886.2,320L775.4,320L664.6,320L553.8,320L443.1,320L332.3,320L221.5,320L110.8,320L0,320Z"></path>

    <path  className="js-footer__mountains__m2 "  id="m2" fill="#387d02" fillOpacity="0.8"
        d="M0,320L110.8,128L221.5,224L332.3,32L443.1,128L553.8,128L664.6,64L775.4,224L886.2,224L996.9,128L1107.7,160L1218.5,64L1329.2,160L1440,96L1440,320L1329.2,320L1218.5,320L1107.7,320L996.9,320L886.2,320L775.4,320L664.6,320L553.8,320L443.1,320L332.3,320L221.5,320L110.8,320L0,320Z"></path>

    <path  className="js-footer__mountains__m3 "  id="m3" fill="#475370" fillOpacity="0.7"
        d="M0,256L42.4,96L84.7,160L127.1,256L169.4,128L211.8,96L254.1,0L296.5,224L338.8,160L381.2,96L423.5,256L465.9,192L508.2,128L550.6,96L592.9,192L635.3,160L677.6,320L720,128L762.4,96L804.7,192L847.1,320L889.4,256L931.8,0L974.1,160L1016.5,160L1058.8,288L1101.2,96L1143.5,256L1185.9,64L1228.2,160L1270.6,32L1312.9,128L1355.3,128L1397.6,64L1440,160L1440,320L1397.6,320L1355.3,320L1312.9,320L1270.6,320L1228.2,320L1185.9,320L1143.5,320L1101.2,320L1058.8,320L1016.5,320L974.1,320L931.8,320L889.4,320L847.1,320L804.7,320L762.4,320L720,320L677.6,320L635.3,320L592.9,320L550.6,320L508.2,320L465.9,320L423.5,320L381.2,320L338.8,320L296.5,320L254.1,320L211.8,320L169.4,320L127.1,320L84.7,320L42.4,320L0,320Z"></path>
</svg>

<div className="js-footer__car footer__car">
    <img src="./Car1.png" className="js-footer__img footer__img" alt="A car"/>
</div>
<div className=" js-footer__bg footer__road">
</div>


</div>



  );
}

export default Car;


