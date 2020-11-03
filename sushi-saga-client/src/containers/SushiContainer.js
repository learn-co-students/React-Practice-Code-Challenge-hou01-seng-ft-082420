import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import LessButton from '../components/LessButton'
import Sushi from '../components/Sushi'

const SushiContainer = ({sushis,eatenSushi,eatSushi,showMoreSushi,showLessSushi}) => {
  return (
    <Fragment>
      <div className="belt">
        <LessButton showLessSushi={showLessSushi}/>
        {
          sushis.map(sushi=><Sushi sushi={sushi} eatenSushi={eatenSushi} eatSushi={eatSushi}/>)
        }
        <MoreButton showMoreSushi={showMoreSushi}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer