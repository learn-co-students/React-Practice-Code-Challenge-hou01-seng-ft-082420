import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  constructor(){
    super()
    this.state = {
      sushi: [],
      displaySushi: [],
      eatenSushi: [],
      sushiIndex: 0,
      funds: 100
    }
  }

  componentDidMount(){
    fetch(API)
    .then(res=>res.json())
    .then(sushi => {
      this.setState({
        sushi,
        displaySushi: sushi.slice(0,4)
      })
    })
  }

  handleMoreButton =()=> {
    // console.log(this.state.sushiIndex, this.state.sushi.length)
    if(this.state.sushiIndex < this.state.sushi.length - 4){
    this.setState({
      displaySushi: this.state.sushi.slice(this.state.sushiIndex + 4, this.state.sushiIndex + 8),
      sushiIndex: this.state.sushiIndex + 4
      })
    } else{
      this.setState({
        displaySushi: this.state.sushi.slice(0,4),
        sushiIndex: 0
      })
    }
  }

  consumeSushi = (sushi) => {
    console.log("eateateat!")
    if(this.state.funds >= sushi.price){
      this.setState({
        eatenSushi: [...this.state.eatenSushi, sushi],
        funds: this.state.funds - sushi.price
      }) 
    }else{
      //do I need anything here?
    }
  }

  render() {
    return (
      <div className="app">
        <SushiContainer 
        sushi = {this.state.displaySushi} 
        handleMoreButton={this.handleMoreButton}
        consumeSushi= {this.consumeSushi}
        eatenSushi={this.state.eatenSushi}
        />
        <Table funds={this.state.funds} eatenSushi={this.state.eatenSushi}/>
      </div>
    );
  }
}

export default App;