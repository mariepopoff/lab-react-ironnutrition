import React, { Component } from 'react'
import "./App.css"

export default class AddFood extends Component {
    state = {
        name :"",
        calories: "",
        image: ""
    }
    handleChange = (evt) => {
        this.setState({
          [evt.target.id]: evt.target.value,
        });
      };

      handleSubmit = (evt) => {
        evt.preventDefault();
        this.props.handler(this.state);
      };

    render() {
        return (
            <div>
            <form onSubmit={this.handleSubmit}>
              <label>Name:</label>
              <input type="text" id="name" onChange={this.handleChange}/>
     
              <label>Calories:</label>
              <input type="number" id="calories" onChange={this.handleChange} />
     
              <label>Image:</label>
              <input type="text" id="image" onChange={this.handleChange}/>
              
              <button>Submit</button>
            </form>
          </div>
        )
    }
}
