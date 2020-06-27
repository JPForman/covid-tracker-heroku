import React, { useState, useEffect } from 'react'
import {Bubble} from 'react-chartjs-2';
import { fetchStates, fetchPopulation } from '../../api';

export default function StateScatter({ allStateData }) {

  const [statesData, setStatesData] = useState([]);
  const [statesPopulation, setStatesPopulation] = useState([]);
  
  useEffect(() => {
    const fetchAPI = async () => {
      setStatesData(await fetchStates());
      setStatesPopulation(await fetchPopulation());
    }
    
    fetchAPI();
  }, []);
  
const scatterChartStates = (
  <Bubble 
        data={{
          labels: statesData.map(({ stateName }) => stateName ),
          datasets: [
            {
              label: ['one'],
              fill: false,
              lineTension: 0.1,
              backgroundColor: 'rgba(75,192,192,0.4)',
              borderColor: 'rgba(75,192,192,1)',
              borderCapStyle: 'butt',
              borderDash: [],
              borderDashOffset: 0.0,
              borderJoinStyle: 'miter',
              pointBorderColor: 'rgba(75,192,192,1)',
              pointBackgroundColor: '#fff',
              pointBorderWidth: 1,
              pointHoverRadius: 5,
              pointHoverBackgroundColor: 'rgba(75,192,192,1)',
              pointHoverBorderColor: 'rgba(220,220,220,1)',
              pointHoverBorderWidth: 2,
              pointRadius: 1,
              pointHitRadius: 10,
              data: [
                statesData.map((st) => (
                  {x: st.totalTestResults,y: st.positive,r: st.death},
                )]
            },
          ]
        }}
      />
)
  
  
  return (
    <div>
      {scatterChartStates}
    </div>
  )
}
