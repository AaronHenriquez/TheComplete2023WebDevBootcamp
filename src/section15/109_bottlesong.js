var numberOfBottles = 100;
//var oneLessBottle = numberOfBottles - 1;

function bottleSong() {
	while (numberOfBottles >= 1) {
		numberOfBottles--;
		console.log(
			numberOfBottles +
				'bottles of beer on the wall, ' +
				numberOfBottles +
				'bottles of beer on the wall. Take 1 down, pass it arrown,' +
				numberOfBottles +
				' bottles of beer on the wall.'
		);

		//    if (numberOfBottles>=1) {
		//        console.log(numberOfBottles + "bottles of beer on the wall, " + numberOfBottles + "bottles of beer on the wall. Take 1 down, pass it arrown," + oneLessBottle + " bottles of beer on the wall.")
		//    } else {

		//    }
		// console.log(numberOfBottles);
	}
}
