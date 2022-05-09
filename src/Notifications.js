// import React, { Component } from 'react';
// import MyHeader from '../components/MyHeader';
// import MyNav from '../components/MyNav';
// import MyAds from '../components/MyAds';
// import PostForm from '../components/PostForm';
// // import AvatarIcon from './images/tsbam.png';
// // import MyFormPost from './components/MyFormPost'
// import Concert from './images/concert.jpg';
// import Yeat from './images/Yeat.png';
// import Yeatpreset from './images/yeatpreset.png'
// // import MyFormPost from './components/MyFormPost';
// import TrapstarM from './images/tsbamMamba.png';
// import Simplify from './images/simplify.png';
// import Call from './images/call.png';
// import ArtistArticle from '../components/ArtistArticle';

// class Notifications extends Component{

//   state={
//     // 1.Create an array in the state to store the list items
//     aList: [
//       {
//       aName: 'Rockstar Life',
//       aDescr: 'Trapstar Bam (feat CD Mumba)',
//       aImg: TrapstarM,
//       aAlt:'Trapstar Bam and CD Mumba candid pic',
//     },
//       {
//       aName: 'Simplify',
//       aDescr: 'Trapstar Bam (new album cover)',
//       aImg: Simplify,
//       aAlt:'Trapstar Bam in a television photo',
//       avatarIcon:'./images/tsbamMamba.png'
//     },
//       {
//       aName: 'Call Me Back',
//       aDescr: 'Trapstar Bam (Butterflies Album)',
//       aImg: Call,
//       aAlt:'Trapstar Bam sitting on a wall'
//     }],
//     color: '#E0AFFD' 
//   }

//   componentDidMount() {
//     console.log('componesdidmount() lifecycle');
//     setTimeout(() => {
//       this.setState({ color: '#E0AFFD' });
//     },5000);
//   }
//   getInputname = e => {
//     // e.preventDefault();
//     this.setState({ aName: e.target.value })
//   }
//   getInputdescr = e => {
//     // e.preventDefault();
//     this.setState({ aDescr: e.target.value })
//   }
//   getInput = e => {
//     // e.preventDefault();
//     this.setState({ aImg: e.target.value })
//   }
//   addItem = e => {
//     e.preventDefault()
//       this.setState({
//         aList: [...this.state.aList,{ key: this.state.key, aName:this.state.aName, aDescr:this.state.aDescr}]
//       });
//       // Clear Form
//       e.target.reset()
//     }
//     removeItem = id => {
//       console.log("Button Clicked")
//       const newaList = this.state.aList.filter((list,aList) => aList !== id);
//       this.setState({ aList: newaList })
//       console.log(newaList)
//       console.log("clicked")
//       console.log(id)
//     }
//  // Stop working here
//   render() {
//     let item = this.state.aList.map((element, i) => {
//       return <ArtistArticle 
//       key={i}
//       val={element}  
//       delME={() => this.removeItem(i)} />
//     })
//       return (      
//         <div>
//           <MyHeader pgTitle="tsbam" style={styles.H1} placeholder="Search..." />
//           <section style={styles.container}>
//             <MyNav />
//             <main style={styles.main}>
//               <PostForm
//                 getInputname={this.getInputname}
//                 getInputdescr={this.getInputdescr}
//                 getInput={this.getInput}
//                 addItem={this.addItem}
//                 btnText="Post" />
//               {/* <div style={styles.items}> */}
//                 {item}
//               {/* </div> */}
//             </main>
//             <aside style={styles.adscontainer}>
//               <MyAds title="Trapstar Bam" info="Live at the Orange Peel" img={Concert} alt="Trapstar Bam concert ad" />
//               <MyAds title="Yeat Concert" info="Get Tickets Online" img={Yeat} alt="Yeat concert ad" />
//               <MyAds title="Yeat Preset" info="Vocal Mix" img={Yeatpreset} alt="Yeat preset cover" />
//             </aside>
//           </section>
//         </div>
//       )
//     }
//   }
// export default Notifications;

// const styles = {
//   pgTitle: {
//     color: '#E0AFFD' 
//   },

//   // postcontainer:{
//   //   display:'flex',
//   //   flexDirection:'row',
//   //   justifyContent:'space-between',
//   //   height:'100%',
//   //   background:'whitesmoke',
//   //   color:'#e0affd',

//   // },
//   // button:{
//   //   display:'flex',
//   //   flexDirection:'row',
//   //   marginLeft:'1%',
//   //   padding:'5px'

//   // },
//   container:{
//     display:'flex',
//     flexDirection:'row',
//     justifyContent: 'space-between',
//     height:'100vh',
//     background:'whitesmoke',
//     color: '#E0AFFD',
//     overflow:'hidden'
//   },
//   main:{
//     display:'flex',
//     flex: 2,
//     flexDirection: 'column',
//     alignItems:'center',
//     overflow:'scroll'
//     // margin:'2%',
//     // padding: '2%',
//     // width:'40%',
//   },
//   MyAvatar:{
//     width:'50px',
//     padding:'2%'
//     // height:'50px',
//     // borderRadius:'50%',
//   },
//     // adscontainer:{
//     //   display:'flex',
//     //   flexDirection:'column',
//     //   width:'25%',
//     //   fontSize:'12px',
//     //   font:'bold',
//     //   backgroundColor: 'black',
//     //   padding: '2%'
//   // },
//   items: {
//     overflow:'scroll',
//     width:'100%'
//     // display: 'flex',
//     // flexDirection: 'row',
//     // alignItems: 'center',
//     // justifyContent: 'center',
//   }
// }
// // import { Routes, Route } from 'react-router-dom';
// // import HeaderDash from './components/HeaderDash';
// // import Dashboard from './pages/Dashboard';
// // import Views from './pages/Views';
// // import Followers from './pages/Followers';
// // import Likes from './pages/Likes';
// // import Notifications from './pages/Notifications';
// // import Reposts from './pages/Reposts';
// // import Settings from './pages/Settings';
// // import MyHeader from './components/MyHeader';
// // import Nav from './components/Nav';
// // import React from "react";
// // function App() {
// //   return (
// //     <div>
// //       <MyHeader pageTitle="tsbam" style={styles.H1} placeholder="Search..."/>
// //       <section style={styles.container}>
// //         <Nav />
// //         <main style={styles.main}>       
// //           <Routes>
// //             <Route path="/" element={<Dashboard />} />
// //             <Route path="dashboard" element={<Dashboard />} />
// //             <Route path="views" element={<Views />} />
// //             <Route path="likes" element={<Likes />} />
// //             <Route path="followers" element={<Followers />} />
// //             <Route path="reposts" element={<Reposts />} />
// //             <Route path="settings" element={<Settings />} />
// //           </Routes>
// //           </main>
// //         </section>
// //       </div>
// //     );
// //   }

// //  export default App;

// //  const styles = {
// //   container:{
// //     display:'flex',
// //     flexDirection:'row',
// //     justifyContent: 'space-between',
// //     height:'100vh',
// //     background:'whitesmoke',
// //     color: '#E0AFFD',
// //     overflow:'hidden'
// //   },
// //   main:{
// //     display:'flex',
// //     flex: 2,
// //     flexDirection: 'column',
// //     alignItems:'center',
// //     overflow:'scroll',
// //     margin:'2%',
// //     padding: '2%',
// //     width:'40%',
// //   }
// // }

//     // return (
//     //     <div className="App">
//     //         <div style={{width: 700}}>
//     //             <BarChart chartData={userData} />
//     //         </div>
//     //     </div>
//     // );
    

// // ADD IMAGES
// // import AvatarIcon from '../src/images/tsbam.png';
// // import MyAvatar from '../src/components/MyAvatar';

// // REACT ICONS

// // import Header from "./components/Header";
// // import HuntingForm from './components/HuntingForm';
// // import HuntingArticle from "./components/HuntingArticle";
// // import Slingshot from '../src/img/Slingshot.jpg';
// // import BowArrow from '../src/img/BowArrow.jpg';
// // import Blowgun from '../src/img/Blowgun.jpg';

// // class App extends Component{
// //   state={
// //     hList:[{
// //       hSkill:'Slingshot',
// //       hDescr:'Kill prey with rock',
// //       hImg: Slingshot,
// //       hAlt:'slingshot'
// //     },
// //     {
// //       hSkill:'BowArrow',
// //       hDescr:'Kill prey with bow and arrow',
// //       hImg: BowArrow,
// //       hAlt:'bow and arrow'
// //     },
// //     {
// //       hSkill:'Blowgun',
// //       hDescr:'Kill prey with blow gun',
// //       hImg: Blowgun,
// //       hAlt:'blow gun'
// //     }]
// //   }

// //   getIput=e=>{
// //     this.setState({hSkill: e.target.value})
// //   }
// //   // Use Spread operator instead
// //   addItem=e=>{
// //     e.preventDefault()
// //       this.setState({
// //         hList: [...this.state.hList,{hSkill:this.state.hSkill}]
// //       });
// //       // Clear Form
// //       e.target.reset()
// //   }

// //   render(){
// //     let huntingList=this.state.hList.map((element, i)=>{
// //       return <HuntingArticle key={i} val={element} />
// //     })
// //     return(
// //       <div style={styles.container}>
// //         <Header pgTitle='GW Hunting Skills' />
// //         <main style={styles.main}>
// //           <div style={styles.form}>
// //             <HuntingForm
// //             getIput={this.getInput}
// //             addItem={this.addItem}
// //             btn="Add Hunting Item" />
// //           </div>
// //           <div style={styles.list}>
// //             {huntingList}
// //           </div>
// //         </main>
// //       </div>
// //     )
// //   }
// // }
// // export default App

// // const styles={
// //   container:{
// //     display:'flex',
// //     flexDirection:'column',
// //   },
// //   list: {
// //     display:'flex',
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //     justifyContent: 'center',
// //     // testing 
// //   }
// // }