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

console.log('Problem 5: The solution [' + smallestMultiple(20)  + '] was found in [' + getDuration(endTime, startTime) + '] s ');
console.log(getFactorsOf(18));
function smallestMultiple(max){
    startTime = new Date();
    var factorSet;
    var localIndex;
    var length;
    var smallestMultiple = 1;

    primesBelowMax = getPrimesBelow(max);

    for (var i = 0; i < primesBelowMax.length; i++) {
        completeFactors[i] = {
            value: primesBelowMax[i],
            count: 0
        };
    }

    for (max; max > 1; max--) {
        factorSet = getFactorsOf(max);
        length = factorSet.length;

        for (var i = 0; i < length; i++) {
            for (var j = 0; j < completeFactors.length; j++) {
                if (completeFactors[j].value === factorSet[i].value){
                    console.log(completeFactors[j].value + ':' + completeFactors[j].count);
                    console.log(factorSet[i].value + ':' + factorSet[i].count);

                    if (completeFactors[j].count < factorSet[i].count) {
                        completeFactors[j].count = factorSet[i].count;
                    }
                }
            }
        }
    }

    for (var i = 0; i < completeFactors.length; i++) {
        smallestMultiple *= (completeFactors[i].value * completeFactors[i].count);

    }
    endTime = new Date();
    return smallestMultiple;
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

function getFactorsOf(val) {
    var factors = [];

    while (val > 1) {
        for (var i = 0; i < primesBelowMax.length; i++) {
            while (val % primesBelowMax[i] === 0){
                if (factors.length === 0) {
                    factors.push({
                        value: primesBelowMax[i],
                        count: 1
                    });
                } else {
                    for (var j = 0; j < factors.length; j++) {
                        if (factors[j].value === primesBelowMax[i]) {
                            factors[j].count += 1;
                        } else {
                            factors.push({
                                value: primesBelowMax[i],
                                count: 1
                            });
                        }
                    }
                }

                val /= primesBelowMax[i];
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
