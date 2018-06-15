import React, { Component } from "react";

class NewUser extends Component {
  state = {

  };

  styles = {
    form: {
      width: "500px",
      height: "200px",
      display: 'inline-block'
    },
    body: {
        textAlign: "center"
    },
    text: {
        textAlign: "left"
    }
    
  };

  render() {
    return (
      <div style={this.styles.body}>
        
       
                <form style={this.styles.form}>
                    <div style={this.styles.text} class="form-group">
                        <label for="exampleInputEmail1">Name</label>
                        <input className="form-control" aria-describedby="emailHelp" placeholder="Name"></input>
                    </div>
                    <div style={this.styles.text} class="form-group">
                        <label for="exampleInputEmail1">Destination</label>
                        <input className="form-control" aria-describedby="emailHelp" placeholder="Where are you going?"></input>
                    </div>
                    <div style={this.styles.text} class="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" aria-describedby="emailHelp" placeholder="Enter email"></input>
                        <small className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div style={this.styles.text} className="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control" placeholder="Password"></input>
                    </div>
                    <button type="submit" className="btn btn-dark">Submit</button>
                </form>
           
            

      </div>
    );
  }
}

export default NewUser;