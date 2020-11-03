import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  constructor() {
    super()
    this.state = {
      allSushi: [],
      displayStart: 0,
      displayEnd: 4,
      emptyPlates: [],
      wallet: 100
    }
  }


  componentDidMount = () => {
    fetch(API).then(res => res.json()).then(sushi => this.setState({
      allSushi: sushi,
    }))
  }

  nextDisplay = () => {
    this.setState({
      displayStart: this.state.displayStart + 4,
      displayEnd: this.state.displayEnd + 4
    })
  }

  addPlate = (price) => {
    let x = this.state.emptyPlates.reduce((a,b) => a + b, 0)
    let y = x + price
    console.log(x)
    this.setState({
      emptyPlates:  [...this.state.emptyPlates, price],
      wallet: 100 - y
    })
  }

  render() {
    return (
      <div className="app">
        <SushiContainer
          allSushi={this.state.allSushi}
          displayStart={this.state.displayStart}
          displayEnd={this.state.displayEnd}
          nextDisplay={this.nextDisplay}
          addPlate={this.addPlate}
          wallet={this.state.wallet}
        />
        <Table
          emptyPlates={this.state.emptyPlates}
          wallet ={this.state.wallet}
        />
      </div>
    );
  }
}

export default App;