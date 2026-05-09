import { NavLink } from 'react-router'
import { imgPath } from '../data/settings'

export default function FrontPage() {

  return (
    <>
      <div className='hero-box'>
        <img src={`${imgPath}hero.png`} className="hero" alt="hero img"></img>
      </div>
      <main className='main-front-page'>

        <p className='slogan'> Ready to turn your <br />workspace upside down?</p>

        <NavLink to="/products" role="button" className="big-button">Products</NavLink>

        <p className='quote'>“It has all the essentials for the <br /> professionally unhinged.” - Bob</p>
      </main>

    </>
  )
}