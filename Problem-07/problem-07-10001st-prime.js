/*
By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

What is the 10 001st prime number?
*/

var startTime;
var endTime;

console.log('Problem 7: The solution [' +  getNthPrime(10001)  + '] was found in [' + getDuration(endTime, startTime) + '] s ');

function getNthPrime(limit) {
    startTime = new Date();
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

    endTime = new Date();
    return lastPrime;
}





function getDuration(endTime, startTime) {
    var end = endTime.getSeconds() * 1000 + endTime.getMilliseconds();
    var start = startTime.getSeconds() * 1000 + startTime.getMilliseconds();

    return (end - start)/1000;
}
