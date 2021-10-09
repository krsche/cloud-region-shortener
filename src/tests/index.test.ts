import getShortRegion from '../index';

test('basic', () => {
    expect(getShortRegion('westeurope')).toBe('weu');
});
