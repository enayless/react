// const a = [3, 5, 6, 9, 2, 7, 8, 6];

// console.log(a.indexOf(6, 3));

// let result = -1;

// function indexOfEmul(mes, item, from = 0) {

// 	for (let i = from; i < mes.length; i++) {
// 		if (mes[i] === item) {
// 			return i;
// 		}
// 	}
// 	return result;
// }

// console.log(indexOfEmul(a, 6, 3));


const a = [3, 3, 5, 10, 45, 150];

let b = a.map((item, index) =>  {
	// console.log(item);
	return item;
});

let c = a.filter(item => {
	if (item > 7) {
		return true;
	}
});

console.log(c);