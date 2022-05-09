import React from "react";

const RepostsList = ({ myReposts, id, removeReposts }) => {
  return (
    <li key={myReposts.id} style={styles.list}>
      <span>{myReposts.aName}</span>
      <span>{myReposts.aDescr}</span>
      <span>{myReposts.aImg}</span>
      <span>{myReposts.aAlt}</span>
      <button onClick={() => removeReposts(id)}>x</button>
    </li>
  );
};

export default RepostsList;

const styles = {
  list: {
    display: "flex",
    flexDirection: "column",
    width: "150px",
    padding: "1%",
    backgroundColor: "black",
    color: "rgb(163,173,194)",
    justifyContent: "space-between",
    borderRadius: "5px",
    boxShadow:
      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    textAlign: "center",
    margin: "2%"
  },
  buttons: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    margin: "2%",
    color: "aqua"
    // color:'black'
  }
};