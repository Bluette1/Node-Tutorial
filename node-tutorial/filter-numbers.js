//the numbers
var numbers = [1, 13, 17, 4, 33, 19, 8 , 49, 45, 23,67,22,99,84, 23, 94];

//find the even numbers
var evenNumbers = [];

function checkIfEven(number){


if (number%2===0){
  return true;

}
else{
  return false;
}


}

evenNumbers=numbers.filter(checkIfEven);

//write the even numbers to the console
console.log(evenNumbers);   // you are not allowed to change this line!!!
