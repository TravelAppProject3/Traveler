import React from "react";

export const InputTrip = props => (
  <div className="form-group">
    <label>Trip Name</label>
    <input className="form-control" {...props} />
    {/* <label>Arrival</label>
    <input className="form-control" {...props} /> */}
  </div>
);