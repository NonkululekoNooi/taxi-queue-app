function TaxiQueue() {
	let _counter = 0;
	let taxi = 0;



	function joinQueue() {
		_counter++
	}

	function leaveQueue() {
		if(_counter > 0){
		_counter--
		}
	}

	function joinTaxiQueue() {

		_counter++



	}

	function queueLength() {

		return _counter


	}

	function taxiQueueLength() {
		return _counter

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