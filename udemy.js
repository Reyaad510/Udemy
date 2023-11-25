
// Make first letter of a string capitalized

/*
let name = "reyaAD";

let firstChar = name.slice(0,1).toUpperCase();

let restOfName = name.slice(1, name.length).toLowerCase();

let fullName = firstChar + restOfName;


console.log(firstChar);
console.log(restOfName)
console.log(`I am ${fullName}`);
*/



// BMI


/*
    BMI = weight(kg)/ height^2(m^2)





const bmiCalculator = (weight, height) => {
    let bmi = 0;

    return bmi = Math.floor(weight/Math.pow(height,2));

}


console.log(bmiCalculator(65,1.8));

*/



/* Dice roll!
console.log(Math.floor(Math.random() * 6) + 1);
*/




// Fizz Buzz
// If divis by 3 -> "Fizz"
// If divis by 5 -> "Buzz"
// If divis by 3 and 5 -> "FizzBuzz"
// Nums 1 -100

/*
const FizzBuzz = () => {
    
    let arr = [];
    let num = 0;
    while(num <=100){
    if (num % 3 == 0 && num % 5 == 0) {
         arr.push("FizzBuzz")
    } else if(num % 3 == 0) {
        arr.push("Fizz")
    } else if (num % 5 == 0){
         arr.push("Buzz")
    } else {
        arr.push(num);
    }
    num++;
}
    return arr;
}

console.log(FizzBuzz());

*/








