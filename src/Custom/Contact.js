import React, { Component } from "react";

export default class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      password: "",
      phone: "",
      gender: "",
      dob: "",
      city: "",
      about: "",
      nameError: "",
      emailError: "",
      passwordError: "",
      phoneError: "",
      genderError: "",
      dobError: "",
      cityError: "",
      aboutError: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const isValid = this.validateForm();

    if (isValid) {
      const formData = {
        name: this.state.name,
        email: this.state.email,
        password: this.state.password,
        phone: this.state.phone,
        gender: this.state.gender,
        dob: this.state.dob,
        city: this.state.city,
        about: this.state.about,
      };
      console.log(formData);

      // reset state
      this.resetState();
    }
  };

  validateForm = () => {
    let nameError = "";
    let emailError = "";
    let passwordError = "";
    let phoneError = "";
    let genderError = "";
    let dobError = "";
    let cityError = "";
    let aboutError = "";

    if (!this.state.name) {
      nameError = "Enter your name";
    }

    if (!this.state.email) {
      emailError = "Enter your email";
    }

    if (!this.state.password) {
      passwordError = "Enter your password";
    }

    if (!this.state.phone) {
      phoneError = "Enter your phone number";
    }

    if (!this.state.gender) {
      genderError = "Select your gender";
    }

    if (!this.state.dob) {
      dobError = "Enter your date of birth";
    }

    if (!this.state.city) {
      cityError = "Select your city";
    }

    if (!this.state.about) {
      aboutError = "Enter some description about you.";
    }

    if (
      nameError ||
      emailError ||
      passwordError ||
      phoneError ||
      genderError ||
      dobError ||
      cityError ||
      aboutError
    ) {
      this.setState({
        nameError,
        emailError,
        passwordError,
        phoneError,
        genderError,
        dobError,
        cityError,
        aboutError,
      });
      return false;
    }
    return true;
  };

  // resetState = () => {
  //   this.setState({
  //     name: "",
  //     email: "",
  //     password: "",
  //     phone: "",
  //     gender: "",
  //     dob: "",
  //     city: "",
  //     about: "",
  //   });
  // };

  render() {
    return (
      <div className="container">
        <div className="row justify-content-between pt-5">
          <div className="col-xl-6 col-lg-6 col-md-6 col-12 m-auto">
            <form onSubmit={this.handleSubmit}>
              <div className="card shadow">
                <div className="card-header pt-3">
                  <h5 className="card-title">Get in touch with us</h5>
                </div>

                <div className="card-body px-4 py-4">
                  <div className="form-group py-2">
                    <input
                      type="text"
                      onChange={this.handleChange}
                      name="name"
                      placeholder="Name"
                      className={
                        "form-control "
                         +
                        (this.state.nameError ? "is-invalid" : "")
                      }
                      value={this.state.name}
                    />
                    <span className="text-danger">
                      {this.state.nameError ? this.state.nameError : ""}
                    </span>
                  </div>

                  <div className="form-group py-2">
                    <input
                      type="email"
                      onChange={this.handleChange}
                      name="email"
                      placeholder="Email"
                      className={
                        "form-control " +
                        (this.state.emailError ? "is-invalid" : "")
                      }
                      value={this.state.email}
                    />
                    <span className="text-danger">
                      {this.state.emailError ? this.state.emailError : ""}
                    </span>
                  </div>

                  <div className="form-group py-2">
                    <input
                      type="password"
                      onChange={this.handleChange}
                      name="password"
                      placeholder="Password"
                      className={
                        "form-control " +
                        (this.state.passwordError ? "is-invalid" : "")
                      }
                      value={this.state.password}
                    />
                    <span className="text-danger">
                      {this.state.passwordError ? this.state.passwordError : ""}
                    </span>
                  </div>

                  <div className="form-group py-2">
                    <input
                      type="text"
                      onChange={this.handleChange}
                      maxLength="10"
                      name="phone"
                      placeholder="Phone number"
                      className={
                        "form-control " +
                        (this.state.phoneError ? "is-invalid" : "")
                      }
                      value={this.state.phone}
                    />
                    <span className="text-danger">
                      {this.state.phoneError ? this.state.phoneError : ""}
                    </span>
                  </div>

                  <div className="row py-2">
                    <div
                      className={
                        "form-group " +
                        (this.state.genderError ? "is-invalid" : "")
                      }
                    >
                      <div
                        className="col-xl-8"
                        onChange={this.handleChange}
                        checked={this.state.gender}
                      >
                        <input
                          type="radio"
                          value="Male"
                          name="gender"
                          className="mx-2"
                        />{" "}
                        Male
                        <input
                          type="radio"
                          value="Female"
                          name="gender"
                          className="mx-2"
                        />{" "}
                        Female
                        <input
                          type="radio"
                          value="Other"
                          name="gender"
                          className="mx-2"
                        />{" "}
                        Other
                      </div>
                    </div>
                    <span className="text-danger">
                      {this.state.genderError ? this.state.genderError : ""}
                    </span>
                  </div>

                  <div className="form-group py-2">
                    <input
                      type="date"
                      name="dob"
                      onChange={this.handleChange}
                      className={
                        "form-control " +
                        (this.state.dobError ? "is-invalid" : "")
                      }
                      value={this.state.dob}
                    />
                    <span className="text-danger">
                      {this.state.dobError ? this.state.dobError : ""}
                    </span>
                  </div>

                  <div className="form-group py-2">
                    <select
                      value={this.state.city}
                      onChange={this.handleChange}
                      name="city"
                      className={
                        "form-control " +
                        (this.state.cityError ? "is-invalid" : "")
                      }
                    >
                      <option disabled value="">
                        City
                      </option>
                      <option value="ranchi">Ranchi</option>
                      <option value="new delhi">New Delhi</option>
                      <option value="gurgaon">Gurgaon</option>
                      <option value="hyderabad">Hyderabad</option>
                    </select>
                    <span className="text-danger">
                      {this.state.cityError ? this.state.cityError : ""}
                    </span>
                  </div>

                  <div className="form-group py-2">
                    <textarea
                      placeholder="About You"
                      onChange={this.handleChange}
                      name="about"
                      className={
                        "form-control " +
                        (this.state.aboutError ? "is-invalid" : "")
                      }
                      value={this.state.about}
                    ></textarea>
                    <span className="text-danger">
                      {this.state.aboutError ? this.state.aboutError : ""}
                    </span>
                  </div>
                </div>

                <div className="card-footer px-4">
                  <button type="submit" className="btn btn-success">
                    Send
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
