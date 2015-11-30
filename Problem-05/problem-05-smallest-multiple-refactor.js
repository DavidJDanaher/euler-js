/*
* 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
*
* What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
*
*/

var startTime;
var endTime;
var primesBelowMax;


// console.log('Problem 5: The solution [' + smallestMultiple(20)  + '] was found in [' + getDuration(endTime, startTime) + '] s ');
console.log(smallestMultiple(20));

function smallestMultiple(max){
    startTime = new Date();
    var currentFactorSet;
    var completeFactors = [];

    primesBelowMax = getPrimesBelow(max);

    for (max; max > 1; max--) {
        currentFactorSet = getFactors(max);

        for (var i = 0; i < currentFactorSet.length; i++) {
            if (completeFactors.indexOf(currentFactorSet[i]) === -1) {
                 completeFactors = placeValueInArray(currentFactorSet[i], completeFactors);
                // completeFactors.push(currentFactorSet[i]);
            }
        }

    }

    endTime = new Date();
    return completeFactors;
}

function placeValueInArray(val, arr) {
    if (arr.length === 0) {
        arr.push(val);
    }
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < val && val < arr[i + 1]) {
            arr.splice(arr[i], 0, val);
            break;
        } else if (i === arr.length) {
            arr.push(val);
        }
    }
    return arr;
}

function getPrimesBelow(max) {
    var primes = [2];
    var value = 3;
    var isPrime = false;

    for (value; value <= max; value++) {
        for (var k = 0; k < primes.length; k++) {
            if (value % primes[k] === 0) {
                isPrime = false;
                break;
            } else {
                isPrime = true;
            }
        }
        if (isPrime) {
            primes.push(value);
        }
    }
    return primes;
}

function getFactors(val) {
    var factors = [];

    while (val > 1) {
        for (var i = 0; i < primesBelowMax.length; i++) {
            while (val % primesBelowMax[i] === 0){
                val /= primesBelowMax[i];
                factors.push(primesBelowMax[i]);
            }
        }
    }
    return factors;
}

function getDuration(endTime, startTime) {
    var end = endTime.getSeconds() * 1000 + endTime.getMilliseconds();
    var start = startTime.getSeconds() * 1000 + startTime.getMilliseconds();

    return (end - start)/1000;
}
