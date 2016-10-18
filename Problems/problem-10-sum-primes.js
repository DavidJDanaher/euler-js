this.description = 'Project Euler - Problem 10'
    +'\n\nThe sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.'
    +'\nFind the sum of all the primes below two million.';

this.getSolution = function() {
    return sumOfPrimesBelow(2000000);
}

function sumOfPrimesBelow(limit) {
    var primes = [2];
    var candidate = 2;
    var sum = 2;
    var isPrime;
    var i;
    var primesInList;

    while (candidate < limit) {
        isPrime = true;
        primesInList = primes.length;

        for (i = 0; i < primesInList; i++) {
            if (candidate % primes[i] === 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime) {
            primes.push(candidate);
            sum += candidate;
        }

        candidate++;
    }

    return sum;
}
