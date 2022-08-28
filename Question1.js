/*1. Using for loops, write a Javascript program to output the following
pattern -
1
2 3
4 5 6
7 8 9 10*/

function printPattern() {
    let number = 1;
    for (var i=0;number<=10;i++) {
        var generatedNumber = ''
        for (var j=0; j<=i; j++) {
            generatedNumber += number + '  ';
            number++;
        }
        console.log(generatedNumber);
        //console.log("\n");
    }
}

function main() {
    printPattern()
}

main()
