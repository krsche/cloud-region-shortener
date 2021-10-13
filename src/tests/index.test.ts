import { setDefaultStyle, getDefaultStyle, getMaxLength, setMaxLength, Styles, getShortRegion } from '../index';

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
    setDefaultStyle(Styles.standard);
    expect(getDefaultStyle()).toBe(Styles.standard);
    setDefaultStyle();
    expect(getDefaultStyle()).toBe(Styles.standard);
});

test('maxLength', () => {
    setMaxLength(4);
    expect(getMaxLength()).toBe(4);
    expect(getShortRegion('eastus2euap')).toBe('eus2');
    setMaxLength();
    expect(getMaxLength()).toBe(0);
    expect(getShortRegion('eastus2euap')).toBe('eus2e');
});

test('maxLength-negative', () => {
    expect(() => {
        setMaxLength(-1);
    }).toThrow(Error);
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
