import React, { Component } from 'react'

export default class Search extends Component {
   

    handleInput = (evt) => {
        this.props.handler(evt.target.value);
      };

    render() {
        return (
            <div>
            <input type="text" id="input" placeholder="Search" onInput={this.handleInput} />
            </div>
        )
    }
}
