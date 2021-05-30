import React, { Component } from 'react'
import moment from 'moment'

export default class Clock extends Component{
  constructor() {
    super()
    this.state = {
      time: moment().format('LTS'),
      one: true,
      class: ''
    }
  }
  componentDidMount() {
    setInterval(()=>{
        this.setState({ time: moment().format('LTS') })}
      ,1000)
  }

  render() {
    return(
      <div id="clock" className={this.state.class}>
        {this.state.time}
      </div>
    )
  }
}
