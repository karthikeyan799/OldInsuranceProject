import React from "react";
import { Row } from "react-bootstrap";

export default function Barder() {
  return (
    <div
      style={{
        backgroundColor: "darksalmon",
        height: "100px",
        width: "40%",
        textAlign: "center",
        borderRadius: "20px",
        margin: "15%",
      }}>
      Barder
      <div className="d-flex input-group w-auto">
        <input
          type="number"
          placeholder="Search..."
          className="form-control"
          style={{ width: "70%", alignContent: "center",
           marginLeft: "2%" }}
        />
        {/* &nbsp; */}
        <button className="btn btn-success">search</button>
      </div>
    </div>
  );
}
