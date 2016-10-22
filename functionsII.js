/*
Write examples with Arrays to solve the next problems using only Array 
methods (like iterators, etc...):

a) find largest number

b) find longest string

c) find even numbers

d) find odd numbers

e) find words that contain 'is'

f) assert all numbers are divisible by three

g)  zip two arrays together

h) sort joined array from smallest to largest

i) remove the first word in the array .shift()

j) place a new word at the start of the array .unshift()

k) replace some elements .splice(2(position), 0(number things delete), "Lemon", "Kiwi");

l) Over an array with names, find all entries whose firstname starts with 
'J',  create projection combined of only the initials of the name and 
then sort alphabetically.
*/

function init(){
	var numbers = [1,59,100,45,87,25,3,2,4,6];
	var strings = ["Jose","Pedro", "Cristian", "Manuel", "Cristinita"];
	largest(numbers);
	longest(strings);
	even(numbers);
	odd(numbers);
	findIs(strings);
	assert3(numbers);
	zip(numbers,strings);
	sorted(zip(numbers,strings));
	shift1(numbers);
	unshift1(strings);
	replace(strings);
}

function largest(x){
	return Math.max.apply(Math, x);//Necesitas pasarle Math como parametro para que use Math
}

function longest(x){
	var cont = 0;
	var pos = 0;
	for (i=0;i<x.length;i++){
		if (cont<x[i].length){
			cont = x[i].length;
			pos=i;
		}
	}
	return x[pos];
}

function even(x){
	x.filter(function(num){ if( num % 2 == 0 ) return num;})
}

function odd(x){
	x.filter(function(num){ if( num % 2 ) return num;})//La condicion devuelve 1 true;
}

function findIs(x){
	var list = [];
	
	x.find(function(string){
		if (string.indexOf("is") >= 0) {//Devuelve -1 si el item no s eencuentra
			list.push(string);
		}
	});

	return list;
}

function assert3(x) {
	return x.every(function(num) {//Every devuelve false si 1 elemento no cumple la funcion o true si todos lo hacen.
		return num % 3 == 0;
	});
}

function zip(x,y){
	return x.concat(y);
}

function sorted(x){
	x.sort(function(a, b) {
		return a.length - b.length || a > b; // Si es string compara length si no pasa a la segunda condicion
});
}

function shift1(x){
	x.shift();
	return x;
}

function unshift1(x){
	x.unshift("Marcos");
	return x;
}

function replace(x){
	x.splice(2, 1, "Julia"); //posicion 2 remplaza un elemento por julia
}

function alphabetic(x){
	
}

window.onload = function(){
	init();
}