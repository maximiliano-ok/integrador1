const countries = require('./countries.json');

/** Get only the name of the country given his iso3 code.
 * For example: given the isoCode 'ARG'
 * The response should be: 'Argentina'
 * @param  {array} isoCode
 * @returns {string}
 */
function getCountryNameByIso3(isoCode){
    const country = countries.find(country => country.iso3 === isoCode);
    return country.name ;
}

/**
 * Get country summary given the ISO3 code. 
 * It has to be a new object containing only the following data:
 * {
 *  name: ,
 *  iso3: ,
 *  iso2: ,
 *  phone_code,
 *  capital: ,
 *  currency: ,
 *  tld: ,
 *  region: ,
 *  emoji: ,
 * }
 * @param  {string} isoCode
 * @returns {Object}
 */
function getCountrySummary(isoCode){
    const country = countries.find(country => country.iso3 === isoCode);
    return (country.name+' #'+country.iso3+' #'+country.iso2+' # '+country.phone_code+' # '+country.capital+' # '+country.currency+' # '+country.tld+' # '+country.region+' # '+country.emoji);

}

function main() {
    console.log(
        '///// Ejercicio 1 /////\n',
        getCountryNameByIso3('AFG'),
        '\n');
    console.log(
        '///// Ejercicio 2 /////\n',
        getCountrySummary('AFG'),
        '\n');

}

main();
