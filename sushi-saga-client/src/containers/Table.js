import React, { Fragment } from 'react'

const Table = (props) => {

  const renderPlates = (array) => {
    return array.map((x, index) => {
      return <div className="empty-plate" style={{ top: -7 * index }}/>
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    props.addMoney(e.target.amount)
  }

  return (
    <Fragment>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label>Add Money: </label>
        <input name="amount" type="number" />
          <input type="submit" />
      </form>
      <h1 className="remaining">
        You have: ${props.money} remaining!
      </h1>
      <div className="table">
        <div className="stack">
          {
            renderPlates(props.eaten)
          }
        </div>
      </div>
    </Fragment>
  )
}

export default Table