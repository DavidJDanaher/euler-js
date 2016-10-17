this.description = 'Project Euler - Problem 6'
    +'\n\nThe sum of the squares of the first ten natural numbers is,'
    +'\n 12 + 22 + ... + 102 = 385.  The square of the sum of the first '
    +'\nten natural numbers is, (1 + 2 + ... + 10)2 = 552 = 3025. Hence the '
    +'\ndifference between the sum of the squares of the first ten natural'
    +'\nnumbers and the square of the sum is 3025 − 385 = 2640.'
    +'\nFind the difference between the sum of the squares of the first'
    +'\none hundred natural numbers and the square of the sum.';

this.getSolution = function() {
    return sumOfSquaresDifference(100);
}

function sumOfSquaresDifference(limit) {
    var difference;

    difference = squareOfSums(limit) - sumOfSquares(limit);
    
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
