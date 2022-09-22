import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css';

const Countries = () => {
  const [countries, setCountries] = useState([])
  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => setCountries(data))
  }, [])
  return (
    <div className="Countries">
    {
      countries.map(country => <Country 
        name={country.name.common} 
        population={country.population} 
        area={country.area} 
        flag={country.flags.png}
        region = {country.region}
        key = {country.cca3}
        ></Country>)
    }
  </div>
  )
};

export default Countries;
