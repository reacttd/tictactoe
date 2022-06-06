import React from 'react';
import AvatarIcon from '../images/tsbam.png';
import { RiEditCircleFill } from 'react-icons/ri';

function Views() {
  return (
        <section>
            <div className='row m-0 content-center'>
              <div className="col-md-6 mt-5 mb-5">
                <div className='form-area'>
                  <div className='form-inner'>
                    <form>
                      <h4 className='form-heading mb-4 text-primary text-center'>Sign Up</h4>

                      <div className='row'>
                        <div className='col-lg-12'>
                          <div className='form-group text-center'>
                            <div className='userprofile'>
                              <img src={AvatarIcon} alt="Dashboard" />
                              <div className='profile-btn'>
                                <div>{<RiEditCircleFill />}</div>
                                <input type="file"
                                name="userImage" 
                                className="emoji" 
                               />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group">
                            <label className='d-block'>First Name</label>
                            <input 
                              type="text" 
                              name="firstname" 
                              className='form-control' 
                            />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group">
                            <label className='d-block'>Last Name</label>
                            <input 
                              type="text" 
                              name="lastname" 
                              className='form-control' 
                            />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group">
                            <label className='d-block'>Email</label>
                            <input 
                              type="email" 
                              name="email" 
                              className='form-control' 
                            />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group">
                            <label className='d-block'>Password</label>
                            <input 
                              type="password" 
                              name="password" 
                              className='form-control' 
                            />
                          </div>
                        </div>  
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
      </section>
  )
}
export default Views;

// const styles = {
//   Repost: {
//     display: 'flex',
//     flexDirection:'row',
    
//    //  justifyContent:'space-around',
//     alignItems:'center',
//     width:'40%',
//     margin: '1%',
//     padding: '2%',
//     background:'whitesmoke',
//     color:'black',
//     borderRadius:'2%',
//     borderColor: '2px solid pink'
// },
// inputContainer: {
//    // display:'flex',
//    display:'inline-block',
//    // flexDirection:'row',
//    // borderRadius:'10rem',
//    alignItems:'center',
//    margin:'2%',
//    borderColor: '2px solid pink'
// },
// label:{
//    display: 'block',
//    // border: '1px solid #ccc',
//    boxSizing: 'border-box',
//    // display:'flex',
//    // flexDirection:'row',
//    marginBottom:'1%',
//    marginTop:'2%',
//    fontSize:'26px'
//    // float:'left'
//    // justifyContent:'center',
//    // alignItems:'flex-start',
//    // alignContent:'flex-end'
// },
// input: {
//    //  padding:'2%',
//    //  margin: '1%',
//     borderRadius:'10%',
//     borderColor: '2px solid pink',         
//    //  width: '25%',
//    padding: '12px 20px',
//    margin: '8px 0',
//    marginBottom:'1rem',
//    display: 'inline-block',
//    border: '1px solid #ccc',
//    boxSizing: 'border-box',
// },
//   myAvatar:{
//     width:'100px',
//     height:'100px',
//     borderRadius:'50%'
//   },
// }