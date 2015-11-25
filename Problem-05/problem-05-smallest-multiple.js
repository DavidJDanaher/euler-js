/*
* 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
*
* What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
*
*/

var startTime = new Date().getSeconds();
var endTime;

console.log('Problem 5: The solution [' + smallestMultiple(20)  + '] was found in [' + (endTime - startTime) + '] s ');

function smallestMultiple(max){
    var multiple = max;
    var rawMultiple = 1;
    var isDivisible;
    var multipleFound = false;

    while (multipleFound === false) {
        multiple++;
        multipleFound = checkDivisible(multiple);
    }

    function checkDivisible(candidate) {
        var j = 1;

        isDivisible = true;

        for (j; j <= max; j++) {

            if (candidate % j !== 0) {
                isDivisible = false;
                break;
            }
        }
        return isDivisible;
    }
    endTime = new Date().getSeconds();
    return multiple;
}
