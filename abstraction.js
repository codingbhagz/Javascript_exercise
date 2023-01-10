function StopWatch() {
    let startTime, stopTime, duration = 0;
    let isStarted = false;
    Object.defineProperty(this, 'duration', {
        get: function() { return duration; },
        set: function(value) { duration = value; },
    });
}
StopWatch.prototype.start = function() {
    if(this.isStarted)
        throw new Error('Stopwatch started');
    this.isStarted = true;
    this.startTime = new Date().getTime();
};
StopWatch.prototype.stop = function() {
    if(!this.isStarted)
        throw new Error('Stopwatch stopped');
    this.isStarted = false;
    this.stopTime = new Date().getTime();
    this.duration += (this.stopTime - this.startTime) / 1000;
};
StopWatch.prototype.reset = function() {
    this.duration = 0;
    this.isStarted = false;
};
const sw = new StopWatch();
