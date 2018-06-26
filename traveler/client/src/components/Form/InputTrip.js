import React from "react";

export const InputTrip = props => 
  <div className="form-group">
    {console.log(props)}
    <label>Trip Name</label>
    <input className="form-control" type="text" value={props.value} name={props.name} onChange={props.onChange} />
    {/* <label>Arrival</label>
    <input className="form-control" {...props} /> */}
  </div>