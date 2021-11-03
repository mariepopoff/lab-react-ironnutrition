import React, { Component } from 'react'

export default class OneFoodToday extends Component {
    render() {
        return (
            <li>
                {this.props.quantity} {this.props.name} = {this.props.calories} cal
            </li>
        )
    }
}
