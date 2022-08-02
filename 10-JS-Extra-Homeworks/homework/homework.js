// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
var obj_length = 0; for (c in objeto) {obj_length++}
var properties = [];
var values = [];
var arrayofarrays = [];

for (p in objeto) {properties.push(p)}
for (v in objeto) {values.push(objeto[v])}

for (let i = 0; i < obj_length; i++) {
arrayofarrays.push([properties[i], values[i]])}

return arrayofarrays;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí

  var suma = {}

  for(var i in string){
    suma[string[i]] = ( suma[string[i]] || 0 ) + 1}

  return suma;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  var mayus = ''
  var minus = ''

  for (var w of s) {
    if (w === w.toUpperCase()) {
      mayus = mayus + w;
    } else {
      minus = minus + w;
    }
    }
    return mayus+minus;
  } 




function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí

  inverted = [];
  var splited = (str.split(' '))
  
  for (var i = 0; i < splited.length; i++) {
    var cadapalabra = splited[i].split("").reverse().join("")
    inverted.push(cadapalabra);
  }
  return inverted.join(" ");
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí

  var numero_inverted = numero.toString().split("").reverse().join("")

    if (numero == parseInt(numero_inverted)) {
      return "Es capicua"
    } else {
      return "No es capicua"
    }
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  // var withoutabc = cadena.replaceAll('a', '').replaceAll('b', '').replaceAll('c', '')
  var withoutabc = cadena.replaceAll(/[abc]/g, '')
  return withoutabc;

}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí

  let sorted = arr.sort((p1, p2) => p1.length - p2.length);
  return sorted;
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí 

  var arraydeiguales = []

  for(var i in arreglo1){
      if (arreglo2.includes(arreglo1[i])) {
          arraydeiguales.push(arreglo1[i])
      }
  }
  return arraydeiguales;
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

