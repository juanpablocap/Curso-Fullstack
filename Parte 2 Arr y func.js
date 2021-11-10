/* Ejercicios javascript - Parte 2
Prácticas con arreglos y funciones
 
Arrays
1- Crear un array llamado meses y que almacene el nombre de los doce meses del año. 
Mostrar por pantalla en forma de lista  los doce nombres del arreglo.
*/

var meses = ["enero", 
        "febrero", 
        "marzo", 
        "abril", 
        "Mayo", 
        "junio", 
        "Julio", 
        "Agosto", 
        "Setiembre", 
        "Octubre", 
        "Noviembre", 
        "Diciembre"];
for (i=0; i< 12; i++) {
    console.log(`+ ${meses[i]}`)
}

/*
2-  Crear un script que solicite al usuario mediante un prompt el nombre de ciudades y almacenarlas 
en un arreglo,  cuando el usuario seleccione cancelar o 
ingrese el valor “0” se debe mostrar el arreglo generado, luego realizar las siguientes acciones:

        Mostrar la longitud del arreglo.
        Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
        Añade en última posición la ciudad de París.
        Escribe por pantalla el elemento que ocupa la segunda posición.
        Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'. */

var ciudades = [];
var ciudad = prompt("Ingrese una ciudad");
var i;
if (ciudad != 0){
    ciudades[i] = ciudades[i] + ciudad;
}
do {
    ciudad = prompt("Ingrese una ciudad");
    ciudades[i] = ciudades[i] + ciudad;
    i++;
} while(ciudad == 0){

}

document.write(ciudades[0], ciudades[3], ciudades[i]);
ciudades.push("Paris");
console.log("Se agrego Paris a la ultima posicion..!");
document.write(ciudades);




/*
3- Escribir un script que simule el lanzamiento de dos dados. Hacer uso de la función Math.random para obtener números aleatorios entre 1 y 6 para cada uno de los lanzamientos de los dados. Sumar el resultado de lanzar dos dados y anotar en un array el número de apariciones de dicha suma, repitiendo 50 veces esta operación.

Funciones

1- Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve como resultado una cadena de texto que indica si el número es par o impar. Mostrar por pantalla el resultado devuelto por la función.

2- Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento. A partir de la cadena que se le pasa, la función determina si esa cadena está formada sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas.

3- Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo, luego crear una función para calcular su perímetro y mostrarlo por pantalla.

La fórmula del perímetro  es p = 2*(a +b)

4- Escriba un script que muestre la tabla de multiplicar de un número ingresado por pantalla, la creación de la tabla debe ser realizada con una función y mostrar solo los resultados del 1 al 10 del número elegido por el usuario.
*/