import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

class SushiContainer extends React.Component {

  renderSushi = () => {
    return this.props.allSushi.map(sushi => {
      return <Sushi
        sushi={sushi}
        addPlate={this.props.addPlate}
        wallet={this.props.wallet}
      />
    }
    )
  }

  renderFour = () => {
    return this.renderSushi().slice(this.props.displayStart, this.props.displayEnd)
  }


  render() {
    return (
      <Fragment>
        <div className="belt">
          {this.renderFour()}
          <MoreButton 
          nextDisplay = {this.props.nextDisplay}/>
        </div>
      </Fragment>
    )
  }
}

export default SushiContainer