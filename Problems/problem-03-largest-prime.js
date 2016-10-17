this.description = 'Project Euler - Problem 3'
    +'\n\nThe prime factors of 13195 are 5, 7, 13 and 29.'
    +'\nWhat is the largest prime factor of the number 600851475143?'
    +'\n\nhttps://projecteuler.net/problem=3';

this.getSolution = function() {
    return largestPrimeFactor(600851475143);
}

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

    return largestPrime;
}
