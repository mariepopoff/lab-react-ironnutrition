import "./App.css"

import React, { Component } from 'react'

export default class FoodBox extends Component {
  state = {
    quantity: 0
}

handleChange = (evt) => {
  this.setState({
    quantity: evt.target.value,
  });
}

handleClick = (evt) => {
  evt.preventDefault();
  this.props.handler(this.state.quantity, this.props.name, this.props.calories);
}


    render() {
        return (
<div className="box">
  <article className="media">
    <div className="media-left">
      <figure className="image is-64x64">
        <img src={this.props.img} />
      </figure>
    </div>
    <div className="media-content">
      <div className="content">
        <p>
          <strong>{this.props.name}</strong> <br />
          <small>{this.props.calories} cal</small>
        </p>
      </div>
    </div>
    <div className="media-right">
      <div className="field has-addons">
        <div className="control">
          <input className="input" type="number" value={this.state.quantity}  onChange={this.handleChange} />
        </div>
        <div className="control">
          <button className="button is-info" onClick={this.handleClick}>
            +
          </button>
        </div>
      </div>
    </div>
  </article>
</div>
        )
    }
}
