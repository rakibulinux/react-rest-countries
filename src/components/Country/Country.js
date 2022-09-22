import React from 'react';
import './Country.css';

const Country = (props) => {
  return (
    <div className='Country'>
      <h2>Country Name: {props.name}</h2>
      <h4>Population: {props.population}</h4>
      <h5>Area: {props.area}</h5>
      <h5>Region: {props.region}</h5>
      <img src={props.flag} alt="" />
    </div>
  )
};

export default Country;
