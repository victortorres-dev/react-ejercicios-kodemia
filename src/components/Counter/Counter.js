import React, { Component } from 'react'

export default class Counter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }

  componentDidMount() {
    setInterval(() => {
      this.setCounter()
      this.multiploOcho(this.setCounter())
    }, 1000)
  }

  setCounter(){
    this.setState({count: this.state.count+1})
  }

  multiploOcho(multiplo) {
    const multiploOchoR = multiplo % 8
    if(multiploOchoR === 0 ){
      return multiploOchoR
    }
  }

  render() {
    return (
      <div>
        <p>Contador: {this.state.count}</p>
        <p>{this.multiploOcho} es multiplo de 8</p>
      </div>
    )
  }
}