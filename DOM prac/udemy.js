
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


// Document Object Model(DOM)
// Browser load top to bottome so <link rel styles.css> need to be in <head> and <script> need to be before </body> so then it can recognize elements after they been loaded
// DOM catalogs the web page into individual objects that we can select and manipulate 


/*
document.getElementsByTagName("li") grab all tags with li in an array
document.getElementsByTagName("li")[1].style.color = "purple" to change color

document.getElementsByClassName("btn") -> classes you create within html. Gives you back an array

document.getElementById("title").innerHTML; = "Good Bye" gives back a single element not an array. Id should only be to one element




===================================================================
"must be set ina  string"

document.querySelector("title").textContent = "Hello";
document.querySelector("h1") can get by element
document.querySelector("h1").innerHTML = "<em>Good Bye</em>""
document.querySelector("#title"); can get by id with pound sign
document.querySelector("".btn") can get with class with . in front
document.querySelector("li a"); a hierachial selector
document.querySelector("li.item");
document.querySelector("#list a");


document.querySelector("a").attributes;
document.querySelector("a").getAttribute("href");
document.querySelector("a").setAttribute("href", https://www.bing.com);

document.querySelectorAll("#list .item"); -> sends back array of all that match 

querySelector and querySelectorAll allow for more complex queries, because we are able to specify id, class, element, tag names, and combine them in order to target the exact element we want. Where with getElement is more broad and more difficult to target individual objects without going in to change the HTML



document.querySelector("button").classList.add("invisible"); to add class to that specific element(Can be used to add diff css)
document.querySelector("button").classList.remove("invisible");
document.querySelector("button").classList.toggle("invisible"); -> toggle class on/off


*/

/*
const changeBtnColor = () => {

        document.querySelector("button").style.backgroundColor = "yellow";
}
*/


