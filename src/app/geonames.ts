export type Geonames = Country[]

export interface Country {
  continent: string
  capital: string
  languages: string
  geonameId: number
  south: number
  isoAlpha3: string
  north: number
  fipsCode: string
  population: string
  east: number
  isoNumeric: string
  areaInSqKm: string
  countryCode: string
  west: number
  countryName: string
  postalCodeFormat: string
  continentName: string
  currencyCode: string
}
