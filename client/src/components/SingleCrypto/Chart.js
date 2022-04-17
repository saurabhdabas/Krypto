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
  const { id, day_id } = useParams();
  console.log("day_id:",day_id);
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
          console.log("crypto:",chartData)
          let date = new Date(crypto[0]);
          let time = date.toLocaleDateString();
          return day === 1 ? time : date.toLocaleDateString()
    }),
    datasets: [
      {
        data: chartData.map((crypto) => crypto[1]),
        label: `${id.toUpperCase()} ( Past ${day} Days ) in CAD`,
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)'
      },
    ]
  }
  const options={
    elements: {
      point: {
        radius: 2
      },
      responsive:true
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


