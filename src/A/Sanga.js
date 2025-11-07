import React, { Component } from "react";

export default class Sanga extends Component {
  render() {
    return (
      <div style={{ height: "100%" }}>
        <div
          style={{
            backgroundColor: "darkgreen",
            textAlign: "center",
            height: "10vh",
            color: "yellowgreen",
          }}
        >
          head
        </div>
        <div style={{ backgroundColor: "skyblue", height: "80vh" }}>
          Middle
          <div className="card-body px-4 py-4">
          <div className="row">
            <div className="col">
              <label>username:</label>
              <input type="text" />
            </div>
          </div>
          <div>
            <label className="form-table">username:</label>
            <input type={"text"} className="form-control" placeholder="text" />
          </div>
          <div className="row">
            {" "}
            <div className="col">
              <div className="mb-3">
                <label htmlFor="CustomerAge" className="form-table">
                  CustomerAge
                </label>
                <input
                  type={"number"}
                  className="form-control"
                  placeholder="Enter your name"
                  name="customerAge"
                  //   value={customers.customerAge}
                  //   onChange={(e) => onInputChange(e)}
                />
              </div>
            </div>
            <div className="col mb-3">
              {/* <div className="mb-3"> */}
                <label htmlFor="CustomerAge" className="form-table">
                  CustomerAge
                </label>
                <input
                  type={"number"}
                  className="form-control"
                  placeholder="Enter your name"
                  name="customerAge"
                  //   value={customers.customerAge}
                  //   onChange={(e) => onInputChange(e)}
                />
              {/* </div> */}
            </div>
            <div className="col mb-3">
              {/* <div className="mb-3"> */}
                <label htmlFor="CustomerAge" className="form-table">
                  CustomerAge
                </label>
                <input
                  type={"number"}
                  className="form-control"
                  placeholder="Enter your name"
                  name="customerAge"
                  //   value={customers.customerAge}
                  //   onChange={(e) => onInputChange(e)}
                />
              {/* </div> */}
            </div>
          </div>
          <div></div>
          <div></div>
        </div>
        </div>
        <div
          style={{
            backgroundColor: "blueviolet",
            textAlign: "center",
            height: "10vh",
          }}
        >
          Footer
        </div>
      </div>
    );
  }
}
