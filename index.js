require('colors')

var passing = function () {
	var m = {}
	
	m.passing = function (testNum, is) {
		this.count++;
		if (is === true) {
			this.passed++;
			if (this.report) console.log('Test #' + testNum, 'PASSING'.green);
		}
		else {
			this.failed++;
			if (this.report) console.log('Test #' + testNum, 'FAILING'.red)
		}
	}

	m.start = function (report) {
		this.report = report;
		this.count = 0;
		this.passed = 0;
		this.failed = 0;
	}

	m.finish = function (report) {
		var string = '\n\n[REPORT]\n\tPassing: ' + this.passed + '/' + this.count + '\n\tFailing: ' + this.failed + '/' + this.count + '\n';
		if (report || this.report && report !== false) console.log(string.bgWhite.black)
	}
	return function (a, b) {
		if (a !== undefined && b !== undefined) return m.passing(a, b)
		return m
	};
}


module.exports = passing;