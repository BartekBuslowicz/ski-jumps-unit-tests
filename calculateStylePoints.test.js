const assert = require('assert');
const calculateStylePoints = require('./calculateStylePoints');
describe('calculateStylePoints', () => {
	describe('points', () => {
		it('should return 30', () => {
			const actual = calculateStylePoints([15,10,10.5,10,20]);

			const expected = '35.5';

			assert.equal(actual, expected);
		});
		it('should return 30', () => {
			const actual = calculateStylePoints([10,10,10,10,10]);

			const expected = '30';

			assert.equal(actual, expected);
		});
		it('should return 0', () => {
			const actual = calculateStylePoints([0,0,0,0,0]);

			const expected = '0';

			assert.equal(actual, expected);
		});
		it('should return "not enough ratings"', () => {
			const actual = calculateStylePoints([15,10,10.5,10]);

			const expected = 'not enough ratings';

			assert.equal(actual, expected);
		});
	});
});