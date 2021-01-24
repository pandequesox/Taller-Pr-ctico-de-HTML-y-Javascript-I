//Autor: Santiago Osorio Obando

//Las primeras funciones son las funciones de sumar, restar, multiplicar y dividir para la calculadora.
//También cada una tiene integrada la funcionalidad de pintar de rojo el resultado si es menor a cero, y de verde si es mayor o igual a cero

function sumar(){
	var d1 = parseFloat(document.getElementById("digit1").value);
	var d2 = parseFloat(document.getElementById("digit2").value);
	var suma = d1 + d2;
	
	if(suma >= 0){
		document.getElementById("answer").style.color="green";
	}
	else{
		document.getElementById("answer").style.color="red";
	}
	
	document.getElementById("answer").innerHTML = "El resultado es " + suma;
}
function restar(){
	var d1 = parseFloat(document.getElementById("digit1").value);
	var d2 = parseFloat(document.getElementById("digit2").value);
	var resta = d1 - d2;
	
	if(resta >= 0){
		document.getElementById("answer").style.color="green";
	}
	else{
		document.getElementById("answer").style.color="red";
	}
	
	document.getElementById("answer").innerHTML = "El resultado es " + resta;
}
function multiplicar(){
	var d1 = parseFloat(document.getElementById("digit1").value);
	var d2 = parseFloat(document.getElementById("digit2").value);
	var producto = d1 * d2;
	
	if(producto >= 0){
		document.getElementById("answer").style.color="green";
	}
	else{
		document.getElementById("answer").style.color="red";
	}
	
	document.getElementById("answer").innerHTML = "El resultado es " + producto;
}
function dividir(){
	var d1 = parseFloat(document.getElementById("digit1").value);
	var d2 = parseFloat(document.getElementById("digit2").value);
	var cociente = d1 / d2;
	
	if(cociente >= 0){
		document.getElementById("answer").style.color="green";
	}
	else{
		document.getElementById("answer").style.color="red";
	}
	
	document.getElementById("answer").innerHTML = "El resultado es " + cociente;
}

//Funciones para modificar el tamaño de la matriz
function cambiarTamaño(){
	var table = document.getElementById("matrix");
	var nInicial = parseInt(document.getElementById("sizeLabel").innerText);
	var n = parseInt(document.getElementById("size").value);
	
	//Empezamos borrando todas las filas y celdas para dejar la tabla vacía
	for(var i = 0; i < nInicial; i++){
		document.getElementById("matrix").deleteRow(0);
	}
	//Luego procedemos a ir agregando las n filas que agrega el usuario y a cada fila se le agregan n columnas
	for(var i = 0; i < n; i++){
		var row = table.insertRow(i);
		for(var e = 0; e < n; e++){
			var cell = row.insertCell(e);
			if(i == e){
				cell.innerHTML = "1";
			}
			else{
				cell.innerHTML = "0";
			}
		}
	}
	
	//Finalmente guardamos en un label el tamaño modificado de la matriz
	document.getElementById("sizeLabel").innerHTML = n;
}
