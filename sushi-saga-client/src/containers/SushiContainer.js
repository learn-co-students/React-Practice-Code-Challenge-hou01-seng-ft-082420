import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  return (
    <Fragment>
      <div className="belt">
        {props.sushis.map(sushi => 
          <Sushi sushi={sushi}
           eatSushi={props.eatSushi}
           //.includes allows the isEaten array to be treated as a boolean
           isEaten={props.isEaten.includes(sushi)}
           />
        )}
        <MoreButton handleOnClick = {props.handleOnClick} />
      </div>
    </Fragment>
  )
}

export default SushiContainer