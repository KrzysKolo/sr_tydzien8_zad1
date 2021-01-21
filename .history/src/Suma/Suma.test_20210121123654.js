import { sum } from './Sum'
describe("sum two numbers", () => {
	it("should work", () => {
		expect(sum(1,2)).toBe(3);
	})
});