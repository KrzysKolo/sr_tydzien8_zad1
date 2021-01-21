import {Sum} from './Sum';

describe('testing function sum with jest', () => {
    it('should display function sum', () => {
      expect(Sum(5, 5)).toBe(10);
    });
  });