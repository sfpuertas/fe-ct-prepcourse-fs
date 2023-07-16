/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function devolverPrimerElemento(array) {
   // Retornar el primer elemento del arreglo recibido por parámetro.
   // Tu código:
   var elemento = array[0];
   return (elemento);
}

function devolverUltimoElemento(array) {
   // Retornar el último elemento del arreglo recibido por parámetro.
   // Tu código:
   var ultimo = array.length;
   ultimo  = ultimo - 1;
   var elemento = array[ultimo];
   return (elemento);
}

function obtenerLargoDelArray(array) {
   // Retornar la longitud del arreglo recibido por parámetro.
   // Tu código:
   return (array.length);
}

function incrementarPorUno(array) {
   // El arreglo recibido por parámetro contiene números.
   // Retornar un arreglo con los elementos incrementados en +1.
   // Tu código:
   var incrementado;
   incrementado = array.map((num) => {
      return(num + 1);
   })
   return (incrementado);
}

function agregarItemAlFinalDelArray(array, elemento) {
   // Agrega el "elemento" al final del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   var a = array;
   var b = elemento;
   a.push(elemento);
   return (a);
}

function agregarItemAlComienzoDelArray(array, elemento) {
   // Agrega el "elemento" al comienzo del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   var a = array;
   var b = elemento;
   a.unshift(elemento);
   return (a);
}

function dePalabrasAFrase(palabras) {
   // El argumento "palabras" es un arreglo de strings.
   // Retornar un string donde todas las palabras estén concatenadas
   // con un espacio entre cada palabra.
   // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
   // Tu código:
   var string = palabras;
   var arreglada;
   arreglada = string.join(" ");
   return(arreglada)

   
}

function arrayContiene(array, elemento) {
   // Verifica si el elemento existe dentro del arreglo recibido.
   // Retornar true si está, o false si no está.
   // Tu código:
   return (array.includes(elemento));
}

function agregarNumeros(arrayOfNums) {
   // El parámetro "arrayOfNums" debe ser un arreglo de números.
   // Suma todos los elementos y retorna el resultado.
   // Tu código:
   var suma = 0;
   var array = arrayOfNums;
   var longitud = array.length;
   for(var i = 0; i <longitud; i++){
      suma = suma + array[i];
   }
   return (suma);
}

function promedioResultadosTest(resultadosTest) {
   // El parámetro "resultadosTest" es un arreglo de números.
   // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
   // Tu código:
   var array = resultadosTest;
   var notas = 0;
   var cont = 0;
   var result = 0;
   var long = array.length;
   for(var i = 0; i<long; i++){
      notas = notas + array[i];
      cont = cont +1;
   }
   result = notas / cont;
   return(result);
}

function numeroMasGrande(arrayOfNums) {
   // El parámetro "arrayOfNums" es un arreglo de números.
   // Retornar el número más grande.
   // Tu código:
   var array = arrayOfNums;
   var num
   var long= array.length;
   for(var i = 0; i < long; i++){
      if (i === 0){
         num = array[i];
      } else {
         if (array[i] > num){
            num = array[i];
         }
      }
   } return (num);
}

function multiplicarArgumentos() {
   // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
   // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
   // [PISTA]: "arguments" es un arreglo.
   // Tu código:
   var argumento = 1;
   var long = arguments.length;
   if(long === 0){
      return(0)
   } else if(long === 1){
      return(arguments[0]);
   } else {
          for (var i = 0; i< long; i++){

          argumento = argumento * arguments[i]; 
          }
          return(argumento);
         }
      
}

function cuentoElementos(array) {
   // Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
   // Tu código:
   var arr= array;
   var long = arr.length;
   var cont = 0;
   for (var i = 0; i < long; i++){
      if (arr[i] > 18){
         cont = cont + 1;
      }
   }
   return(cont);
}

function diaDeLaSemana(numeroDeDia) {
   // Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
   // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
   // si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
   // Tu código:
   var num = numeroDeDia;
   if(num === 1 || num === 7){
      return("Es fin de semana");
   } else {
      return("Es dia laboral");
   }
}

function empiezaConNueve(num) {
   // Esta función recibe por parámetro un número.
   // Debe retornar true si el entero inicia con 9 y false en otro caso.
   // Tu código:
   var numero = num.toString();
   return(numero[0] == "9");
}

function todosIguales(array) {
   // Si todos los elementos del arreglo son iguales, retornar true.
   // Caso contrario retornar false.
   // Tu código:
   var long = array.length;
   var valor = array[0];
   if (long === 1){
      return(true);
   } else{
   for(var i = 0; i < long; i++){
      if(valor !== array[i]) {
         return(false);
      }
   }
   return(true);
}
}

function mesesDelAño(array) {
   // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
   // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
   // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
   // Tu código:
   var arr = [];
   var long = array.length;   
   if (array.includes("Enero") === false || array.includes("Marzo") === false || array.includes("Noviembre") === false){
      return("No se encontraron los meses pedidos");
   } else{
   for (var i = 0; i < long; i++){
      if(array[i] === "Noviembre" || array[i] === "Enero" || array[i] === "Marzo"){
         arr.push(array[i]);
      }

   }
   return(arr);
}
}

function tablaDelSeis() {
   // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
   // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
   // Tu código:
   var array = [];
   for(var i= 0; i <= 10; i++){
      array.push(6 * i);
   }
   return(array);
}

function mayorACien(array) {
   // La función recibe un arreglo con enteros entre 0 y 200.
   // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
   // Tu código:
   var arr = [];
   var long = array.length;
   for(var i = 0; i < long; i++){
      if (array[i] > 100){
         arr.push(array[i]);
      }
   }
   return(arr);
}

/* ----------------------------------------------------------------------------------
💪 EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT  EXTRA CREDIT 💪
-------------------------------------------------------------------------------------*/

function breakStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un arreglo y retornarlo.
   // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
   // la ejecución y retornar el string: "Se interrumpió la ejecución".
   // [PISTA]: utiliza el statement 'break'.
   // Tu código:
   var array = [];
   var nuev = num;
   var i = 0;
   while (i < 10){
      nuev= nuev + 2;  
      if(nuev === i){
         break;
      } else {
         array.push(nuev);
         i++;
      }
      
   }
   if (i < 10){
      return("Se interrumpió la ejecución");
   } else{
    return(array);
   }
}

function continueStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un array y retornarlo.
   // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
   // se continua con la siguiente iteración.
   // [PISTA]: utiliza el statement 'continue'.
   // Tu código:
   var i = 0;
   array = [];

   while(i < 10){
      i++
      if (i === 5){
         continue;
      }

      array.push(num += 2);

   }  

   return array;

}


/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverPrimerElemento,
   devolverUltimoElemento,
   obtenerLargoDelArray,
   incrementarPorUno,
   agregarItemAlFinalDelArray,
   agregarItemAlComienzoDelArray,
   dePalabrasAFrase,
   arrayContiene,
   agregarNumeros,
   promedioResultadosTest,
   numeroMasGrande,
   multiplicarArgumentos,
   cuentoElementos,
   diaDeLaSemana,
   empiezaConNueve,
   todosIguales,
   mesesDelAño,
   tablaDelSeis,
   mayorACien,
   breakStatement,
   continueStatement,
};
