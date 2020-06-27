import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";

import StateCharts from './components/StateCharts/StateCharts';
import CountryCharts from './components/CountryCharts/CountryCharts';
import Navbar from './components/Navbar/Navbar';
import { fetchData, fetchStates, fetchPopulation } from './api';
import "bootstrap/dist/css/bootstrap.min.css";

import coronaImage from './images/image.png';

import styles from './App.module.css';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {},
      country: '',
      allStateData: {},
      allStatePopulation: {},
      stateName: '',
    }
  }

  async componentDidMount() {
    const fetchedData = await fetchData();
    const fetchedAllStateData = await fetchStates();
    const fetchedPopulationData = await fetchPopulation();
    
    this.setState({ data: fetchedData });
    this.setState({ allStateData: fetchedAllStateData });
    this.setState({ allStatePopulation: fetchedPopulationData });
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
          <Route path='/state' render={() => <StateCharts allStateData={this.state.allStateData}/>} />
        </Switch>
      </div>
    )
  }
}
