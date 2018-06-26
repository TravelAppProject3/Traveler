import React, { Component } from "react";
import { Link } from "react-router-dom"; 
import {OverlayTrigger, Popover} from "react-bootstrap";
import { Input, TextArea, FormBtn } from "../Form";

const styles = {
  p: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: "35px",
    color: "white",
    background: "black",
    borderRadius: "5px",
    padding: "15px",
    boxShadow: "1px 3px 8px 1px #888888"
  },
  profileBtn: {
    border: "2px solid white",
    color: "white",
    background: "black",
    fontSize: "17px",
    borderRadius: "5px",
    paddingRight: "5px",
    paddingLeft: "5px",
    cursor: "pointer",
    float: "right",
    position: "relative",
    // top: "130px",
    right: "50px",
    bottom: "60px"
  }
};

const popoverClick = (
  <Popover id="popover-trigger-click" title="">
    <form>
              <Input
                // value={this.state.title}
                // onChange={this.handleInputChange}
                // name="title"
                // placeholder="Title (required)"
              />
              <FormBtn
                // disabled={!(this.state.author && this.state.title)}
                // onClick={this.handleFormSubmit}
              >
              </FormBtn>
            </form>
  </Popover>
);

const TripHeader = props => {
  return (
    <div>
      <p style={styles.p}>
        {props.name}
      </p>
      <OverlayTrigger trigger="click" placement="left" overlay={popoverClick}>
      

        <a style={styles.profileBtn} data-container="body" data-toggle="popover" data-placement="left" 
                // data-html="true"
                // data-content="
                // <form>
                //   <div className='form-group'>
                //     <label for='exampleInputEmail1'>City Name</label>
                //     <input className='form-control' id='name'  placeholder='Enter Name'></input>
                //   </div>
                //   <div className='form-group'>
                //       <label>Start Date</label>
                //       <input className='form-control' id='date' placeholder='Start Date'></input>
                //   </div>
                //   <button style='opacity: 12; color: white;' type='submit' class='btn btn-dark'>Submit</button>   
                // </form>"
                >
                <span className="fa fa-pencil" /> Add A City
        
        </a>
      </OverlayTrigger>
    </div>
  );
};

export default TripHeader;