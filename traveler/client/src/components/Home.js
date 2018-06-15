import React, { Component } from "react";

const styles = {
  root: {
    backgroundImage: 'url(https://images.pexels.com/photos/1010657/pexels-photo-1010657.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)',
    backgroundSize: 'cover',
    overflow: 'hidden',
    height: '900px',
    marginTop: "-40px",
    // width: '500px',
    // height: '500px'  
    textAlign: 'center'
  },
  button: {
    marginTop: '30px'
  }
};
// background: ("https://images.pexels.com/photos/1010657/pexels-photo-1010657.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"),


class Home extends Component {
  render() {
    return (
      <div style={styles.root}>
  
        <button style={styles.button} className="btn btn-dark">Button</button>
      </div>
      
    );
  }
}

export default Home;
