import { useState } from 'react'
import { useNavigate } from 'react-router'
import { loginSchema } from '../validation/schemas'
import { signIn } from '../data/auth'
import { getLoginErrorMessage } from '../validation/schemas'
import { useUserStore } from '../hooks/useUserStore'

export default function LoginPage() {

  const { deleteUser, isAdmin, user, setUser, setIsAdmin } = useUserStore()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorMsg, setErrorMsg] = useState('')

  const handleKeyDown = (e) => e.key === 'Enter' && handleLoggingIn()

  const goTo = useNavigate()

  const handleLoggingIn = async () => {
    const { error } = loginSchema.validate({ email, password }, { abortEarly: false })

    //joi returns truthy if something is wrong
    if (error) {
      setErrorMsg(getLoginErrorMessage(email, password))
      setTimeout(() => setErrorMsg(''), 4000)
      return
    }


    //TODO make into a hook that handles authentication...returns true or false if to goTo admin.

    const info = await signIn(email, password)

    //add a boolean value to info to check if it was successful or not.. and then display more specific error messages!

    if (!info) {
      setErrorMsg('Wrong ema')
      setIsAdmin(false)
      deleteUser() //just for safety
      setTimeout(() => { //TODO remove error message button? or when a user edits? if (SetErrorMsg) experiment with possible race condition issues? try causing an error msg and then switch page while it is displaying. Also change 4000 to a variable. explore toast liberaries? Test users for it!
        setErrorMsg('')
      }, 4000)
      return
    }
    if (info) {
      setUser(info)
      setIsAdmin(true)
      goTo('/admin')
    }
  }

  return (
    <main>
      <form>
        <h1>{user ? `user: ${user?.displayName} admin: ${isAdmin}` : ''}</h1>
        <label htmlFor='email'>Email</label>
        <input
          id='email'
          type="email"
          value={email}
          className={`def-input ${errorMsg && 'input-error'}`}
          onChange={(e) => setEmail(e.target.value)}
          onKeyDown={handleKeyDown}
        />

        <label htmlFor='password'> Password</label>
        <input
          id='password'
          type="password"
          value={password}
          className={`def-input ${errorMsg && 'input-error'}`}
          onChange={(e) => setPassword(e.target.value)}
          onKeyDown={handleKeyDown}
        />

        {errorMsg && <span className="error-msg">{errorMsg}</span>}

        <button className='def-btn' onClick={handleLoggingIn}>login</button>
      </form>
    </main>
  )
}