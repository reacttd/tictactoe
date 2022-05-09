import React, { useState } from "react";
// import ButtonCard from "../buttons/ButtonCard";
// import ButtonStandard from "../ButtonStandard";
// import MyBtn from './buttons/MyBtn'

export const RepostsForm = () => {
  const [aList, setaList] = useState("");



  const validateForm = (e) => {
    e.preventDefault();
    if (!aList) return;
    addaList(aList);
    setaList("");
  };
  return (
    <form onSubmit={validateForm} style={styles.repostsForm}>
      <p>Add Reposts:</p>

      aList: [
      

  


      {/* <MyAvatar AvatarIcon={AvatarIcon} avatarAlt="avatar" name="tsbam" /> */}
      {/* 
      <img style={styles.avatar} src={props.avatar} alt="alt avatar" />
      <div style={styles.inputContainer}> */}
      <input
        type="text"
        style={styles.input}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <input
        name="aDescr"
        value={props.aDescr}
        onChange={props.getInputdescr}
        style={styles.input}
        placeholder="Description"
      />
      <input
        // name="aImg"
        value={props.aImg}
        onChange={props.getInput}
        style={styles.input}
        placeholder="Image Upload"
      />
      <ButtonCard buttonCard="Add Post" />

      <ButtonStandard {...props} />
    </form>
  );
}
export default RepostsForm;

const styles = {
  myForm: {
    display: "flex",
    flexDirection: "column",
    // alignContent:'center',
    justifyContent: "space-between",
    // marginRight:'5%',
    marginTop: "0px",
    width: "400px",
    paddingTop: "2%",
    paddingBottom: "2%",
    paddingRight: "10%",
    paddingLeft: "10%",
    backgroundColor: "black",
    color: "rgb(163,173,194)",
    fontSize: "16px",
    borderRadius: "5px",
    boxShadow: "1px 6px 1px 1px rgba(0, 0, 255, .1)"
  },
  MyAvatar: {
    display: "flex",
    flexDirection: "row",
    width: "75px",
    height: "75px",
    borderRadius: "50%",
    marginBottom: "1rem"
  },
  inputContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    marginLeft: "%",
    marginBottom: "3%"
  },
  input: {
    padding: "1%",
    margin: "1%"
  }
};