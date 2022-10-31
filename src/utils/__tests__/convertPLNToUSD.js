import { convertPLNToUSD } from './../convertPLNtoUSD';

describe('ConvertPLNtoUSD', () => {
  it('should return proper value when good input', () => {
    expect(convertPLNToUSD(1)).toBe('$0.29');
    expect(convertPLNToUSD(2)).toBe('$0.57');
    expect(convertPLNToUSD(20)).toBe('$5.71');
    expect(convertPLNToUSD(12)).toBe('$3.43');
  });

  it('should return NaN when input is text', () => {
    expect(convertPLNToUSD('6')).toBeNaN();
    expect(convertPLNToUSD('test')).toBeNaN();
    expect(convertPLNToUSD('one dolar')).toBeNaN();
    expect(convertPLNToUSD('-1')).toBeNaN();
  });

  it('should return NaN when input is empty', () => {
    expect(convertPLNToUSD()).toBeNaN();
  });

  it('should return Error when input is not text or number', () => {
    expect(convertPLNToUSD([1])).toBe('Error');
    expect(convertPLNToUSD({ value: 'one' })).toBe('Error');
    expect(convertPLNToUSD(true)).toBe('Error');
    expect(convertPLNToUSD(null)).toBe('Error');
    expect(convertPLNToUSD(function () { })).toBe('Error');
  })

  it('should return zero when input less than zero', () => {
    expect(convertPLNToUSD(-1)).toBe('$0.00');
    expect(convertPLNToUSD(-123058)).toBe('$0.00');
    expect(convertPLNToUSD(-0.1)).toBe('$0.00');
  })
});

