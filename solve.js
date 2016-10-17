var argv = require('minimist')(process.argv.slice(2));
var completedProblems = require('./utils/problemList.js');
var display = require('./utils/display.js');
var timer = require('./utils/timer.js');

var problems = argv._;
var fileString;
var problem;
var solution;

problems.forEach(function(problemNumber) {
    if (typeof problemNumber !== 'number') {
        console.log('\"' + problemNumber + '\"' + ' is not a number');
    } else {
        fileString = 'problem-' + problemNumber;

        if (completedProblems.hasOwnProperty(fileString)) {
            problem = require(completedProblems[fileString]);

            timer.startTimer();
            solution = problem.getSolution();
            timer.stopTimer();

            display.description(problem.description);
            display.solution(solution, timer.getDuration());
        } else {
            console.log('The solution to problem ' + problemNumber + ' does not exist here.');
        }

    }
});
