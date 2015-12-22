/*
The sum of the squares of the first ten natural numbers is, 12 + 22 + ... + 102 = 385
The square of the sum of the first ten natural numbers is, (1 + 2 + ... + 10)2 = 552 = 3025
Hence the difference between the sum of the squares of the first ten natural numbers and
the square of the sum is 3025 − 385 = 2640.

Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.
*/

var startTime;
var endTime;

console.log('Problem 6: The solution [' +  sumOfSquaresDifference(100)  + '] was found in [' + getDuration(endTime, startTime) + '] s ');

function sumOfSquaresDifference(limit) {
    startTime = new Date();
    var difference;

    difference = squareOfSums(limit) - sumOfSquares(limit);

    endTime = new Date();
    return difference;
}

function sumOfSquares(limit) {
    var i = 1;
    var summedSquares = 0;

    for (i; i <= limit; i++) {
        summedSquares += Math.pow(i,2);
    }

    return summedSquares;
}

function squareOfSums(limit) {
    var i = 1;
    var sum = 0;

    for (i; i <= limit; i++) {
        sum += i;
    }

    return Math.pow(sum, 2);
}


function getDuration(endTime, startTime) {
    var end = endTime.getSeconds() * 1000 + endTime.getMilliseconds();
    var start = startTime.getSeconds() * 1000 + startTime.getMilliseconds();

    return (end - start)/1000;
}
