import React, {useState} from "react";
import DesktopBreakpoint from "../components/responsive_utilities/desktop_breakpoint";
// import PhoneBreakpoint from "../components/responsive_utilities/phone_breakpoint";
// import TabletBreakpoint from "../components/responsive_utilities/tablet_breakpoint";
import ChartBar1 from "../components/ChartBar1";
import ChartBar from '../components/ChartBar';
// import DesktopBreakpoint from "../components/responsive_utilities/desktop_breakpoint";

function Dashboard() {    
    const [pageTitle] = ['Dashboard'];
    const [chartBar1] = useState([
    {chartHeader: 'Song Stat Overview'},
    // {chartHeader: 'Song Stat Overview'},
    ]);

    const [chartBar] = useState([
        {chartHeader: 'Most Viewed Songs'},
        {chartHeader: 'Most Liked Song'}
    ]);
// const [chartMed] = useState([
    //     {chartHeader: 'Song Stat Overview'},
    //     {chartsubHeader: 'What do you think?'}
    // ]);

    return (
    <div>
        {/* <DesktopBreakpoint> */}
        {/* <TabletBreakpoint> */}
    <h1 style={styles.myh1}>{pageTitle}</h1>
        <section style = {styles.container}>
            
            
            
            <div style={styles.header}>
                
                <div style={styles.row}>
                        {/* <TabletBreakpoint> */}
                    {/* <DesktopBreakpoint> */}
                    {/* <PhoneBreakpoint> */}
                    {chartBar1.map((chartBar1, id) => (
                        <ChartBar1
                        key={id}
                        id={id}
                        chartBar1={chartBar1} 
                        />    
                    ))}
                    {/* </PhoneBreakpoint> */}
                    {/* </DesktopBreakpoint> */}
                    {/* </TabletBreakpoint> */}
                </div> 
                <div style={styles.chartBar}>
                    <DesktopBreakpoint>
                    {/* <TabletBreakpoint> */}
                    {chartBar.map((chartBar, id) => (
                        <ChartBar
                        key={id}
                        id={id}
                        chartBar={chartBar}
                        />
                    ))}
                    </DesktopBreakpoint>
                    {/* </TabletBreakpoint> */}
                </div>
            </div> 
        </section>
        </div>
    );
}
export default Dashboard;

const styles={
    container:{
        backgroundColor: 'none',
        color: '#e1affd',
        display:'flex',
        flexDirection:'column',
        // width: '300px',
        // height: '300px',
        margin: '2%',
        // paddingLeft:'2%',
        alignItems: 'center',
        justifyContent: 'center'

    },
    col:{
        display:'flex',
        flexDirection: 'column'
    },
    row:{
        display:'flex',
        flexDirection:'row',
        // width: '100%',
        // justifyContent: 'space-between',
        // alignText:'center',
        // height: '400px'
    },
    main:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    header:{
        fontSize: '2rem',
        textAlign:'center'
        // display: 'flex',
        // flexDirection: 'row',
        // backgroundColor: ''
        // alignItems: 'flex-start',
        // justifyContent: 'space-between',
    },
    myh1:{  
        fontSize: '2rem',     
        display:'flex',
        flexDirection:'column',
        alignText:'flex-start'
        // fontSize: '5rem'
    },
    chartBar:{
        display: 'flex',
        justifyContent: 'space-around',
        width: '100%'
        // flexDirection: 'row',

    }
};