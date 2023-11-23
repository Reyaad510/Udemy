
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

*/



const bmiCalculator = (weight, height) => {
    let bmi = 0;

    return bmi = Math.floor(weight/Math.pow(height,2));

}


console.log(bmiCalculator(65,1.8));





