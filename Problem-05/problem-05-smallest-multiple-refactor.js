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

// console.log('Problem 5: The solution [' + smallestMultiple(20)  + '] was found in [' + getDuration(endTime, startTime) + '] s ');
console.log(smallestMultiple(5));

function smallestMultiple(max){
    startTime = new Date();
    var factorSet;
    var localIndex;

    primesBelowMax = getPrimesBelow(max);

    for (var i = 0; i < primesBelowMax.length; i++) {
        completeFactors[i] = {
            value: primesBelowMax[i],
            count: 0
        };
    }

    for (max; max > 1; max--) {
        factorSet = getFactorsOf(max);

        for (var i = 0; i < factorSet.length; i++) {
            localIndex = completeFactors.indexOf(factorSet[i].value);

            if (factorSet[i].count > completeFactors[localIndex].count) {
                completeFactors[localIndex].count = factorSet[i].count;
            }
        }
    }

    endTime = new Date();
    return completeFactors;
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
    for(var i = 0; i < factors.length; i++) {
        console.log(factors[i].count + ' : ' + factors[i].value);
    }

    return factors;
}

function getDuration(endTime, startTime) {
    var end = endTime.getSeconds() * 1000 + endTime.getMilliseconds();
    var start = startTime.getSeconds() * 1000 + startTime.getMilliseconds();

    return (end - start)/1000;
}
