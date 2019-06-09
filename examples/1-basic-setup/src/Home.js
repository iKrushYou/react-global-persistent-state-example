import React from "react";

const styles = {
  infoPanel: { borderStyle: "solid", padding: 8 },
  resetButton: { width: 64, height: 32, marginTop: 8, float: "right" }
};

const Home = () => {
  return (
    <React.Fragment>
      <h1>Home Page</h1>
      <Info info={{}} />
    </React.Fragment>
  );
};

const Info = ({ info }) => (
  <div style={styles.infoPanel}>
    <p>Name: {info.name}</p>
    <p>Age: {info.age}</p>
    <p>Email: {info.email}</p>
  </div>
);

export default Home;
