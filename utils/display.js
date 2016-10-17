var dashes = '-';

while (dashes.length < 50) {
    dashes += dashes;
}

this.description = function description(desc) {
    console.log('\n' + dashes);
    console.log(desc);
}

this.solution = function solution(result, duration) {
    if (duration) {
        console.log('\nSolution: < ' + result +' >' + '\t Calulated in: ' + duration);
    } else {
        console.log('\nSolution: < ' + result +' >');
    }

    console.log(dashes + '\n');
}
