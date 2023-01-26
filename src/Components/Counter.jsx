import React, { Component } from 'react'

export default class Counter extends Component {
  state = {
    count: 0
  }
  componentDidMount(){
      setInterval(()=>{
        this.setState({
            count : this.state.count+1
      })
    },1000)
  }
  render()
  {
    return (
      <div>
        <h1>{this.props.profile.name}</h1>
        <h3>{this.props.profile.bio}</h3>
        <img src={this.props.profile.imgSRC} alt="" />
        <h3>{this.props.profile.profession}</h3>
        <h2>{this.state.count}</h2>
      </div>
    )
  }
}
