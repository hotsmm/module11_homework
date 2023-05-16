import { enumerFunc } from './enumerFunc.js'

describe('test for enumerFunc function', () => {
   it('should count up with numbers not equal 20', () => {
      expect(enumerFunc(7)).toBe('78910111213141516171819'); // pass
   }),
      it('should count up with numbers equal 20', () => {
         expect(enumerFunc(20)).toBe("0"); // fail, for correct shoul be ""
      });
})