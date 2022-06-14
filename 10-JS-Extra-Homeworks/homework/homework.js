// No cambies los nombres de las funciones.

const TemplatePassthroughManager = require("@11ty/eleventy/src/TemplatePassthroughManager");

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
  let matriz=[];
  for(let clave in objeto){
    matriz.push([clave,objeto[clave]]);
  }
  return matriz;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  let contador;
  let obj = {};
  for(let x=0; x<string.length;x++){
    contador = 0;
    for(let y = x; y<string.length; y++){
      if(string[x]==string[y] && !obj.hasOwnProperty(string[x])){
        contador++;
      }
    }
    if(!obj.hasOwnProperty(string[x])){
      obj[string[x]] = contador;
    }
  }
  return obj;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  let newS = '';
  for(let i = 0; i < s.length; i++){
    let letraActual = s.charAt(i);
    if(letraActual === letraActual.toUpperCase()){
       newS += letraActual;
    }    
  }
  for(let i = 0; i < s.length; i++){
    let letraActual = s.charAt(i);
    if(letraActual === letraActual.toLowerCase()){
       newS += letraActual;
    }    
  }
  return newS;
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  let arr = str.split(' ');
  let arr2= [];
  let newStr = '';
  arr.forEach(element => {
    arr2.push(element.split("").reverse().join(""));  
  });
  newStr = arr2.join(' ');
  return newStr;
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  let str = String(numero);
  let cont = 0;
  for(let i= 0; i<Math.floor(str.length/2);i++){
    if(str[i]!==str[str.length-(1+i)]){
      cont++;
      break
    }
  }

  if(cont>0){
    return 'No es capicua';
  }else{
    return 'Es capicua';
  }
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  let cadena2 = '';
  for(let i= 0; i<cadena.length; i++){
    if(cadena[i]!=='a' && cadena[i]!=='b' && cadena[i]!=='c'){
      cadena2 += cadena[i];
    }
  }
  return cadena2;
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  let cond;
  do {
      cond = false;
      for (let i = 0; i < arr.length - 1; i++) {
          if (arr[i].length > arr[i + 1].length) {
              let temp = arr[i];
              arr[i] = arr[i + 1];
              arr[i + 1] = temp;
              cond = true;
          }
      }
  } while (cond);

  return arr;
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  let newArr = [];
  for (let i = 0; i < arreglo1.length; i++) {
    for (let z = 0; z < arreglo2.length; z++) {
      if (arreglo1[i]=== arreglo2[z]){
        newArr.push(arreglo1[i]);
      }
    }
  }
  return newArr;
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

