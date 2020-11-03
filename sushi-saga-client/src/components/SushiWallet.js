import React from 'react'

const SushiWallet = (props) => {

    return(
        <div>
            <form id="wallet-form" onSubmit={(e) => props.addFunds(e)} >
                <label>Add Funds</label>
                <br/>
                <input type="text" name="funds" placeholder="Suggested add ~ $50"/>
                <br/>
                <button>Confirm</button>
            </form>
        </div>
    )

}

export default SushiWallet