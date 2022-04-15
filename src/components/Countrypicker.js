import React, { useEffect, useState } from 'react'
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import { fetchCountries } from './api';
import styles from './CountryPicker.module.css';

const Countrypicker = ({handleCountryChange}) => {
    const [countries,setCountries] = useState([])

    useEffect(()=>{
        const fetchAPI = async()=>{
            setCountries(await fetchCountries())
        };
        fetchAPI()
    },[])

  return (
    <FormControl className={styles.formControl}>
    <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
      <option value="">Global</option>
      {countries.map((country, i) => <option key={i} value={country}>{country}</option>)}
        </NativeSelect>
    </FormControl>
  )
}

export default Countrypicker