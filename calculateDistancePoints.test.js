const assert = require('assert');
const calculateDistancePoints = require('./calculateDistancePoints');

describe('calculateDistancePoints', () => {
	describe('points', () => {
		it('should return 144 points', () => {
			const actual = calculateDistancePoints(220,'mamucia',200);

			const expected = '144';

			assert.equal(actual, expected);
		});
		it('should return 96 points', () => {
			const actual = calculateDistancePoints(140,'duza',120);

			const expected = '96';

			assert.equal(actual, expected);
		});
		it('should return 84 points', () => {
			const actual = calculateDistancePoints(110,'mala',98);

			const expected = '84';

			assert.equal(actual, expected);
		});
		it('should return 120 points', () => {
			const actual = calculateDistancePoints(200,'mamucia',200);

			const expected = '120';

			assert.equal(actual, expected);
		});
		it('should return 60 points', () => {
			const actual = calculateDistancePoints(120,'duza',120);

			const expected = '60';

			assert.equal(actual, expected);
		});
		it('should return 60 points', () => {
			const actual = calculateDistancePoints(98,'mmala',98);

			const expected = '60';

			assert.equal(actual, expected);
		});
		it('should return 96 points', () => {
			const actual = calculateDistancePoints(180,'mamucia',200);

			const expected = '96';

			assert.equal(actual, expected);
		});
		it('should return 24 points', () => { 
			const actual = calculateDistancePoints(100,'duza',120);

			const expected = '24';

			assert.equal(actual, expected);
		});
		it('should return 24 points', () => {
			const actual = calculateDistancePoints(80,'mala',98);

			const expected = '24';

			assert.equal(actual, expected);
		});
	});
});