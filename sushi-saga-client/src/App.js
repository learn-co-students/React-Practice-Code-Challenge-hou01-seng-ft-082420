import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
    state = {
      sushis: [],
      sushiIndex: 0,
      isEaten: [],
      money: 500
    }
  

  componentDidMount(){
    fetch(API)
    .then(res => res.json())
    .then(sushis => {
      this.setState({
        sushis
        // sushis: sushis 
      })
    })
  }

  handleOnClick = () => {
    console.log("clicked")
    this.setState({
      sushiIndex: this.state.sushiIndex + 4
    })
  }

  eatSushi = (clickedSushi) => {
    console.log("I've been eaten!")
    const sushiBudget = this.state.money - clickedSushi.price
    if (!this.state.isEaten.includes(clickedSushi) && sushiBudget >= 0) {
      this.setState({
      isEaten: [...this.state.isEaten, clickedSushi],
      money: sushiBudget
    })
  }}
  

  render() {
    //this allows only 4 sushis on the page at a time
    let currentSushis = this.state.sushis.slice(this.state.sushiIndex, (this.state.sushiIndex) + 4)
    

    return (
      <div className="app">
        <SushiContainer sushis={currentSushis} 
        handleOnClick={this.handleOnClick} 
        eatSushi={this.eatSushi} 
        isEaten={this.state.isEaten}/>
        <Table money={this.state.money}/>
      </div>
    );
  }
}

export default App;