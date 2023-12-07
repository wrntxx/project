'use strict';


console.log(4 + +'5'); // concatenation

let increment = 10,
	decrement = 10;

//Первый вариант(постфиксная) - сначала возвращает старое значение,а затем его увеличивает

// increment++;  // инкремент
// decrement--;  // декремент

// второй вариант(префиксная форма) 

// ++increment;
// ++ decrement;

console.log(++increment);
console.log(--decrement);

console.log (2 * 4 == 8); // сравнение

console.log (2 + 2 * 2 === 8); // строгое сравнение(только числа)

const isChecked = false,
	isClose = false;

console.log(isChecked && isClose); // логическое И 

console.log(isChecked || isClose); // логическое или

console.log(2+2*2 !== '6'); // строгое сравнение по типу