this.description = 'Project Euler - Problem 4'
    +'\n\nA palindromic number reads the same both ways.'
    +'\nThe largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.'
    +'\nFind the largest palindrome made from the product of two 3-digit numbers.'
    +'\n\nhttps://projecteuler.net/problem=4';

// TODO: Double for loop is a no-no.  How to improve this...

this.getSolution = function() {
    return generatePalindromes();
}

var numberIsEven;
var i;
var j;
var multipleIsPalindrome = false;
var largestPalindrome = 0;
var factor1;
var factor2;
var product;
var listOfPalindromes = [];

function generatePalindromes() {
    for (factor1 = 999; factor1 > 99; factor1--) {
        for (factor2 = 999; factor2 > 99; factor2--) {
            product = factor1 * factor2;
            if (isPalindrome(product)) {
                largestPalindrome = returnLarger(product, largestPalindrome);
                listOfPalindromes.push(product);
            }
        }
    }

    return largestPalindrome;
}

function isPalindrome(multiple){
    multiple = multiple.toString();
    i = 0;
    j = multiple.length - 1;

    while (i < j) {
        if (multiple.charAt(i) === multiple.charAt(j)) {
            multipleIsPalindrome = true;
            i++;
            j--;
        } else {
            multipleIsPalindrome = false;
            break;
        }
    }

    return multipleIsPalindrome;
}

function returnLarger(newValue, current) {
    return (newValue > current) ? newValue : current;
}
