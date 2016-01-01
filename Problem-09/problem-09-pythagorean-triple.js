/*
A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

a^2 + b^2 = c^2
For example, 3^2 + 4^2 = 9 + 16 = 25 = 5^2.

There exists exactly one Pythagorean triplet for which a + b + c = 1000.
Find the product abc.

Generate sets of a b and c that add to 1000 that are perfect squares

*/

var startTime = new Date();;
var endTime;

console.log('Problem 8: The solution [' + productOfTriple(1000) + '] was found in [' + getDuration(endTime, startTime) + '] s ');

// console.log(productOfTriple(100));

function productOfTriple(value) {
    var limit = Math.pow(value, 2);
    var arrayOfSquares = generateSquaresBelow(limit);
    var length = arrayOfSquares.length;
    var i = 1;
    var j;
    var squareOfA;
    var squareOfB;
    var squareOfC;
    var a;
    var b;
    var c;
    var index;
    var product;

    for (i; i < length; i++) {
        j = 0;
        for (j; j < i; j++) {
            squareOfA = arrayOfSquares[j];
            squareOfB = arrayOfSquares[i];
            index = arrayOfSquares.indexOf(squareOfA + squareOfB);

            if (index !== -1) {
                squareOfC = arrayOfSquares[index];
                a = Math.sqrt(squareOfA);
                b = Math.sqrt(squareOfB);
                c = Math.sqrt(squareOfC);

                if (a + b + c === value) {
                    product = a * b * c;
                }
            }
        }
    }
    endTime = new Date();

    return product;
}

function generateSquaresBelow(value) {
    var squares = [];
    var i = 1;

    for (i; i <= value; i++) {
        if (isPerfectSquare(i)) {
            squares.push(i);
        }
    }
    return squares;
}

function isPerfectSquare(value) {
    return Math.sqrt(value) % 1 === 0;
}







function getDuration(endTime, startTime) {
    var end = endTime.getSeconds() * 1000 + endTime.getMilliseconds();
    var start = startTime.getSeconds() * 1000 + startTime.getMilliseconds();

    return (end - start)/1000;
}
