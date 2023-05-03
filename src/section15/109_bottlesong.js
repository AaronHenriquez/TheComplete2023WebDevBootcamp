var numberOfBottles = 100;

function bottleSong() {
	while (numberOfBottles >= 1) {
		numberOfBottles--;
		var oneLessBottle = numberOfBottles - 1;

		if (oneLessBottle >= 0) {
			console.log(
				numberOfBottles +
					' bottles of beer on the wall, ' +
					numberOfBottles +
					' bottles of beer on the wall. Take 1 down, pass it arrown, ' +
					oneLessBottle +
					' bottles of beer on the wall.'
			);
		} else {
			console.log(
				'No more bottles of beer on the wall, no more bottles of beer. Go to the Store and by some more, 99 bottles of beer on the wall.'
			);
		}
	}
}
