import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';

// Objects imported from components/index.js;
import { fetchCountries } from '../../api';


import Styles from './CountryPicker.module.css';


const CountryPicker = ({handleCountryChange }) => {

    // Once the data in the [] brackets is fetched we will set the data to the state utilizing hooks (below)
    const [fetchedCountries, setFetchedCountries] = useState([]); // useState = empty array 

    // useEffect callback
    useEffect(() => {

        const fetchAPI = async () => {
            setFetchedCountries(await fetchCountries());
        }

        fetchAPI();
    }, [setFetchedCountries]);

    return (
        <section className={Styles.container}>
            <FormControl className={Styles.formcontrol}>
                <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value )}>
                    <option value=''>Global</option>
                    {/* *Note: whenever mapping, a key (below=i) must be provided */}
                    {fetchedCountries.map((country, i) => <option key={i} value={country}>{country}</option>)}
                </NativeSelect>
            </FormControl>
        </section>
    )
}

export default CountryPicker;