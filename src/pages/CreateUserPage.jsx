import { useState } from 'react'

export default function CreateUserPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')


  const handleKeyDown = (e) => e.key === 'Enter' && ''
  return (
    <main>
      <form>
        : <h1> welcome!</h1>

        <label htmlFor='name'>Name</label>
        <input
          id='name'
          type="text"
          value={name}
          className={`def-input`}
          onChange={(e) => setName(e.target.value)}
          onKeyDown={handleKeyDown}
        />

        <label htmlFor='email'>Email</label>
        <input
          id='email'
          type="email"
          value={email}
          className={`def-input`}
          onChange={(e) => setEmail(e.target.value)}
          onKeyDown={handleKeyDown}
        />

        <label htmlFor='password'> Password</label>
        <input
          id='password'
          type="password"
          value={password}
          className={`def-input`}
          onChange={(e) => setPassword(e.target.value)}
          onKeyDown={handleKeyDown}
        />

        <button className='def-btn'>submit</button>

        <button className='def-btn google-btn'></button>
      </form>
    </main>
  )
}