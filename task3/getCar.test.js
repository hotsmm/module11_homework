import { getCar } from './getCar.js'

describe('test for getCar function', () => {
   it('should show name of the car', () => {
      expect(getMonth(8)).toBe('Nissan'); // pass
      expect(getMonth(11)).toBe('Not a car'); // pass
      expect(getMonth(3)).toBe('Opel'); // fail
   });
})