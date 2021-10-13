//       _                 _                      _                       _                _
//   ___| | ___  _   _  __| |      _ __ ___  __ _(_) ___  _ __        ___| |__   ___  _ __| |_ ___ _ __   ___ _ __
//  / __| |/ _ \| | | |/ _` |_____| '__/ _ \/ _` | |/ _ \| '_ \ _____/ __| '_ \ / _ \| '__| __/ _ \ '_ \ / _ \ '__|
// | (__| | (_) | |_| | (_| |_____| | |  __/ (_| | | (_) | | | |_____\__ \ | | | (_) | |  | ||  __/ | | |  __/ |
//  \___|_|\___/ \__,_|\__,_|     |_|  \___|\__, |_|\___/|_| |_|     |___/_| |_|\___/|_|   \__\___|_| |_|\___|_|
//                                          |___/

// ############################################################################
// Structures
// ############################################################################

export enum Styles {
    standard = 0,
    // iso3166 = 1,
}

// ############################################################################
// Consts & Variables
// ############################################################################

let defaultStyle = Styles.standard;
let maxLength = 0;

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
    centraluseuap: ['cuse'],
    eastus2euap: ['eus2e'],
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

// ############################################################################
// Get / Set
// ############################################################################

export function getDefaultStyle(): Styles {
    return defaultStyle;
}

export function setDefaultStyle(style = Styles.standard): Styles {
    defaultStyle = style;
    return defaultStyle;
}

export function setMaxLength(length = 0): number {
    if (length >= 0) {
        maxLength = length;
        return maxLength;
    }
    throw new Error("Can't set maximum length for abbreviation to a negative value!");
}

export function getMaxLength(): number {
    return maxLength;
}

// ############################################################################
// Functions
// ############################################################################

function truncate(input: string, len: number) {
    if (len > 0) {
        return input.substr(0, len);
    }
    return input;
}

export function getShortRegion(region: string, style = defaultStyle, pMaxLength = maxLength): string {  
    if (Object.keys(regionAbbreviations).includes(region)) {
        return truncate(regionAbbreviations[region][style.valueOf()], pMaxLength);
    }
    throw new Error(`Region '${region}' not recognized as a known region. Shortening not possible!'`);
}
