import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  constructor() {
    super()
    this.state = {
      sushis: [],
      index: 0,
      eaten: [],
      money: 85
    }
  }

  componentDidMount() {
    fetch(API).then(res => res.json()).then(data => this.setState({ sushis: data }))
  }

  displaySushi = () => {
    return this.state.sushis.slice(this.state.index, this.state.index + 4)
  }

  componentWillUpdate() {
    if ((this.state.index + 4) >= this.state.sushis.length) {
      this.setState({index: 0})
    }
  }

  more = () => {
    this.setState({ index: this.state.index + 4 })
  }

  eatSushi = (sushi) => {
    if (this.state.money > sushi.price) {
      let eatenArray = [...this.state.eaten, sushi]
      this.setState({
        eaten: eatenArray,
        money: this.state.money - sushi.price
      })
    }
  }

  addMoney = (e) => {
    this.setState({ money: this.state.money + parseInt(e.value) })
  }

  render() {
    return (
      <div className="app">
        <SushiContainer
          sushis={this.displaySushi()}
          button={this.more}
          eatSushi={this.eatSushi}
          eaten={this.state.eaten}
        />
        <Table
          addMoney={this.addMoney}
          eaten={this.state.eaten}
          money={this.state.money}
        />
      </div>
    );
  }
}

export default App;