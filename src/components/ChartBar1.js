
import React from 'react';
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
import faker from 'faker';
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);


const labels = ['Goku', 'Simplify', '10 Below', 'Rockstar Life', 'Crossroad']

const data = {
  labels,
  datasets: [
    {
      label: 'Views',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: 'rgba(225, 175, 253, 1)',
    },
    {
      label: 'Likes',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
    {
      label: 'Followers',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: 'rgba(123, 20, 172, 0.8)',
    },
    {
      label: 'Reposts',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: 'rgba(61, 172, 169, 0.8)',
    },
  ],
  borderWidth: 1
};

const ChartBar1 = ({chartBar1}) => {
    return (
        <div key={chartBar1.id} style={styles.card}>
          <h1>{chartBar1.chartHeader}</h1>
            <Bar data={data} />
        </div>
    )
};
export default ChartBar1;

const styles = {
    card: {
        display:'flex',
        flexDirection: 'column',
        // justifyContent: 'space-evenly',
        // alignItems: 'center',
        boxShadow: '0 6px 4px 0 rgba(225, 175, 253, 1.0), 0 3px 10px 0 rgba(0, 0, 0, 0.19)',
        transition: '0.3s',
        minHeight: '100%',
        // width: '950px',
        width: '100%',
        backgroundColor: 'whitesmoke',
        color: 'rgba(225, 175, 253, 1)',
        // marginRight: '4rem',
        padding: '1rem',
        // marginTop: '1rem',
        borderRadius: '2%',
        // height: '500px'
        marginBottom: '2%',
    }
}