import React from "react";
import BarChart from "../charts/BarCharts";

const ChartBar = ({chartBar}) => {
    return (
        <article key={chartBar.id} style={styles.card}>
            <h1>{chartBar.chartHeader}</h1>
            <BarChart />
        </article>
    )
};
export default ChartBar;

const styles = {
    card: {
        boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
        transition: '0.3s',
        minHeight: '100%',
        backgroundColor: 'lightgrey',
        margin: '1rem',
        padding: '1rem',
        width: '50%'
    }
}