import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, BarElement, Title, Tooltip, Legend, Filler } from 'chart.js';
import 'chartjs-plugin-datalabels'; 

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

var meses = ["R1", "R2", "R3", "R4", "R5", "R6", "R7"];

var misoptions = {
  responsive: true,
  maintainAspectRatio: false, // Set this to false to make the chart responsive
  aspectRatio: 1.5,
};

var pastelColors = [
  'rgba(255, 173, 173, 0.7)',
  'rgba(173, 255, 173, 0.7)',
  'rgba(173, 173, 255, 0.7)',
  'rgba(255, 255, 173, 0.7)',
  'rgba(255, 173, 255, 0.7)',
  'rgba(173, 255, 255, 0.7)',
];

var borderColors = [
  'rgba(255, 63, 63, 0.5)',
  'rgba(63, 191, 63, 0.5)',
  'rgba(63, 63, 255, 0.5)',
  'rgba(255, 255, 63, 0.5)',
  'rgba(255, 63, 255, 0.5)',
  'rgba(63, 255, 255, 0.5)',
];

var legendLabels = ['LNOM', 'META', 'COMPROMISOS', 'AVANCE', 'SIAN', 'OTROS'];

export default function Bars() {
  const [midata, setMidata] = useState(getRandomData());

  useEffect(() => {
    setMidata(getRandomData());
  }, []);

  function getRandomData() {
    const data = [];
    for (let i = 0; i < legendLabels.length; i++) {
      const randomValues = [];
      for (let j = 0; j < meses.length - 1; j++) {
        const randomValue = Math.floor(Math.random() * (1000000 - 200000 + 1)) + 200000;
        randomValues.push(randomValue);
      }
      data.push(randomValues);
    }
    return {
      labels: meses.map((mes) => mes.padStart(4, ' ')),
      datasets: data.map((values, index) => ({
        label: legendLabels[index],
        data: values,
        backgroundColor: pastelColors[index % pastelColors.length],
        borderColor: borderColors[index % borderColors.length],
        borderWidth: 2,
      })),
    };
  }

  return <Bar data={midata} options={misoptions} />;
}
