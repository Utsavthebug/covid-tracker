import React, { useContext } from 'react'


import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { myContext } from './context/DataContext';


ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );


  export const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Chart.js Bar Chart',
      },
    },
  };


const labels = ['Infected', 'Recovered', 'Deaths'];

export const dataCalc =(data)=> ({
    labels,
    datasets: [
      {
        label: 'No. of corona cases',
        data,
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)'
        ],
        borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
        ],
        
      },
    ],
  });



  function Chart() {
    const {state} = useContext(myContext)
    const Casesdata = [state.data.confirmed.value,state.data.recovered.value,state.data.deaths.value]

    let data = dataCalc(Casesdata)

    return <Bar options={options} data={data} />;
  }
export default Chart