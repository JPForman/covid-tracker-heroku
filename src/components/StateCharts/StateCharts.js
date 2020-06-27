import React from 'react';
import StateScatter from '../StateScatter/StateScatter.js';

export default function StateCharts({ allStateData }) {
  return (
    <div>
      <StateScatter allStateData={allStateData} />
    </div>
  )
}
