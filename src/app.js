/* eslint-disable */
// import "bootstrap";
// import "./style.css";

// import "./assets/img/rigo-baby.jpg";
// import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  //   document.getElementById("test").innerHTML = "texto de prueba";
  //   console.log("Entre en la funcion");
  function getRandomElement(arr) {
    let index = Math.floor(Math.random() * arr.length);
    return arr[index];
  }
  function generateExcuse() {
    console.log("entre en generate excuse");
    let who = ["The dog", "My grandma", "The mailman", "My bird"];
    let action = ["ate", "peed", "crushed", "broke"];
    let what = ["my homework", "my phone", "the car"];
    let when = [
      "before the class",
      "when I was sleeping",
      "while I was exercising",
      "during my lunch",
      "while I was praying"
    ];
    let excuse = `${getRandomElement(who)} ${getRandomElement(
      action
    )} ${getRandomElement(what)} ${getRandomElement(when)}.`;
    console.log(" este es el excuse", excuse);
    //document.querySelector("#excuse").innerHTML= excuse;
    return excuse;
  }
  document.getElementById("excuse").innerHTML = generateExcuse();
};
