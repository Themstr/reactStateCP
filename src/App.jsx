import React, { Component } from 'react'
import Counter from './Components/Counter'
export default class App extends Component {
  state = {
    show: false,
    person:{
      name:"maminou",
      bio: "SF",
      imgSRC: "https://github.com/pulme.png",
      profession: "Da3in 3lih bchar"
    }
  }
  handleShow = () => this.setState({show:!this.state.show})
  render() {
    return (
      <div>
        <button onClick={this.handleShow}>
         {this.state.show ? 'Hide': 'Show'} 
        </button>
      {
        this.state.show && <Counter profile={this.state.person}/>
      }
      </div>
    )
  }
}
