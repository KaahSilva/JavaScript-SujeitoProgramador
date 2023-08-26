var times =['spfc', 'fla', 'coxa', 'peixe'];
times.pop() ;// vai remover o ultimo item do array
console.log(times);

console.log(times.indexOf('spfc')); // ver a posição do indice no array

//---------------

let frutas = ['pera', 'uva', 'abacate'];
console.log(frutas);
console.log(frutas.length);// ver o tamnho do array

frutas.push('abacaxi')// adiciona elementos no final do array
console.log(frutas);

//----------
let jogadores = ['cr7', 'messi', 'neymar', 'suarez'];
jogadores.shift();// remove primeiro elemento da lista
let resultado = jogadores.join('--');
console.log(resultado);

//-------------

let compras = ['arroz' , ' feijão' ,  'leite', 'manteiga'];

console.log(compras.slice(1,3))// ele determina pelo indice onde posso começar e terminar o array 

//----------

let numeros = [20,56489,-1];
numeros.unshift(100)// adiciona novo elemento no inicio do array
console.log(numeros)

//-------CONCATENANDO------

let parte01 = [1,2,3]
let parte02= [4,5,6]
let concatenacao = parte01.concat(parte02) //faz a uniao de arrays
console.log(concatenacao)

//====

let lista = ["maria", 10, 12, 100, 200, 230, "carla"];
let resul = lista.slice(2, -2);
console.log(resul);

