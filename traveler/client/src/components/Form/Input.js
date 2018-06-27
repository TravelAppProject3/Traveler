import React from "react";

export const Input = props => (
  <div className="form-group">
    <label>City</label>
    <input className="form-control" {...props} />
    <label>Arrival</label>
    <input className="form-control" {...props} />
    <label>Departure</label>
    <input className="form-control" {...props} />
  </div>
);
