
let usuario = prompt("Introduzca nombre de Usuario")
let contraseña = prompt ("Introduzca contraseña")

if (usuario == "administrador" && contraseña == "1234") {
    alert ("Bienvenido")
} 
else {
    alert ("Usuario o Contraseña Incorrectos")}

let numero1 = prompt ("Introduzca el numero")
let numero2 = prompt ("Introduzca el numero")
let numero3 = prompt ("Introduzca el numero")


let max = Math.max(numero1,numero2,numero3);
console.log("El numero mayor es" + " " + max);
let min = Math.min(numero1,numero2,numero3);
console.log("El numero menor es" + " "+ min);

let saludo = "Hola mundo"

function bienvenida(){
    console.log(saludo);
    alert(saludo);
}