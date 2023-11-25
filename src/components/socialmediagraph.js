import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";
import Plot from 'react-plotly.js';

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

const Socialmediagraph = ({ hashtags }) => {
  // if (Object.keys(hashtags).length == 1) {
  //   const new_hashtags1 = {
  //     "#TechTrends": 350000,
  //     "#HealthyLiving": 120000,
  //     "#AdventureTime": 280000,
  //     "#FoodieFiesta": 90000,
  //     "#FashionFrenzy": 400000,
  //     "#TravelGoals": 150000,
  //     "#MindfulnessMondays": 60000,
  //     "#DIYDelights": 200000,
  //   };

  //   const new_hashtags2 = {
  //     "#GadgetGalore": 250000,
  //     "#WellnessWednesday": 180000,
  //     "#ExploreEats": 120000,
  //     "#StyleSundays": 300000,
  //     "#WanderlustVibes": 200000,
  //     "#FitnessFun": 90000,
  //     "#CreativityCorner": 150000,
  //     "#HomeChefHero": 220000,
  //   }

  //   const randomInteger = Math.floor(Math.random() * 2);
  //   if (randomInteger == 0) hashtags = new_hashtags1;
  //   else hashtags = new_hashtags2;
  // }

  const hashtagArray = Object.entries(hashtags);
  hashtagArray.sort((a, b) => b[1] - a[1]);
  hashtags = Object.fromEntries(hashtagArray);
  const hashtagKeys = Object.keys(hashtags), hashtagValues = Object.values(hashtags);

  const _parents = [""];
  let j = 0;
  while (_parents.length < hashtagKeys.length) {
    for (let i = 0; i < 3; i++) {
      _parents.push(hashtagKeys[j]);
    }
    j++;
  }

  const data = [{
    type: "sunburst",
    labels: hashtagKeys,
    parents: _parents,
    values: hashtagValues,
    outsidetextfont: { size: 20, color: "#377eb8" },
    leaf: { opacity: 0.4 },
    marker: { line: { width: 2 } },
  }];

  const layout = {
    margin: { l: 0, r: 0, b: 0, t: 0 },
    width: 500,
    height: 500
  };

  // const generateRandomColors = (numColors) => {
  //   const colors = [];
  //   for (let i = 0; i < numColors; i++) {
  //     colors.push(`rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, 0.6)`);
  //   }
  //   return colors;
  // };


  // const data = {
  //   labels: Object.keys(hashtags),
  //   datasets: [
  //     {
  //       data: Object.values(hashtags),
  //       backgroundColor: generateRandomColors(Object.values(hashtags).length),
  //       borderWidth: 1
  //     },
  //   ],
  // }

  // const options = {
  //   plugins: {
  //     legend: {
  //       display: false,
  //     },
  //     responsive: true,
  //     datalabels: {
  //       display: true,
  //       color: 'black',
  //       formatter: (val, ctx) => (ctx.chart.data.labels[ctx.dataIndex])
  //     }
  //   }
  // };

  return (
    <div className='rounded-lg border border-gray-200 shadow-sidd p-8 flex flex-col gap-8 h-full items-center'>

      <div className='flex flex-col gap-5' id='plot'>
        <p className='text-center'>Sunburst Analysis</p>
        {/* <Doughnut data={data} options={options} /> */}
        <Plot data={data} layout={layout} config={{ displaylogo: false }} />
      </div>

    </div>
  )
}

export default Socialmediagraph
