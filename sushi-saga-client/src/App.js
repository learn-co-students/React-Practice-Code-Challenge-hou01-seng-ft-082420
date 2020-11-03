import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  constructor(){
    super();
    this.state = ({
      sushis:[],
      index:0,
      eatenSushi:[],
      wallet: 100,
    })
  }

  componentDidMount(){
    fetch(API)
    .then(res=>res.json())
    .then(sushis=>this.setState({sushis}))
  }

  showMoreSushi = () => {
    this.state.index < 96 ?
    this.setState({index:(this.state.index + 1)})
    :
    this.setState({index:0})
  }

  showLessSushi = () => {
    this.state.index !== 0 ?
    this.setState({index:(this.state.index - 1)})
    :
    this.setState({index:96})
  }

  eatSushi = (sushi) => {
    this.state.wallet > sushi.price 
    ?
    this.setState({
      eatenSushi:[...this.state.eatenSushi,sushi],
      wallet: (this.state.wallet-sushi.price)
    })
    : null
  }

  render() {
    let currentSushis
    currentSushis = this.state.sushis.slice(this.state.index, (this.state.index + 4))

    return (
      <div className="app">
        <SushiContainer 
        sushis={currentSushis}
        showMoreSushi={this.showMoreSushi}
        showLessSushi={this.showLessSushi}
        eatenSushi={this.state.eatenSushi}
        eatSushi={this.eatSushi}/>

        <Table 
        wallet={this.state.wallet}
        eatenSushi={this.state.eatenSushi}/>
      </div>
    );
  }
}

export default App;