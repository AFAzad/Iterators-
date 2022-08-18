let numbers = [100,200,300,400,500];

let iter = numbers[Symbol.iterator]();

// let result = iter.next();

// while(!result.done){
//     // console.log(result.value);
//     // result = iter.next()
// }


console.log(iter.next());
console.log(iter.next().done);
console.log(iter.next().value);
console.log(iter.next().value);


//string 
let str = "Abul fajal Azad";

for (let char of str){
    console.log(char);
}