import React from 'react';
import Cards from '../Cards/Cards';
import Chart from '../Chart/Chart';
import CountryPicker from '../CountryPicker/CountryPicker';

import styles from './CountryCharts.module.css';


export default function CountryCharts({ data, handleCountryChange, country}) {
  
  
  return (
    <div className={styles.container}>
      <Cards data={data} />
      <CountryPicker handleCountryChange={handleCountryChange} />
      <Chart data={data} country={country}/>
    </div>
  )
}
