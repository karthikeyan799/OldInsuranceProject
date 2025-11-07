// import React, { Component } from 'react'

// export default class Cadd extends Component {
//   render() {
//     return (
//       <div>
import React, { Component } from 'react';
import axios from 'axios';

export default class Cadd extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            greeting: '',
        };
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    handleSubmit = async (e) => {
        e.preventDefault();
        const customer = { name: this.state.name, greeting: this.state.greeting };
        try {
            const response = await axios.get(  "http://localhost:8080/GreetingVOUserName",
             customer);
            this.props.onSubmit(response.data);
            this.setState({ name: '', greeting: '' });
        } catch (error) {
            console.error(error);
        }
    };

    render() {
        const { name, greeting } = this.state;

        return (
            <div>
                <h2>Add Customer</h2>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>Name:</label>
                        <input type="text" name="name" value={name} onChange={this.handleChange} />
                    </div>
                    <div>
                        <label>Email:</label>
                        <input type="text" name="greeting" value={greeting} onChange={this.handleChange} />
                    </div>
                    <button type="submit">Add Customer</button>
                </form>
            </div>
        )}}
       

 
// </div>
   