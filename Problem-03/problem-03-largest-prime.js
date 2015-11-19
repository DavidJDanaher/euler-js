/*
The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ?

https://projecteuler.net/problem=3
*/

var startTime = new Date().getMilliseconds();
var endTime;

console.log('Probelm 3: The solution [' + largestPrimeFactor(600851475143) + '] was found in [' + (endTime - startTime) + '] ms');

function largestPrimeFactor(upperLimit) {
    var iterationLimit = Math.sqrt(upperLimit);
    var primeCandidate = 2;
    var primes = [];
    var largestPrime;

    while (upperLimit > 1) {
        while (upperLimit % primeCandidate === 0) {
            upperLimit /= primeCandidate;
            if (primes.indexOf(primeCandidate) === -1) {
                primes.push(primeCandidate);
            }
        }
        primeCandidate++;
    }
    largestPrime = primes[primes.length - 1];
    endTime = new Date().getMilliseconds();
    return(largestPrime);
}
