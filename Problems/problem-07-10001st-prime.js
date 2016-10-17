this.description = 'Project Euler - Problem 7'
    +'\nBy listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we'
    +'\ncan see that the 6th prime is 13.  What is the 10 001st prime number?';

this.getSolution = function() {
    return getNthPrime(10001);
}

function getNthPrime(limit) {
    var primes = [2];
    var candidate = 3;
    var isPrime = false;
    var arrayLength;
    var lastPrime;

    while (primes.length < limit) {
        arrayLength = primes.length;
        isPrime = true;

        for (var i = 0; i < arrayLength; i++) {
            if (candidate % primes[i] === 0 ) {
                isPrime = false;
                break;
            }
        }

        if (isPrime === true) {
            primes.push(candidate);
            lastPrime = candidate;
        }

        candidate++;
    }

    return lastPrime;
}
