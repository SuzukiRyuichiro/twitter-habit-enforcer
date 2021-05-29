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
      if(this.state.one == true) {
        this.setState({
          time: moment().format('LTS')
        })
      }
      else if(this.state.four == true){
        this.setState({
          time: moment().format('LT')
        })
      }
    },1000)
  }
  render() {
    return(
      <div id="clock" style={this.state.background} onClick={this.clicked}>
        <h1 className={this.state.class}>{this.state.time}</h1>
      </div>
    )
  }
}
