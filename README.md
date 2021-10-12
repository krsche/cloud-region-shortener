# Cloud Region Shortener

> Abbreviate region names of cloud providers in a standardized way.

## Features
- Convert (long) region names to abbreviated form
- Specify a maximum length for abbreviations
- Select from different abbreviation styles (set default style)

## Usage
### Basic
```typescript
import { getShortRegion } from 'cloud-region-shortener'

console.log(getShortRegion('westeurope'));
// weu
```

### More Options
```typescript
import { getShortRegion, Styles } from 'cloud-region-shortener'

// --- MaxLength ---
console.log(getShortRegion('northcentralusstage')); 
// ncuss

console.log(getShortRegion('northcentralusstage')); 
// ncus

setMaxLength(4);
console.log(getShortRegion('northcentralusstage')); 
// ncus

// --- Style ---
console.log(getShortRegion('westeurope', Styles.iso3166)); // style not supported yet
// nl

setDefaultStyle(Styles.iso3166); // style not supported yet
console.log(getShortRegion('westeurope')); // style not supported yet
// nl
```


## Styles
The following will demonstrate different style types and rules using regions `germanywestcentral` and `eastus2stage` as an example.

| Example Region       | Standard | ISO 3166 |
| -------------------- | -------- | -------- |
| `germanywestcentral` | `gewc`   | ``       |
| `eastus2stage`       | `eus2s`  |          |

### "Standard"
Abbreviates the long region name 'as is', while following these rules:  

1. A (long) region name is first split into sections. 
2. Each section is then abbreviated according to different rules. 
3. Afterwards abbreviated section are concatenated in the same order

**Sections:**
- country / continent 
  - always two first characters of section  
    **germany**westcentral, ==> _germany_ = _ge_  
    east**us**2stage, ==> _us_ = _us_
- cardinal directions / secondard geographic specifier 
  - one character per section  
    germany**west** **central**: _westcentral_ ==> _wc_  
    **east**us2stage: _east_ ==> _e_  
- enumerator 
  - enumerator is always kept as is (if present)  
    germanywestcentral: -  
    eastus**2**stage: _2_ ==> _2_  
- special characteristic
  - one character per section  
    germanywestcentral: -  
    eastus2**stage**: _stage_ ==> _s_  


### ISO3166
> **⚠️ Warning**
>
> Not implemented yet

## Supported Regions
| Azure Region Name   | Standard |
| ------------------- | -------- |
| eastus              | eus      |
| eastus2             | eus2     |
| southcentralus      | scus     |
| westus2             | wus2     |
| westus3             | wus3     |
| australiaeast       | aue      |
| southeastasia       | seas     |
| northeurope         | neu      |
| swedencentral       | swc      |
| uksouth             | uks      |
| westeurope          | weu      |
| centralus           | cus      |
| northcentralus      | ncus     |
| westus              | wus      |
| southafricanorth    | san      |
| centralindia        | cin      |
| eastasia            | eas      |
| japaneast           | jae      |
| jioindiawest        | jinw     |
| koreacentral        | koc      |
| canadacentral       | cac      |
| francecentral       | frc      |
| germanywestcentral  | gewc     |
| norwayeast          | noe      |
| switzerlandnorth    | swn      |
| uaenorth            | uan      |
| brazilsouth         | brs      |
| centralusstage      | cuss     |
| eastusstage         | euss     |
| eastus2stage        | eus2s    |
| northcentralusstage | ncuss    |
| southcentralusstage | scuss    |
| westusstage         | wuss     |
| westus2stage        | wus2s    |
| asia                | as       |
| asiapacific         | asp      |
| australia           | au       |
| brazil              | br       |
| canada              | ca       |
| europe              | eu       |
| france              | fr       |
| germany             | ge       |
| global              | gl       |
| india               | in       |
| japan               | ja       |
| korea               | ko       |
| norway              | no       |
| southafrica         | saf      |
| switzerland         | sw       |
| uae                 | ua       |
| uk                  | uk       |
| unitedstates        | us       |
| eastasiastage       | eass     |
| southeastasiastage  | seass    |
| centraluseuap       | cuse     |
| eastus2euap         | eus2e    |
| westcentralus       | wcus     |
| southafricawest     | safw     |
| australiacentral    | auc      |
| australiacentral2   | auc2     |
| australiasoutheast  | ause     |
| japanwest           | jaw      |
| jioindiacentral     | jinc     |
| koreasouth          | kos      |
| southindia          | sin      |
| westindia           | win      |
| canadaeast          | cae      |
| francesouth         | frs      |
| germanynorth        | gen      |
| norwaywest          | now      |
| switzerlandwest     | swe      |
| ukwest              | ukw      |
| uaecentral          | uac      |
| brazilsoutheast     | brse     |
