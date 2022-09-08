import React from 'react'

function SetUpHome() {
  return (
    <div>
        <h1>Let's set up a home for all your work</h1>
        <p>You can always create another workspace later.</p>
        <form>
            <div>
                <label>Workspace Name</label>
                <br />
                <input type="text" placeholder="Eden" />
                <br />
                <label>Workspace URL (optional)</label>
                <br />
                <input type="text" placeholder="Example" />
                <br />
                <input type="submit" value="Create Workspace" />
            </div>
        </form>
    </div>
  )
}

export default SetUpHome