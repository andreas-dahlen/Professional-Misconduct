import { useState } from 'react'
import { loginSchema } from '../validation/schemas'
import { toast } from 'sonner'
import { useLoginHandler } from '../hooks/crudHandlers/useLoginHandler'
import { getLoginErrorMessage } from '../validation/messages'
import { useUserStore } from '../hooks/storeHooks/useUserStore'
import { NavLink } from 'react-router'
import { useGoogleHandler } from '../hooks/crudHandlers/useGoogleHandler'
import SonnerTesting from '../DELETE/SonnerTesting'
import InputElement from '../components/products/InputElement'

export default function LoginPage() {

  const { isAdmin, user } = useUserStore()
  const { loginHandler } = useLoginHandler()
  const { googleHandler } = useGoogleHandler()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleKeyDown = (e) => e.key === 'Enter' && loginOrchestrator()

  const loginOrchestrator = async (e) => {
    e?.preventDefault()
    const { error } = loginSchema.validate({ email, password }, { abortEarly: false })
    //joi returns truthy if something is wrong
    if (error) {
      toast.warning(getLoginErrorMessage(email, password), { id: 'sonner', duration: Infinity })
      return
    }
    toast.loading('loading...', { id: 'sonner' })
    const result = await loginHandler(email, password)

    if (result?.error) {
      toast.error(result.error, { id: 'sonner', duration: Infinity })
      return
    } else {
      toast.success('success!', { id: 'sonner', duration: 3000 })
    }
  }

  const loginGoogleOrchestrator = async (e) => {
    e?.preventDefault()
    toast.loading('loading...', { id: 'sonner' })
    const result = await googleHandler()

    if (result?.error) {
      toast.error(result.error, { id: 'sonner', duration: Infinity })
    } else {
      toast.success('success!', { id: 'sonner', duration: 3000 })
    }
  }

  return (
    <main>

      {isAdmin && user && <SonnerTesting />}
      <form>
        {user
          ? <h1>{`user: ${user?.email} 
          ${isAdmin ? 'admin user' : ''}
          `}</h1>
          : <h1>Login</h1>
        }
        <InputElement
          type="email"
          value={email}
          changeFn={setEmail}
          keyDownFn={handleKeyDown}
        />
        <InputElement
          type="password"
          value={password}
          changeFn={setPassword}
          keyDownFn={handleKeyDown}
        />
        <button className='big-btn btn-anim' onClick={loginOrchestrator}>login</button>

        <button className='def-btn btn-anim' onClick={loginGoogleOrchestrator}>sign in with google</button>

        <NavLink className='text-link text-anim' to={'/create'}> Don't have an account? create one!</NavLink>
      </form>
    </main>
  )
}