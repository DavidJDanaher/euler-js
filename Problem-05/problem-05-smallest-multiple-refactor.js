/*
* 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
*
* What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
*
*/

var startTime;
var endTime;
var primesBelowMax;
var completeFactors = [];
var primesLength;

console.log('Problem 5: The solution [' + smallestMultiple(20) + '] was found in [' + getDuration(endTime, startTime) + '] s ');

function smallestMultiple(max){
    startTime = new Date();
    var factorSet;
    var factorObjects;
    var localIndex;
    var localLength;
    var smallestMultiple = 1;

    primesBelowMax = generatePrimesBelow(max);
    primesLength = primesBelowMax.length;

    generatePrimeObjects();

    for (max; max > 1; max--) {
        factorSet = getFactorsOf(max);
        factorObjects = convertToObject(factorSet);
        localLength = factorObjects.length;

        for (var i = 0; i < localLength; i++) {
            for (var j = 0; j < primesLength; j++) {
                if (completeFactors[j].value === factorObjects[i].value){

                    if (completeFactors[j].count < factorObjects[i].count) {
                        completeFactors[j].count = factorObjects[i].count;
                    }
                }
            }
        }
    }

    for (var i = 0; i < primesLength; i++) {
        smallestMultiple *= (Math.pow(completeFactors[i].value, completeFactors[i].count));
    }
    endTime = new Date();
    return smallestMultiple;
}


function generatePrimesBelow(max) {
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

function generatePrimeObjects() {
    for (var i = 0; i < primesLength; i++) {
        completeFactors[i] = {
            value: primesBelowMax[i],
            count: 0
        };
    }
}

function getFactorsOf(val) {
    var factors = [];

    while (val > 1) {
        for (var i = 0; i < primesLength; i++) {
            while (val % primesBelowMax[i] === 0){
                factors.push(primesBelowMax[i]);
                val /= primesBelowMax[i];
            }
        }
    }

    return factors;
}

function convertToObject(factorSet) {
    var length = factorSet.length;
    var factorObjects = [];

    for (var i = 0; i < primesBelowMax.length; i++) {
        factorObjects.push({
            value: primesBelowMax[i],
            count: 0
        });
    }

    for (var j = 0; j < factorObjects.length; j++) {
        for (var i = 0; i < length; i++) {

            if (factorObjects[j].value === factorSet[i]) {
                factorObjects[j].count += 1;
            }
        }
    }
    return factorObjects;
}

function getDuration(endTime, startTime) {
    var end = endTime.getSeconds() * 1000 + endTime.getMilliseconds();
    var start = startTime.getSeconds() * 1000 + startTime.getMilliseconds();

    return (end - start)/1000;
}
