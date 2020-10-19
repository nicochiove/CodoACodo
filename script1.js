var nombre= "Nicolás"
var parent = document.createElement("div");
parent.setAttribute("id","parrafo")
//var p = document.createElement("p");
//p.innerHTML= `Mi nombre es ${nombre}.`
//parent.append(p);
parent.innerHTML= `<p>Mi nombre es ${nombre}.</p>`

document.body.appendChild(parent)

document.getElementById("parrafo").addEventListener("click",function(){console.log("Hiciste click soble el texto");})
























/*
var numero1= 5
var numeroDos= 10
//nombre= "Juan"

{
	let nombre= "Nicolás"
	let apellido= "Chiovetta"
	var nombreApellido= "Nicolás Chiovetta"
	console.log(nombre +" "+ apellido)
}

const pi= 3.14




var numeroTabla= prompt("Ingrese un número")
while (numeroTabla != 0){
	console.log("La tabla del "+numeroTabla+":")
	
	for (let i=1; i<=10; i++){
		console.log(numeroTabla+" x " +i+": "+ parseInt(numeroTabla) * i)
	}
	numeroTabla= prompt("Ingrese otro número")
}

dia = window.prompt("Coloca aquí el día en el que naciste (dos digitos)")
mes = window.prompt("Coloca aquí el mes en el que naciste (dos digitos)")

zodiaco = dia + mes
console.log(zodiaco)
zodiacoNum = parseFloat(zodiaco)

if (zodiacoNum > 211 && zodiacoNum < 192){
    document.write("Sos de acuario")
}else if (zodiacoNum > 192 && zodiacoNum < 203){
    document.write("Sos de piscis")
}else if (zodiacoNum > 203 && zodiacoNum < 204){
    document.write("Sos de aries")
}else if (zodiacoNum > 204 && zodiacoNum < 215){
    document.write("Sos de tauro")
}else if (zodiacoNum > 215 && zodiacoNum < 216){
    document.write("Sos de geminis")
}else if (zodiacoNum > 216 && zodiacoNum < 227){
    document.write("Sos de cancer")
}else if (zodiacoNum > 227 && zodiacoNum < 238){
    document.write("Sos de leo")
}else if (zodiacoNum > 238 && zodiacoNum < 249){
    document.write("Sos de virgo")
}else if (zodiacoNum > 249 && zodiacoNum < 2310){
    document.write("Sos de libra")
}else if (zodiacoNum > 2310 && zodiacoNum < 2211){
    document.write("Sos de escorpio")
}else if (zodiacoNum > 2211 && zodiacoNum < 2112){
    document.write("Sos de sagitario")
}else if (zodiacoNum > 2112 && zodiacoNum < 3212){
    document.write("Sos de capricornio")
}else if (zodiacoNum > 000 && zodiacoNum < 211){
    document.write("Sos de capricornio")
}
*/

















/*
var numero= prompt("ingrese un numero")
while(numero != 0){
	console.log("Con Ustedes, la tabla del "+ numero+":")
	for(let i=1; i<10; i++){
		console.log(numero * i)
	}
	numero= prompt("ingrese un nuevo numero")
}
*/
/*
var respuesta= prompt("Ingrese un número")

var año= prompt("ingrese su año de nacimimento")
var mes= prompt("ingrese el mes de su nacimiento") - 1
var dia= prompt("ingrese el día de su nacimiento")

var fechaNac= new Date(año,mes,dia)
*/
