// *Note: Axios used to make api requests
import axios from 'axios';


// API 
const url = 'https://covid19.mathdro.id/api';

// ******************************************  DATA/PROPS FOR CARDS COMPONENTS  ************************************************

// Export the fetch function - an Async function returning the response of the Covid-19 API
export const fetchData = async (country) => {

    // Dynamic URL for *countryPicker:
    let chgUrl = url;
    if(country) {
        // build/ modify URL
        chgUrl = `${url}/countries/${country}`;
    } //end of countryPicker's stuff


    // if fetch successful for *Cards then try & catch
    try {


// ****************** Const-A Block goes here = longer technique of below block


// This a more efficient way of organizing it rather than the muted region (const-A) below
const {data: { deaths, confirmed, recovered, lastUpdate} } = await axios.get(chgUrl);

        // No need to store the data, so we can just....  
        const modData = { deaths, confirmed, recovered, lastUpdate }

        //... Return a response from the API asap
        return { confirmed, recovered, deaths, lastUpdate };

    } catch (error) {
        console.log(error)
    }
}


// ****************************************** DATA FOR CHARTS COMPONENTS ************************************************

export const fetchDailyData = async () => {
    try {
        const {data} = await axios.get(`${url}/daily`);

        // Map of the modified data in (the loop)  & perform an instant return of the data (objects) for the charts component
        const modData = data.map((dailyData) => ({
            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportDate,
        }));
        
        return modData;

    } catch (error) {

    }
}

// ******************************************  DATA FOR COUNTRY PICKER COMPONENTS ************************************************

export const fetchCountries = async () => {
    try {
        // resonse 
        const {data: {countries}} = await axios.get(`${url}/countries`);

        // Map of the modified data in (the loop)  & perform an instant return of the data (objects) for the charts component
        return countries.map((country) => country.name);
     
    } catch (error) {
        
    }
}


// *** Const-A Block = the block of code below is the long way to do the code above

//         const {data} = await axios.get(url);

//         const modData = {
//             deaths: data.deaths,
//             confirmed: data.confirmed,
//             recovered: data.recovered,
//             dailySummary: data.dailySummary,
//             dailyTimeSeries: data.dailyTimeSeries,
//             image: data.image
//         }

//         // Return a response from the API
//         return modData;
//     } catch (error) {

//     }
// }