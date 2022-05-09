
import React from "react";
import { PieChart, Pie } from 'recharts';

// const [pageTitle] = ['Reposts'];

const data01 = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
];
const data02 = [
  { name: 'A1', value: 100 },
  { name: 'A2', value: 300 },
  { name: 'B1', value: 100 },
  { name: 'B2', value: 80 },
  { name: 'B3', value: 40 },
  { name: 'B4', value: 30 },
  { name: 'B5', value: 50 },
  { name: 'C1', value: 100 },
  { name: 'C2', value: 200 },
  { name: 'D1', value: 150 },
  { name: 'D2', value: 50 },
];


const ChartBar = ({chartBar}) => {
  return (
    <div key={chartBar.id} style={styles.card}>
      <h1>{chartBar.chartHeader}</h1>
      <PieChart width={400} height={400}>
          <Pie data={data01} dataKey="value" cx="50%" cy="50%" outerRadius={60} fill="#8884d8" margin="5px" />
          <Pie data={data02} dataKey="value" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d" label />
        </PieChart>
    </div>
  )
};
export default ChartBar;

const styles = {
    card:{
      background: 'whitesmoke',
      width: '30%',
      display: 'flex',
      flexDirection: 'column',
      // float: 'left',
      alignContent: 'space-between',
      padding: '1rem',
      paddingBottom: '1rem',
      padding: '8rem',
      // justifyContent:'center',
      marginTop: '10%',
      marginBottom: '2100px',
      margin:'2%',
      marginRight:'2%',
      // marginLeft:'2%',
      borderRadius: '2%',
      fontSize: '1.5rem',
      fontWeight: 'bold',
      alignText: 'ceenter',
      // height:'',
      boxShadow: '0 6px 4px 0 rgba(225, 175, 253, 1.0), 0 3px 10px 0 rgba(0, 0, 0, 0.19)',
      overflow:'hidden',
      // overflow:'scroll'
    },
    title: {
      // marginLeft: '5rem',
      // textAlign: 'center',
    },
    chartHeader: {
      // textAlign: 'center',
      // fontSize: '5rem',
      // display: 'flex',
      // flexDirection: 'column-reverse',
      // justifyContent: 'center',
      // alignItems: 'column-reverse',
    }
}