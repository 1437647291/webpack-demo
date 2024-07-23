import { addNum, preveNum } from './const';

describe('对数字进行加减', () => {
  it ('添加数字', () => {
    const num = 2;
    const expected = 3;
    const result = addNum(2);

    expect(result).toEqual(expected);
  });

  it ('减去数字', () => {
    const num = 2;
    const expected = 1;

    const result = preveNum(2);

    expect(result).toEqual(expected);
  })
})