import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';
import SushiWallet from './components/SushiWallet'

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    sushis: [],
    displaySushis: [],
    eatenSushis: [],
    displayIndex: 0,
    wallet: 100
  }

  componentDidMount(){
    fetch(API)
    .then(res => res.json())
    .then(sushis => {
      this.setState({
        sushis: sushis,
        displaySushis: sushis.slice(this.state.displayIndex,this.state.displayIndex + 4)
      })
    })
  }

  showMoreSushi = () => {
    if (this.state.displayIndex < 96) {
      this.setState({
      displayIndex: this.state.displayIndex + 1,
      displaySushis: this.state.sushis.slice(this.state.displayIndex,this.state.displayIndex + 4)
    })
    }else{
      this.setState({
        displayIndex: 0
      })
    }
    
  }

  eatSushi = (sushi) => {
    // debugger
    console.log('eating this!', sushi)
    if (sushi.price > this.state.wallet){
      alert('You do not have enough money to buy this sushi!')
    } else {
      this.setState({
        eatenSushis: [...this.state.eatenSushis, sushi],
        wallet: this.state.wallet - sushi.price
      })
    } 
  }

  addFunds = (e) => {
    e.preventDefault()
    const walletForm = document.getElementById("wallet-form")
    let {value} = e.target.funds
    console.log(value)
    // debugger
    this.setState({
      wallet: this.state.wallet + parseInt(value, 10)
    })
    walletForm.reset()
  }

  render() {
    return (
      <div className="app">
        <SushiContainer 
        sushis={this.state.displaySushis}
        eatenSushis={this.state.eatenSushis} 
        showMoreSushi={this.showMoreSushi}
        eatSushi={this.eatSushi} 
        />
        
        <Table 
        wallet={this.state.wallet}
        eatenSushis={this.state.eatenSushis}
        />
        <SushiWallet addFunds={this.addFunds} />
      </div>
    );
  }

}

export default App;