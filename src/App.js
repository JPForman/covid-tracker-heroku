import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";

import StateCharts from './components/StateCharts/StateCharts';
import CountryCharts from './components/CountryCharts/CountryCharts';
import Navbar from './components/Navbar/Navbar';
import { fetchData } from './api';
import "bootstrap/dist/css/bootstrap.min.css";

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
          <Navbar />
          <img className={styles.image} src={coronaImage} alt='corona image'/>
        <Switch >
          <Route exact path='/' render={() => <CountryCharts data={data} handleCountryChange={this.handleCountryChange} country={country} />}  />
          <Route path='/state' render={() => <StateCharts />} />
        </Switch>
      </div>
    )
  }
}
