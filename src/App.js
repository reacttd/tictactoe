
import { Routes, Route } from 'react-router-dom';
import HeaderDash from './components/HeaderDash';
import Dashboard from './pages/Dashboard';
import Views from './pages/Views';
import Followers from './pages/Followers';
import Likes from './pages/Likes';
import MyAds from './components/MyAds'
// import Reposts from './pages/Reposts';
import Settings from './pages/Settings';
import NavDash from './components/NavDash';
import Concert from './images/concert.jpg';
// import Yeat from './images/Yeat.png';
// import Yeatpreset from './images/yeatpreset.png';
import Form from './pages/Form';
import SecondaryForm from './pages/SecondaryForm';
// import PostForm from './components/PostForm';
// import { ArtistArticle } from './components/ArtistArticle';



function App() {
  return (
    <div>
      <HeaderDash pgTitle="tsbam" style={styles.H1} placeholder="Search..." />
        <section style={styles.container}>
          <NavDash />
          <main style={styles.main}>
          {/* <Reposts /> */}
          {/* <ArtistArticle /> */}
          {/* <PostForm /> */}
        
          {/* <PostForm
            getInputname={this.getInputname}
            getInputdescr={this.getInputdescr}
            getInput={this.getInput}
            addItem={this.addItem}
            btnText="Post" />
            {item} */}
            <Routes>
              <Route exact path="/" element={<Dashboard />} />
              <Route path="/Dashboard" element={<Dashboard />} />
              <Route path="/Followers" element={<Followers />} />
              <Route path="/Likes" element={<Likes />} />
              {/* <Route path="/Reposts" element={<Reposts />} /> */}
              <Route path="/Settings" element={<Settings />} />
              <Route path="/Views" element={<Views />} />
              <Route path="/Form" element={<Form />} />
              <Route path="/SecondaryForm" element={<SecondaryForm />} />
            </Routes>
          </main>
          <aside style={styles.adscontainer}>
              <MyAds title="Trapstar Bam" info="Live at the Orange Peel" img={Concert} alt="Trapstar Bam concert ad" />
              {/* <MyAds title="Yeat Concert" info="Get Tickets Online" img={Yeat} alt="Yeat concert ad" /> */}
              {/* <MyAds title="Yeat Preset" info="Vocal Mix" img={Yeatpreset} alt="Yeat preset cover" /> */}
            </aside>
        </section>
    </div>
  );
}

export default App;

const styles = {
  container:{
    display:'flex',
    flexDirection:'row',
    height:'100vh',
    background:'black',
    color: '#E0AFFD',
    // color: 'white',
    overflow:'hidden',

  },
  main:{
    display:'flex',
    flex: 3,
    flexDirection: 'column',
    alignContent:'center',
    // overflow:'scroll',
    margin:'0%',
    padding: '2%',
    width: '100%'
  }
}

// import { Inline } from './components/Inline';
// import { useState, useEffect } from 'react';
// import './appStyles.css';
// import styles from './appStyles.module.css';
// import Post
// import { PostList } from './components/PostList';
// import { Form } from './components/Form';
// import { ClickHandler } from './components/ClickHandler';
// import { ParentComponent } from './components/ParentComponent';
// import { UserGreeting } from './components/UserGreeting';
// import { NameList } from "./components/NameList";
// import { Message } from './components/Message';
// import './App.css';
// import './appStyles.css';
// import styles from './appStyles.module.css';

// import {Stylesheet} from './components/Stylesheet';




// import React, { Component } from 'react';
// import MyHeader from '../MyHeader';
// import Nav from '../components/Nav';
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


// function App() {
//   return (
//     <div className='App'>



      

//     </div>
//   )
// }



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
// export default App;

// const styles = {
//   pgTitle: {
//     color: '#E0AFFD' 
//   },

//   postcontainer:{
//     display:'flex',
//     flexDirection:'row',
//     justifyContent:'space-between',
//     height:'100%',
//     background:'whitesmoke',
//     color:'#e0affd',

//   },
//   button:{
//     display:'flex',
//     flexDirection:'row',
//     marginLeft:'1%',
//     padding:'5px'

//   },
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
//     margin:'2%',
//     padding: '2%',
//     width:'40%',
//   },
//   MyAvatar:{
//     width:'50px',
//     padding:'2%'
//     height:'50px',
//     borderRadius:'50%',
//   },
//     adscontainer:{
//       display:'flex',
//       flexDirection:'column',
//       width:'25%',
//       fontSize:'12px',
//       font:'bold',
//       backgroundColor: 'black',
//       padding: '2%'
//   },
//   items: {
//     overflow:'scroll',
//     width:'100%'
//     display: 'flex',
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//   }
// }