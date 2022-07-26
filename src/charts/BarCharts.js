import { Bar } from 'react-chartjs-2';
import faker from 'faker';
import PhoneBreakpoint from '../components/responsive_utilities/phone_breakpoint';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
// import PhoneBreakpoint from '../components/responsive_utilities/phone_breakpoint';
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
const labels = ['Goku', '10 Below', 'Rockstar Life', 'Simplify', 'Crossroad'];
function BarCharts() {
  const data = {
    labels,
    datasets: [
      {
        label: 'Views',
        data: labels.map(() => faker.datatype.number({ min: 0, max: 1000000 })),
        backgroundColor: 'rgba(50, 0, 98, 0.79)',
      },
      {
        label: 'Likes',
        data: labels.map(() => faker.datatype.number({ min: 0, max: 1000000 })),
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
      {
        label: 'Followers',
        data: labels.map(() => faker.datatype.number({ min: 0, max: 1000000 })),
        backgroundColor: 'rgba(6, 170, 161, 0.79)',
      },
      {
        label: 'Reposts',
        data: labels.map(() => faker.datatype.number({ min: 0, max: 1000000 })),
        backgroundColor: 'rgba(225, 175, 253, 1)'
      },
    ]
    
  };
  const BarCharts= () => {
  return (
    <PhoneBreakpoint>
        <BarCharts width={700} height={50} data={data}> 
            <Bar />
        </BarCharts>
    </PhoneBreakpoint>
  )
};
}
export default BarCharts;

