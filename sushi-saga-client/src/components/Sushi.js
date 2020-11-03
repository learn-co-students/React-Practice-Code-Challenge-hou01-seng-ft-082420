import React, { Fragment } from 'react'

const Sushi = ({sushi,eatenSushi,eatSushi}) => {
  return (
    <div className="sushi">
      <div className="plate" 
           onClick={() => eatSushi(sushi)}>
        { 
          eatenSushi.includes(sushi)
          ?
          null
          :
          <img src={sushi.img_url} width="100%" />
        }
      </div>
      <h4 className="sushi-details">
        {sushi.name} - ${sushi.price}
      </h4>
    </div>
  )
}

export default Sushi