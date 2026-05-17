

export default function BurgerButton({ setIsBurgered, isBurgered, user, set, override }) {
  return (
    <div className={`burger-btn ${user ? 'burger-logged-in' : ''} ${isBurgered ? 'burger-active' : ''}`}
      style={override && { display: 'flex' }}
      onClick={() => setIsBurgered(set)}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  )
}