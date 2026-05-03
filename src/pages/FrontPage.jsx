import hero from '../assets/hero.png'

export default function FrontPage() {

  return (
    <>
      <div className='hero-box'>
        <img src={hero} className="hero" alt="hero img"></img>
      </div>
      <main className='main-front-page'>
      </main>

    </>
  )
}