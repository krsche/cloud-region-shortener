import { setDefaultStyle, getDefaultStyle, Styles, getShortRegion } from '../index';

test('get-standard', () => {
    expect(getShortRegion('westeurope')).toBe('weu');
});

test('get-unknown', () => {
    expect(() => {
        getShortRegion('westhausen');
    }).toThrow(Error);
});

test('defaultStyle-get', () => {
    expect(getDefaultStyle()).toBe(Styles.standard);

    // setDefaultShortRegionStyle(Styles.iso3166);
    // expect(getDefaultShortRegionStyle()).toBe(Styles.iso3166);

    setDefaultStyle(Styles.standard);
    expect(getDefaultStyle()).toBe(Styles.standard);
    setDefaultStyle();
    expect(getDefaultStyle()).toBe(Styles.standard);
    setDefaultShortRegionStyle(Styles.standard);
    expect(getDefaultShortRegionStyle()).toBe(Styles.standard);
    setDefaultShortRegionStyle();
    expect(getDefaultShortRegionStyle()).toBe(Styles.standard);
});

// test('get-iso3166', () => {
//     expect(getShortRegion('westeurope', Styles.iso3166)).toBe('nl');
// });

// test('defaultStyle-iso3166', () => {
//     setDefaultShortRegionStyle(Styles.iso3166);
//     expect(getShortRegion('westeurope')).toBe('nl');
// });

// test('defaultStyle-reset', () => {
//     setDefaultShortRegionStyle(Styles.iso3166);
//     expect(getShortRegion('westeurope')).toBe('nl');
//     setDefaultShortRegionStyle();
//     expect(getShortRegion('westeurope')).toBe('weu');
// });
