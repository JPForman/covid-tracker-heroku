import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

export const fetchData = async (country) => {
  let changeableUrl = url;
  fetchPopulation();
  if(country) {
    changeableUrl =`${url}/countries/${country}`
  }

  try{
    const { data: { confirmed, recovered, deaths, lastUpdate} } = await axios.get(changeableUrl);
    
    return { confirmed, recovered, deaths, lastUpdate }

  } catch (error) {
    console.log('error: ', error);
    
  }
}

export const fetchDailyData = async ()=> {
  try {
    const { data } = await axios.get(`${url}/daily`);

    const modifiedData = data.map((dailyData) => ({
      confirmed: dailyData.confirmed.total,
      deaths: dailyData.deaths.total,
      date: dailyData.reportDate,
    }));

    return modifiedData;
    
  } catch (error) {
    console.log(error);
  }
}

export const fetchCountries = async () => {
  try {
    const { data: { countries }} = await axios.get(`${url}/countries`);

    return  countries.map((country) => country.name);
  } catch (error) {
    console.log(error);
  }
}



const popURL = 'https://datausa.io/api/data?drilldowns=State&measures=Population&year=latest'

export const fetchPopulation = async () => {
  try {
    const { data } = await axios.get(`${popURL}`)

    console.log('fetchPopulation data: ', data);
    
  } catch (error) {
    console.log(error);
  }
}



const stateURL = 'https://covidtracking.com/api/v1/states.json';

export const fetchStates = async () => {
  try {
    const { data } = await axios.get(`${stateURL}`);

    const modifiedData = data.map((data) => ({
      death: data.death, 
      stateName: data.state, 
      total: data.total, 
      totalTestResults: data.totalTestResults, 
      totalTestResultsIncrease: data.totalTestResultsIncrease
    })); 

    console.log('fetchStates: ', modifiedData);
    return modifiedData;

  } catch (error) {
    console.log(error)
  }
}