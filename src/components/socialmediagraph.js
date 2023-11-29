import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";

// import dynamic from "next/dynamic";
// const Plot = dynamic(() => import("react-plotly.js"), { ssr: false, });

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

const Socialmediagraph = ({ hashtags }) => {
    const hashtagArray = Object.entries(hashtags);
    hashtagArray.sort((a, b) => b[1] - a[1]).reverse();
    hashtags = Object.fromEntries(hashtagArray);
    
    // Logic for chart using plotly
    
    // const hashtagKeys = Object.keys(hashtags), hashtagValues = Object.values(hashtags);
    // const _parents = [""];
    // let j = 0;
    // while (_parents.length < hashtagKeys.length) {
    //   for (let i = 0; i < 3; i++) {
    //     _parents.push(hashtagKeys[j]);
    //   }
    //   j++;
    // }

    // const data = [{
    //   type: "sunburst",
    //   labels: hashtagKeys,
    //   parents: _parents,
    //   values: hashtagValues,
    //   outsidetextfont: { size: 20, color: "#377eb8" },
    //   leaf: { opacity: 0.4 },
    //   marker: { line: { width: 2 } },
    // }];

    // const layout = {
    //   margin: { l: 0, r: 0, b: 0, t: 0 },
    //   width: 500,
    //   height: 500
    // };

    // Logic for chart using chartjs

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
        plugins: {
            legend: {
                display: true,
                position: 'right'
            },
            responsive: true,
            datalabels: {
                display: 'auto',
                color: 'black',
                formatter: (val, ctx) => {
                    return `${ctx.chart.data.labels[ctx.dataIndex]}\n${ctx.dataset.data[ctx.dataIndex].toLocaleString()}`;
                }
            }
        }
    };

    return (
        <div className='rounded-lg border border-gray-200 shadow-sidd flex flex-col gap-8 h-full items-center'>
            {/* <Plot data={data} layout={layout} config={{ displaylogo: false }} /> */}
            <Doughnut data={data} options={options} />
        </div>
    )
}

export default Socialmediagraph
