import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  let {sushis, showMoreSushi, eatSushi, eatenSushis} = props

  return (
    <Fragment>
      <div className="belt">
        {
          sushis.map( sushi => <Sushi sushi={sushi} key={sushi.id} eatSushi={eatSushi} eatenSushis={eatenSushis} />)
        }
        <MoreButton showMoreSushi={showMoreSushi} />
      </div>
    </Fragment>
  )
}

export default SushiContainer