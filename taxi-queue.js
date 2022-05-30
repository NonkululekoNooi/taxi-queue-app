function TaxiQueue() {
	let _counter = 0;
	let taxi =0;



	function joinQueue() {
		if (_counter <= 12) {
			return _counter++
		}
	}

	function leaveQueue() {
		if (_counter > 0) {
			return _counter--;
		}
	}

	function joinTaxiQueue() {
		
		if(_counter <= 1){
			return _counter++
		}
		

	}

	function queueLength() {

		if (_counter < 12) {
			return _counter++
		}
		joinQueue()
		leaveQueue()
	}

	function taxiQueueLength() {
		if(_counter < 1){
			_counter++
	   }
		joinTaxiQueue()

	}

	function taxiDepart() {
		

	}

	return {
		joinQueue,
		leaveQueue,
		joinTaxiQueue,
		queueLength,
		taxiQueueLength,
		taxiDepart,

	}
}