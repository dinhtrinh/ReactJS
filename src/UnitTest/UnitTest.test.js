import UnitTest from './UnitTest';
describe('Unit Test', () => {
    it('Add function', () => {
        const unitTest = new UnitTest();
        const a = 3;
        const b = 1;
        expect(unitTest.Add(a, b)).toEqual(4);
    });
    it('Subtract funtion', () => {
        const unitTest = new UnitTest();
        const a = 3;
        const b = 1;
        expect(unitTest.Subtract(a, b)).toEqual(2);
    });
});