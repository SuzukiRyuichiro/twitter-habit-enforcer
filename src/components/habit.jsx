import React, { Component } from 'react'

export default class Habit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      habitCompletion: false
    };
  }

  handleClick = () => {
    console.log('hey');
  }

  render() {
    return (
      <div className="habit-card">
        <div className="checkbox" onClick={this.handleClick}>
        </div>
        <div className="habit-description">
          <h2>{ this.props.content }</h2>
        </div>
      </div>
    )
  }
}
