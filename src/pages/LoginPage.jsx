import { useState } from 'react'
import { useNavigate } from 'react-router'

export default function LoginPage() {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleKeyDown = (e) => e.key === 'Enter' && handleLoggingIn()

  const goTo = useNavigate()

  const handleLoggingIn = () => {

    //TODO VALIDATION!
    //TODO AUTHENTICATE!

    goTo('/admin')
  }

  return (
    <main>
      <form>
        <label htmlFor='email'>Email</label>
        <input
          id='email'
          type="email"
          value={username}
          className={`def-input ${error && 'input-error'}`}
          onChange={(e) => setUsername(e.target.value)}
          onKeyDown={handleKeyDown}
        />

        <label htmlFor='password'> Password</label>
        <input
          id='password'
          type="password"
          value={password}
          className={`def-input ${error && 'input-error'}`}
          onChange={(e) => setPassword(e.target.value)}
          onKeyDown={handleKeyDown}
        />

        {error && <span className="error-msg">{error}</span>}

        <button className='def-btn' onClick={handleLoggingIn}></button>
      </form>


    </main>
  )
}