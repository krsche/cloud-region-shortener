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
    // iso3166 = 1,
}

const regionAbbreviations: { [cloudregion: string]: string[] } = {
    eastus: ['eus'],
    eastus2: ['eus2'],
    southcentralus: ['scus'],
    westus2: ['wus2'],
    westus3: ['wus3'],
    australiaeast: ['aue'],
    southeastasia: ['seas'],
    northeurope: ['neu'],
    swedencentral: ['swc'],
    uksouth: ['uks'],
    westeurope: ['weu'],
    centralus: ['cus'],
    northcentralus: ['ncus'],
    westus: ['wus'],
    southafricanorth: ['san'],
    centralindia: ['cin'],
    eastasia: ['eas'],
    japaneast: ['jae'],
    jioindiawest: ['jinw'],
    koreacentral: ['koc'],
    canadacentral: ['cac'],
    francecentral: ['frc'],
    germanywestcentral: ['gewc'],
    norwayeast: ['noe'],
    switzerlandnorth: ['swn'],
    uaenorth: ['uan'],
    brazilsouth: ['brs'],
    centralusstage: ['cuss'],
    eastusstage: ['euss'],
    eastus2stage: ['eus2s'],
    northcentralusstage: ['ncuss'],
    southcentralusstage: ['scuss'],
    westusstage: ['wuss'],
    westus2stage: ['wus2s'],
    asia: ['as'],
    asiapacific: ['asp'],
    australia: ['au'],
    brazil: ['br'],
    canada: ['ca'],
    europe: ['eu'],
    france: ['fr'],
    germany: ['ge'],
    global: ['gl'],
    india: ['in'],
    japan: ['ja'],
    korea: ['ko'],
    norway: ['no'],
    southafrica: ['saf'],
    switzerland: ['sw'],
    uae: ['ua'],
    uk: ['uk'],
    unitedstates: ['us'],
    eastasiastage: ['eass'],
    southeastasiastage: ['seass'],
    centraluseuap: ['cuseu'],
    eastus2euap: ['eus2eu'],
    westcentralus: ['wcus'],
    southafricawest: ['safw'],
    australiacentral: ['auc'],
    australiacentral2: ['auc2'],
    australiasoutheast: ['ause'],
    japanwest: ['jaw'],
    jioindiacentral: ['jinc'],
    koreasouth: ['kos'],
    southindia: ['sin'],
    westindia: ['win'],
    canadaeast: ['cae'],
    francesouth: ['frs'],
    germanynorth: ['gen'],
    norwaywest: ['now'],
    switzerlandwest: ['swe'],
    ukwest: ['ukw'],
    uaecentral: ['uac'],
    brazilsoutheast: ['brse'],
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
