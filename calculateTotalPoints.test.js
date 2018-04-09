const assert = require('assert');
const calculateTotalPoints = require('./calculateTotalPoints');

describe('calculateTotalPoints', () => {
	describe('points', () => {
		it('should return 186.5', () => {
			const actual = calculateTotalPoints(220,'mamucia',200, [15,10,10.5,10,20], 2, 5);

			const expected = '186.5';

			assert.equal(actual, expected);
		});
		it('should return 126', () => {
			const actual = calculateTotalPoints(140,'duza',120, [10,10,10,10,10], 5, -5);

			const expected = '126';

			assert.equal(actual, expected);
		});
		it('should return 74', () => {
			const actual = calculateTotalPoints(110,'mala',98, [0,0,0,0,0], 0, -10);

			const expected = '74';

			assert.equal(actual, expected);
		});
		it('should return 216', () => {
			const actual = calculateTotalPoints(240,'mamucia',200, [20,18,16,20,20], -10, 0);

			const expected = '216';

			assert.equal(actual, expected);
		});
	});
});