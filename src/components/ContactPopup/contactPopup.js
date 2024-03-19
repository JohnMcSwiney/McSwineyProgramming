import React from 'react'

function contactPopup() {
    

    return (
    <div className='popup-cont'>
        <form action="https://formsubmit.co/your@email.com" method="POST">
            <input type="text" name="name" required/>
            <input type="email" name="email" required/>
            <button type="submit">Send</button>
        </form>
    </div>
  )
}

export default contactPopup