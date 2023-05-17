import { getCar } from './getCar.js'

describe('test for getCar function', () => {
   it('should show name of the car', () => {
      expect(getCar(8)).toBe('Nissan'); // pass
      expect(getCar(11)).toBe('Not a car'); // pass
      expect(getCar(3)).toBe('Opel'); // fail
   });
})
