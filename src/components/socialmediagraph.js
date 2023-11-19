import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

const Socialmediagraph = ({ hashtags }) => {
  const generateRandomColors = (numColors) => {
    const colors = [];
    for (let i = 0; i < numColors; i++) {
      colors.push(`rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, 0.6)`);
    }
    return colors;
  };


  const data = {
    labels: Object.keys(hashtags),
    datasets: [
      {
        data: Object.values(hashtags),
        backgroundColor: generateRandomColors(Object.values(hashtags).length),
        borderWidth: 1
      },
    ],
  }

  const options = {
    plugins:{
      legend: {
        display: false, 
      },
      responsive: true,
      datalabels: {
        display: true,
        color: 'black',
        formatter: (val, ctx) => (ctx.chart.data.labels[ctx.dataIndex])
      }
    }
  };

  return (
    <div className='rounded-lg border border-gray-200 shadow-sidd p-8 flex flex-col gap-8 h-full items-center'>

      <div className='flex flex-col gap-5' id='plot'>
        <p className='text-center'>Sunburst Analysis</p>
        <Doughnut data={data} options={options}/>
      </div>

    </div>
  )
}

export default Socialmediagraph
