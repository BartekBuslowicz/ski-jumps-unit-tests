
const calculateStylePoints = (styleNotes) => {
    const table = styleNotes.sort();
	if(table.length<5) {
		return 'not enough ratings'
	} else {
	table.pop();
	table.shift();
    let sumPoints = 0;
    for (let i=0; i<table.length; i++) {
        sumPoints += table[i];
    }
    return sumPoints;
    }
}
module.exports = calculateStylePoints;