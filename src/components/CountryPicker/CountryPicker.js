import React, { useState, useEffect } from 'react'
import { NativeSelect, FormControl } from '@material-ui/core'

import { } from "./CountryPicker.css";
import { fetchCountries } from "../../api";

export const CountryPicker = ({ handleCountryChange }) => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            setCountries(await fetchCountries());
        };
        fetchAPI();
    }, [setCountries]);

    return (
        <FormControl className="formcontrol">
            <NativeSelect defaultChecked="" onChange={(e) => handleCountryChange(e.target.value)}>
                <option value="">Weltweit</option>
                {countries.map((country, i) => <option key={i} value={country}>{country}</option>)}
            </NativeSelect>
        </FormControl>
    )
}
