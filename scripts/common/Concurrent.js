define(function() {
	function Countdown(num, completionCallback, stepCallback) {
		this.num = num;
		this.stepCallback = stepCallback;
		this.completionCallback = completionCallback;
		this.decrement = this.decrement.bind(this);
	}

	Countdown.prototype = {
		decrement: function() {
			--this.num;
			if (this.num < 0) {
				console.log("Countdown less than zero");
				return;
			}

			this.stepCallback.apply(null, arguments);
			if (this.num == 0) {
				this.completionCallback.apply(null, arguments);
			}
		}
	};

	return {
		Countdown: Countdown
	};
});