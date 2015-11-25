/* Project Euler - Problem 1

If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9.
The sum of these multiples is 23.
Find the sum of all the multiples of 3 or 5 below 1000

https://projecteuler.net/problem=1
*/

var startTime = new Date().getMilliseconds();
var endTime;
var multiplesSum = 0;
var i = 1;

console.log('Problem 3: The solution [' + countMultiples(3, 5, 1000) + '] was found in [' + (endTime - startTime) + '] ms');

function countMultiples(multipleOne, multipleTwo, iterationLimit) {
    for (i; i < iterationLimit; i++){
        if (i % multipleOne === 0) {
            multiplesSum += i;
        } else if (i % multipleTwo === 0) {
            multiplesSum += i;
        }
    }
    endTime = new Date().getMilliseconds();
    return multiplesSum;
}
