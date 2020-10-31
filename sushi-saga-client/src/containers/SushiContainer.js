import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  return (
    <Fragment>
      <div className="belt">
        {
          props.sushi.map(sushi=> {
           return <Sushi 
           sushi = {sushi} 
           key ={sushi.id}
           consumeSushi = {props.consumeSushi}
           eatenSushi = {props.eatenSushi}
           />
          })
        }
        <MoreButton handleMoreButton={props.handleMoreButton}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer