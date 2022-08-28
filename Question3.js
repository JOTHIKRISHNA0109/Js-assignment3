/*3. Write a program to find whether a given number is special number or
not-
If the sum of the factorial of digits of a number (N) is equal to the
number itself, the number (N) is called a special number.
eg- 145 is a special number
Logic- 1! + 4! + 5!= 1+24+120 i.e 14*/


function factorial(number) {
  let factorial = 1;
  for (let i=1;i<=number;i++) {
      factorial*=i;
  }
  return factorial;
}

function isSpecial(number) {
    let sum = 0;
    let temp = number;
    while(number>0) {
        let remainder = Math.floor(number%10);
        sum += factorial(remainder);
        number = Math.floor(number/10);
    }
    if (temp == sum) {
        return true;
    }
    return false;
}

function main() {
    let number = 145; //input value
    if (isSpecial(number)){
        console.log("Yeahhh!!");
    }
    else {
        console.log("Nahh!!");
    }
}

main()
