import React, { Component } from 'react'

export default class AddHabit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    }
  }

  render() {
    return (
      <input type="text" />
    )
  }
}
