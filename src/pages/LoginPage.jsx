import { useEffect, useState } from 'react'
import { loginSchema } from '../validation/schemas'
import { toast } from 'sonner'
import { useLoginHandler } from '../hooks/crudHandlers/useLoginHandler'
import { getLoginErrorMessage } from '../validation/schemas'
import { useUserStore } from '../hooks/storeHooks/useUserStore'
import { NavLink, useNavigate } from 'react-router'
import { useGoogleHandler } from '../hooks/crudHandlers/useGoogleHandler'

export default function LoginPage() {

  const { isAdmin, user } = useUserStore()
  const { loginHandler } = useLoginHandler()
  const { googleHandler } = useGoogleHandler()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const goTo = useNavigate()
  useEffect(() => {
    if (user && isAdmin) goTo('/admin')
  }, [user, isAdmin, goTo])

  const handleKeyDown = (e) => e.key === 'Enter' && loginOrchestrator()

  const loginOrchestrator = async (e) => {
    e?.preventDefault()
    const { error } = loginSchema.validate({ email, password }, { abortEarly: false })
    //joi returns truthy if something is wrong
    if (error) {
      toast.error(getLoginErrorMessage(email, password), { id: 'login-error' })
      return
    }
    toast.error('loading...', { id: 'login-error' })
    const result = await loginHandler(email, password)

    if (result?.error) {
      toast.error(result.error, { id: 'login-error' })
      return
    } else {
      toast.dismiss('login-error')
    }
  }

  const loginGoogleOrchestrator = async (e) => {
    e?.preventDefault()
    const result = await googleHandler()

    if (result?.error) {
      toast.error(result.error, { id: 'login-error' })
    }
  }



  return (
    <main>
      <form>
        {user
          ? <h1>{`user: ${user?.displayName} 
          ${isAdmin ? 'admin user' : ''}
          `}</h1>
          : <h1> welcome!</h1>
        }

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

        {/* replaced with toast TODO remove? */}
        {/* {errorMsg && <span className="">{errorMsg}</span>} */}

        <button className='def-btn' onClick={loginOrchestrator}>login</button>

        <NavLink className='def-btn' to={'/create'}> create new user</NavLink>
        <button className='def-btn google-btn' onClick={loginGoogleOrchestrator}>sign in with google</button>
      </form>
    </main>
  )
}