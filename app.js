//Part one

//Fizz Buzz

function FizzBuzz(num) {
  //Loop from 1 - 100
  for (let i = 1; i <= num; i++) {
    //if the number is divisible by 3 and 5 "Fizz Buzz"
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    }
    //if the number is only divisible by 3 "Fizz"
    else if (i % 3 === 0) {
      console.log("Fizz");
    }
    //if the number is only divisible by 5 "Buzz"
    else if (i % 5 === 0) {
      console.log("Buzz");
    }
    //if the number is not divisible by either log the number
    else {
      console.log(i);
    }
  }
}

// FizzBuzz(100);

//Part Two
//Prime Time

function checkPrime(num) {
  let flag = true;

  for (i = 2; i < num; i++) {
    if (num % i == 0) {
      flag = false;
      break;
    }
  }

  return flag;
}

let n = 9;

while (true) {
  let nextNum = n + 1;
  if (checkPrime(nextNum)) {
    console.log(nextNum);
    break;
  }

  n++;
}

//Part Three

const string =
  "Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232";

//Loop Through the String
let row = "";
let rowCount = 1;
for (let i = 0; i < string.length; i++) {
  if (string[i] === "\n") {
    console.log(row);
    rowCount++;
    row = "";
  } else {
    row = row + string[i];
  }
}
