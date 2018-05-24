function alerta()
{
var mensaje;
var nombre = prompt("Introduzca su nombre:");
var rightAnswer = 0;
var wrongAnswer = 0;
if (nombre == null || nombre == "") {
        mensaje = "Bienvenida";
      } else {
        mensaje = "Bienvenida " + nombre;
        document.getElementById("usuario").innerHTML = mensaje;

var gameplay = prompt ("¿Quieres jugar 1.si 2.no?");
if (gameplay == ("1")) {
  var firstQuestion = prompt ("¿Cuánto es 2+2?");
}
if (firstQuestion == ("4")) {
console.log("verdadero", rightAnswer = rightAnswer+1);
} else {
  firstQuestion !=("4")
  console.log("falso", wrongAnswer= wrongAnswer+1);
}
var secondQuestion = prompt("¿Cuánto es 5*1?");
if (secondQuestion == ("5")) {
  console.log("verdadero", rightAnswer = rightAnswer+1);
} else {
  secondQuestion !=("5")
  console.log("falso", wrongAnswer = wrongAnswer+1);
}
var thirdQuestion = prompt("Cuánto es 1,000 - 500");
if (thirdQuestion == ("500")) {
  console.log("verdadero", rightAnswer = rightAnswer+1);
} else {
  (thirdQuestion !=("500"))
  console.log("falso", wrongAnswer = wrongAnswer+1);
}
alert("¡¡¡Vamos a ver tus resultados!!!")
if (true) {
  document.getElementById("tableok").innerHTML = "¡¡¡CORRECTAS!!!";
  document.getElementById("tablewrong").innerHTML = "¡¡¡MALAS!!!";

}
}
}
