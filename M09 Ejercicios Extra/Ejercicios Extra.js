/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   var arrP = [];
   var subArr = function(pr,val){
         var arreglo = [];
         arreglo.push(pr);
         arreglo.push(val);
         return(arreglo);
   }
   for(var prop in objeto){
      arrP.push(subArr(prop, objeto[prop]));
   }
   return(arrP)
}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   var arr = [];
   var long = 0;
   var cont= 0;
   var obj = {};
   var letra = "";
   var cantidad = 0;
   var insert = function(arreglo, letra){
      var arrL= [];
      var encontro = false;
      for(var i = 0; i< arreglo.length; i++){
         if(letra === arreglo[i][0]){
            arreglo[i][1] =arreglo[i][1] + 1;
            encontro = true;
            break;
         }
      }
      if(encontro === true){
         return(arreglo);
      } else{
         arrL.push(letra);
         arrL.push(1);
         arreglo.push(arrL);

         return(arreglo);
      }
   }
   while(long < string.length){
      arr= insert(arr,string.charAt(long));
      long = long +1;                                                         
   }
   arr.sort((a,b) => {
      if (a < b){
         return(-1);
      } else {
         return(1);
      }
   });
   for(var ii = 0; ii< arr.length; ii++){
      letra = arr[ii][0];
      cantidad = arr[ii][1]
      obj[letra] = cantidad;
   }
   return(obj);

}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   var arrM = [];
   var arrm = [];
   var caracter = "";
   for(var i = 0; i < string.length;i++){
      caracter = string.charAt(i);
      if(string.charAt(i) === caracter.toUpperCase()) {
         arrM.push(caracter);
      } else {
         arrm.push(caracter);
      }
   }
   caracter = arrM.join("") + arrm.join("");
   return(caracter);
}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   var caracter = "";
   var arrFin = [];
   var str = "";
   for(var i= 0; i< frase.length; i++){
      caracter = frase.charAt(i);
      if(caracter === " "){
         for(var ii = 0; ii< str.length; ii++){
           arrFin.push(str.charAt(ii));
         }
         arrFin.push(" "); 
         str = "";  
      } else {
         str = caracter + str;
      }
   }
   for(var iii = 0; iii< str.length; iii++){
      arrFin.push(str.charAt(iii));
    }
   caracter = arrFin.join("");
   return (caracter);
}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   var str = numero + "";
   var capicua = true;
   var cont = 0;
   var mitad = 0;
   if (str.length%2 === 0){
      mitad = str.length / 2;
   } else {
      mitad = (str.length / 2) + 1
   }
   while(capicua === true && cont < (mitad)){
      if(str.charAt(cont) === str.charAt(str.length-cont -1)){
         cont++;
      }else{
         capicua = false;
         break;
      }
   }
   if(capicua === true){
      return("Es capicua");
   } else { 
      return("No es capicua");
   }
}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   var arr = [];
   var nuevArr = [];
   var nuevStr = "";
   arr = string.split("");
   for(var i = 0; i< arr.length; i++){
      if (arr[i] != "a" && arr[i] != "b" && arr[i] != "c"){
         nuevArr.push(arr[i]);
      }
   }
   nuevStr = nuevArr.join("");
   return(nuevStr);
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
   
   arrayOfStrings.sort((a,b) => {
      return (a.length - b.length);
   });
   return(arrayOfStrings);
}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   var arr = [];
   var esta = false;
   var num = 0;
   for (var i = 0; i < array1.length; i++) {
      esta = false;
      for (var j = 0; j < array2.length; j++) {
        if (array1[i] === array2[j]) {
            num = array1[i];
            for(var k = 0; k < arr.length; k++){
               if(num === arr[k]){
                  esta = true;
                  break;
               }
            } 
            if(esta === false){
               arr.push(num);
               break;
            }
        }
        
      }
   }
   return(arr);
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
