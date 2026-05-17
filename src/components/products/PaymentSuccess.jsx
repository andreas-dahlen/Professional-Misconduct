import { createPortal } from 'react-dom'
import { useNavigate } from 'react-router'

export default function PaymentSuccess() {

  const goTo = useNavigate()

  return (

    createPortal(
      <div className='overlay'>
        <div className='confirm-popup'>
          <h1>Payment Successful!</h1>
          <div className='accept-reject'>
            <button className="btn-def btn-anim" onClick={() => goTo('/')}>Back to the office</button>
          </div>
        </div>
      </div>,
      document.body
    )
  )
}