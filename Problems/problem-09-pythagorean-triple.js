this.description = 'Project Euler - Problem 9'
    +'\n\nA Pythagorean triplet is a set of three natural numbers, a < b < c, for which,'
    +'\na^2 + b^2 = c^2'
    +'\nFor example, 3^2 + 4^2 = 9 + 16 = 25 = 5^2.'
    +'\nThere exists exactly one Pythagorean triplet for which a + b + c = 1000.'
    +'\nFind the product a*b*c.';

this.getSolution = function() {
    return productOfTriple(1000);
}

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
