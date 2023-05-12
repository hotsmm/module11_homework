import {getPercents} from './taskHW-01';

describe('checking the getPercents function for a percentage of the number', () => {

  it('add 30 and 200 expect 60', () => {
    expect(getPercents(30, 200)).toBe(60);
    });

    it('add 30 and 200 expect 80', () => {
      expect(getPercents(30, 200)).toBe(80);
      });

      it('add -Infinity and Infinity expect 80', () => {
        expect(getPercents(-Infinity, Infinity)).toBe(80);
        });

        it('add -Infinity and Infinity expect -Infinity', () => {
          expect(getPercents(-Infinity, Infinity)).toBe(-Infinity);
          });

          it('add 0 and Infinity expect NaN', () => {
            expect(getPercents(0, Infinity)).toBe(NaN);
            });
});