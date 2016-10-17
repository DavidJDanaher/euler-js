this.startTimer = startTimer;
this.stopTimer = stopTimer;
this.getDuration = getDuration;

var startTime;
var stopTime;

function startTimer() {
    startTime = new Date();
}

function stopTimer() {
    stopTime = new Date();
}

function getDuration() {
    if (startTime !== 'undefined' && stopTime !== 'undefined') {
        return formatDuration(stopTime - startTime);
    } else {
        console.log('Missing a start or stop call.');
    }
}

function formatDuration(duration) {
    if (duration < 999) {
        return duration + ' ms';
    } else {
        return duration + ' s';
    }
}
