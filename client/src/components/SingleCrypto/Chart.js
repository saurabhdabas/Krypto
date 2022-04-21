import {React, useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { 
  Chart as 
  ChartJS,  
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
  } from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Charts = () => {
  const { id } = useParams();

  const [chartData, setChartData] = useState([]);

  const [day, setDay] = useState(1);

  useEffect(() => {
    axios.get(`/chart/${id}/days/${day}`) 
      .then((res) => { 
        setChartData(res.data.prices)
        }
      )
      .catch((err)=>console.log(err));
  },[id, day]);

  const dayHandler = (day) => {
    setDay(day);
  }

  const data = {
    labels: chartData.map((crypto) => {

          let date = new Date(crypto[0]);
          let time = date.toLocaleDateString();
          return day === 1 ? time : date.toLocaleDateString()
    }),
    datasets: [
      {
        data: chartData.map((crypto) => crypto[1]),
        label: `${id.toUpperCase()} ( Past ${day} Days ) in CAD`,
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ]
  }
  let delayed;
  const options={
    elements: {
      point: {
        radius: 2
      }
    },
    scales: {
      x: {
        ticks: {
          maxTicksLimit: 27
        }
    }
    },
    responsive:true,
    animation: {
      onComplete: () => {
        delayed = true;
      },
      delay: (context) => {
        let delay = 0;
        if (context.type === 'data' && context.mode === 'default' && !delayed) {
          delay = context.dataIndex * 5 + context.datasetIndex * 10;
        }
        return delay;
      }
    }
  }
  return (
  <>
    <Line data={data} options = {options}/>
    <button onClick={() => dayHandler(1)}>One Day</button>
    <button onClick={() => dayHandler(7)}>One Week</button>
    <button onClick={() => dayHandler(30)}>One Month</button>
    <button onClick={() => dayHandler(365)}>One Year</button>
  </>
  )
}

export default Charts


