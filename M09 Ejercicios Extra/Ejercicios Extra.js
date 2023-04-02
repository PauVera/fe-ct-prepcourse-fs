/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
  // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
  // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
  // Estos elementos debe ser cada par clave:valor del objeto recibido.
  // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
  // Tu código:
  let arr = [];
  for (let prop in objeto) {
    arr.push([prop, objeto[prop]]);
  }
  return arr;
}

function numberOfCharacters(string) {
  // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
  // letras del string, y su valor es la cantidad de veces que se repite en el string.
  // Las letras deben estar en orden alfabético.
  // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
  // Tu código:
  //   let stringToArray = string.split("");
  //   let obj = {};
  //   let obj2 = {};
  //   let cont = 0;
  //   stringToArray.forEach((elem) => {
  //     for (let j = 0; j < stringToArray.length; j++) {
  //       if (stringToArray[j] === elem) cont++;
  //     }
  //     obj[elem] = cont;
  //     cont = 0;
  //   });
  //   Object.keys(obj).sort().forEach(elem =>{
  //    obj2[elem] = obj[elem];
  //   });
  //   return obj2;
  const obj = {};
  for (const elem of string) {
    if (obj[elem]) {
      obj[elem]++;
    } else {
      obj[elem] = 1;
    }
  }
  const sortedKeys = Object.keys(obj).sort();
  const sortedObj = {};
  for (const key of sortedKeys) {
    sortedObj[key] = obj[key];
  }
  return sortedObj;
}

function capToFront(string) {
  // Recibes un string con algunas letras en mayúscula y otras en minúscula.
  // Debes enviar todas las letras en mayúscula al comienzo del string.
  // Retornar el string.
  // [EJEMPLO]: soyHENRY ---> HENRYsoy
  // Tu código:
  let stringToArr = string.split("");
  let may = stringToArr.filter((elem) => elem.toUpperCase() === elem);
  let min = stringToArr.filter((elem) => elem.toLowerCase() === elem);
  return may.concat(min).join("");
}

function asAmirror(frase) {
  // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
  // La diferencia es que cada palabra estará escrita al inverso.
  // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
  // Tu código:
  // return frase.split(' ')
  //   .map(word => word.split('').reverse().join(''))
  //   .join(' ');
  let arrFromString = frase.split(" ");
  let auxArr = [];
  arrFromString.forEach((elem) => {
    let reverseArr = [];
    let eachWord = elem.split("");
    eachWord.forEach((e) => {
      reverseArr.unshift(e);
    });
    reverseArr = reverseArr.join("");
    auxArr.push(reverseArr);
  });
  auxArr = auxArr.join(" ");
  return auxArr;
}

function capicua(numero) {
  // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
  // Caso contrario: "No es capicua".
  // Tu código:
  const numToString = numero.toString();
  const numAlReves = numToString.split("").reverse().join("");

  return Number(numAlReves) === numero ? "Es capicua" : "No es capicua";
}

function deleteAbc(string) {
  // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
  // Retorna el string sin estas letras.
  // Tu código:
  // const stringToArr = string.replaceAll(/[abc]/g, '');
  const stringToArr = string
    .split("")
    .filter((letra) => letra !== "a" && letra !== "b" && letra !== "c")
    .join("");

  return stringToArr;
}

function sortArray(arrayOfStrings) {
  // Recibes un arreglo de strings.
  // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
  // de la longitud de cada string.
  // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
  // Tu código:
  const comparar = (a, b) => a.length - b.length;
  return arrayOfStrings.sort(comparar);
}

function buscoInterseccion(array1, array2) {
  // Recibes dos arreglos de números.
  // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
  // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
  // Si no tienen elementos en común, retornar un arreglo vacío.
  // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
  // Tu código:
  // return array1.filter(elem => array2.includes(elem));
  let arrFinal = [];
  array1.forEach(elem => {
    if(array2.find(e => e === elem)) arrFinal.push(elem);
  });   

  return arrFinal;
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
