
// Make first letter of a string capitalized

let name = "reyaAD";

let firstChar = name.slice(0,1).toUpperCase();

let restOfName = name.slice(1, name.length).toLowerCase();

let fullName = firstChar + restOfName;



console.log(firstChar);
console.log(restOfName)
console.log(`I am ${fullName}`);
