function StopWatch() {
	let duration = 0;
	let isStopped = true;
	let current = new Date().getTime();
	this.start = function() {	
		if (!isStopped) {
			throw new Error("The StopWatch is already running!");
		}
		else {
			current = new Date().getTime();
			isStopped = false;
		}
	}
	this.stop = function(){
		if (isStopped) {
			throw new Error("The StopWatch isn't running!");
		}
		else {
			isStopped = true;
			duration += ((new Date().getTime()) - current)/1000;
		}
	}
	this.reset = function(){
		duration = 0;
	}
	Object.defineProperty(this, 'duration', {
		get: function() {
			return duration;
		}
	});
}
