import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import CountryCharts from './components/CountryCharts/CountryCharts';
import { fetchData } from './api';

import coronaImage from './images/image.png';

import styles from './App.module.css';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {},
      country: '',
    }
  }

  async componentDidMount() {
    const fetchedData = await fetchData();

    this.setState({ data: fetchedData });
  }
  
  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    
    this.setState({ data: fetchedData, country: country });
  } 

  render() {
    const { data, country } = this.state;
    return (
      <div className={styles.container}>
        <img className={styles.image} src={coronaImage} alt='corona image'/>
        <Router>
          <Route path='/' render={() => <CountryCharts data={data} handleCountryChange={this.handleCountryChange} country={country} />}  />
        </Router>
      </div>
    )
  }
}
