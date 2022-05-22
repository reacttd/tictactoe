import React from 'react';

function TwoColForm() {
    return (
      <div className='form-div' style={styles.container}>
          <div className='div-1' style={styles.div1}>
              <form>
                  <div className='div-1a' style={styles.div1a}>
                      <div className='block' style={styles.block}>
                          <br></br>

                          <div className='block' style={styles.block}>
                              <label>Sign Up!</label>
                              <input type="text" />

                                <div className='block' style={styles.block}>
                                  <label>Description:</label>
                                      <input type="text" />
                                  
                                </div>
                            </div>
                        <div className='div-1b' style={styles.div1b}>

                        <div class="block">
                            <label>NE Type</label>
                            <input type="text" />
                        </div>

                        <div class="block">
                            <label>Card Name</label>
                            <input type="text" />
                        </div>
                        <div class="block">
                            <label>Card Name</label>
                            <input type="text" />
                        </div>
                        </div>
                        </div>
                    </div>
                </form>

            <div style={styles.btnbar}>
                {/* <table>
                <tr>
                    <td className="center">
                        className="ptab"
                
                    <td className="align-center">
                        <input 
                            type="button" 
                            class="rtmplscriptv_addupd_b" 
                            value="Update" 
                            onClick="rtmplscriptv\_addupd()" 
                        />
                    </td>
                </tr>
                    <td className="align-center">
                        <input 
                            type="button" 
                            class="rtmplscriptv_refresh_b" 
                            value="Update" 
                            onClick="rtmplscriptv\_addupd()" 
                        />
                    </td>
                </div>
  </table> */}

                        </div> 
                      </div>
                  </div>
            //   </form>


    )
  }
  
  export default TwoColForm;