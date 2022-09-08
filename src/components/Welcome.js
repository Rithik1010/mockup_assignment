import React from 'react'

function Welcome() {
  return (
    <div>
        <h1>Welcome! First things first...</h1>
        <p>You can always change them later.</p>
        <form>
            <div>
                <label>Full Name</label>
                <br />
                <input type="text" placeholder="Steve Jobs" />
                <br />
                <label>Display Name</label>
                <br />
                <input type="text" placeholder="Steve" />
                <br />
                <input type="submit" value="Create Workspace" />
            </div>
        </form>
    </div>
  )
}

export default Welcome