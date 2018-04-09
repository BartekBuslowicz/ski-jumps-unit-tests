const calculateDistancePoints = (distance, hillSize, kPoint) => {
	if(hillSize=='mamucia') {
		const basePoint = 120;
		if(distance>kPoint) {
			const distancePoints = (distance - kPoint) * 1.2 + basePoint;
			return distancePoints; 
		} else if(distance<kPoint) {
			const distancePoints = (kPoint - distance) * -1.2 + basePoint;
			return distancePoints;
		} else {
			return basePoint;
		}
	} else if(hillSize=='duza') {
		const basePoint = 60;
		if(distance>kPoint) {
			const distancePoints = (distance - kPoint) * 1.8 + basePoint;
			return distancePoints; 
		} else if(distance<kPoint) {
			const distancePoints = (kPoint - distance) * -1.8 + basePoint;
			return distancePoints;
		} else {
			return basePoint;
		}

	} else {
		const basePoint = 60;
		if(distance>kPoint) {
			const distancePoints = (distance - kPoint) * 2 + basePoint; 
			return distancePoints;
		} else if(distance<kPoint) {
			const distancePoints = (kPoint - distance) * -2 + basePoint;
			return distancePoints;
		} else {
			return basePoint;
		}
	}
};

module.exports = calculateDistancePoints;