const arr = ['a','b','c'];

// аналогично
const arrObj = {
	a: 'a',
	1: 'b',
	c: 'c',
	abc: {  // обьект-свойство обьекта
		'name': 'john'
	},
	array:[1,2,3] // массив-свойство обьекта
};

console.log(arrObj['array']);

const g = 1000; // создал переменную которую позже добавляю в свойства


arrObj.b = true; // добавляю свойство в обьект arrObj
arrObj['g'] = 600; // второй способ


arrObj[g] = 600;

console.log(arrObj['g']); // два способа обращение к свойству
console.log(arrObj.b);


