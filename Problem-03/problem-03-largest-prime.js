/*
The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ?

https://projecteuler.net/problem=3
*/

console.log(largestPrimeFactor(100));

function largestPrimeFactor(upperLimit) {
    var iterationLimit = Math.sqrt(upperLimit);
    var primeCandidate = 2;
    var primes = [];
    var isPrime = false;

    for (primeCandidate; primeCandidate < iterationLimit; primeCandidate += 2) {
        if(upperLimit % primeCandidate === 0) {
            prims.push(primeCandidate)
        }
    }
    return(primes);
}
