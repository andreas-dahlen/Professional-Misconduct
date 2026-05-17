import { createPortal } from 'react-dom'

export default function YesNoPopup({ message, handleAccept, handleReject, isDisabled }) {


  return (

    createPortal(
      <div className='overlay'>
        <div className='confirm-popup'>
          <h1>{message}</h1>
          <div className='accept-reject'>
            <button className="btn-def btn-anim" onClick={handleAccept} disabled={isDisabled}>YES</button>
            <button className="btn-def btn-anim" onClick={() => handleReject(false)} disabled={isDisabled}>NO</button>
          </div>
        </div>
      </div>,
      document.body
    )
  )
}