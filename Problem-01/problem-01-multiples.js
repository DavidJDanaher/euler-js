/* Project Euler - Problem 1

If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9.
The sum of these multiples is 23.
Find the sum of all the multiples of 3 or 5 below 1000

https://projecteuler.net/problem=1

Solution: 233168

*/
    var multiplesSum = 0;
    var i = 1;

    countMultiples(3, 5, 1000);

    function countMultiples(multipleOne, multipleTwo, iterationLimit) {
        for (i; i < iterationLimit; i++){
            if (i % multipleOne === 0) {
                multiplesSum += i;
            } else if (i % multipleTwo === 0) {
                multiplesSum += i;
            }
        }
        console.log(multiplesSum);
    }
