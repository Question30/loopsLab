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
