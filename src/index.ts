// enum CloudProviders {
//     Azure,
// }

// interface IShortenRegion {
//     (region: string): string;
// }

// interface IRegionShortener {
//     readonly cloudProvider: CloudProviders;
//     readonly shortRegionB1: { [id: string]: string };
//     readonly regionSynonyms: { [id: string] };
//     shortenRegion(region: string): string;
// }

// export class RegionShortenerAzure implements IRegionShortener {
//     public readonly cloudProvider = CloudProviders.Azure;

//     public readonly shortRegionB1 = {
//         westeurope: 'euw',
//     };

//     public readonly regionSynonyms = {
//         westeurope: ['westeurope', 'westeu'],
//         westus: ['westus', 'westunitedstates'],
//     };

//     public shortenRegion = (region: string): string => {
//         return 'NotImplemented';
//     };
// }

export enum Styles {
    standard = 0,
    iso3166 = 1,
}

const regionAbbreviations: { [cloudregion: string]: string[] } = {
    westeurope: ['weu', 'nl'],
};

let defaultStyle = Styles.standard;

export function getDefaultShortRegionStyle(): Styles {
    return defaultStyle;
}

export function setDefaultShortRegionStyle(style = Styles.standard): Styles {
    defaultStyle = style;
    return defaultStyle;
}

export function getShortRegion(region: string, style = defaultStyle): string {
    if (Object.keys(regionAbbreviations).includes(region)) {
        return regionAbbreviations[region][style.valueOf()];
    }
    throw new Error(`Region '${region}' not recognized as a known region. Shortening not possible!'`);
}
