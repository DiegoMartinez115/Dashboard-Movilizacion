import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler);

var colores = ['rgba(255, 173, 173, 50)', 'rgba(173, 255, 173, 50)', 'rgba(173, 173, 255, 50)', 'rgba(255, 255, 173, 50)', 'rgba(255, 173, 255, 50)', 'rgba(173, 255, 255, 50)', 'rgba(255, 218, 173, 50)'];

var puntos = ['circle', 'circle', 'circle', 'circle', 'circle', 'circle', 'circle'];

var datasets = [...Array(7)].map((_, index) => ({
  label: `R${index + 1}`,
  data: Array(12).fill(0).map((_, i) => i === 0 ? 0 : Math.floor(Math.random() * 80001)),
  tension: 0,
  fill: false,
  borderColor: colores[index % colores.length],
  backgroundColor: colores[index % colores.length],
  pointRadius: 5,
  pointHoverRadius: 7,
  pointStyle: puntos[index % puntos.length],
  borderWidth: 2,
  borderCapStyle: 'round',
  borderJoinStyle: 'round',

  borderColor: 'rgba(0, 0, 0, 1)',
}));

var midata = {
  labels: [
    '8:00', '9:00', '10:00', '11:00', '12:00', '13:00',
    '14:00', '15:00', '16:00', '17:00', '18:00', '19:00',
  ],
  datasets: datasets,
};

var misoptions = {
  scales: {
    y: {
      min: 0,
      max: 80000,
      ticks: {
        stepSize: 20000,
        callback: function (value, index, values) {
          return value / 1000 + 'k';
        },
      },
    },
    x: {
      ticks: {
        color: '#000',
      },
    },
  },
  plugins: {
    legend: {
      display: true,
      labels: {
        usePointStyle: true,
        filter: function (legendItem, chartData) {
          return legendItem.datasetIndex < 7;
        },
      },
    },
  },
  elements: {
    line: {
      tension: 0,
    },
  },
  plugins: {
    filler: {
      propagate: true,
    },
  },
  layout: {
    padding: 20,
  },
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    title: {
      display: true,
      text: 'Gráfico de Líneas',
      font: {
        size: 20,
      },
    },
    legend: {
      display: true,
      position: 'bottom',
      labels: {
        usePointStyle: true,
        font: {
          size: 12,
        },
      },
    },
  },
  responsive: true,
  maintainAspectRatio: false, // Set this to false to make the chart responsive
  aspectRatio: 1.5,
};

const getRandomData = () => {
  const newData = datasets.map(dataset => (
    dataset.data.map((value, i) => i === 0 ? 0 : Math.floor(Math.random() * 80001))
  ));
  return newData;
};

export default function Lines() {
  const [randomData, setRandomData] = useState(getRandomData());

  useEffect(() => {
    setRandomData(getRandomData());
  }, []);

  midata.datasets = datasets.map((dataset, index) => ({
    ...dataset,
    data: randomData[index],
    borderWidth: 2,
  }));

  return <Line data={midata} options={misoptions} />;
}
