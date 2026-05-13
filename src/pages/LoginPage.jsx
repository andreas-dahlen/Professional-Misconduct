import { useState } from 'react'
import { loginSchema } from '../validation/schemas'
import { toast } from 'sonner'
import { useLoginHandler } from '../hooks/crudHandlers/useLoginHandler'
import { getLoginErrorMessage } from '../validation/messages'
import { NavLink } from 'react-router'
import { useGoogleHandler } from '../hooks/crudHandlers/useGoogleHandler'
import InputElement from '../components/products/InputElement'

export default function LoginPage() {
  const { loginHandler } = useLoginHandler()
  const { googleHandler } = useGoogleHandler()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleKeyDown = (e) => e.key === 'Enter' && loginOrchestrator()

  const [valType, setValType] = useState(null)
  const [override, setOverride] = useState(false)

  const loginOrchestrator = async (e) => {
    e?.preventDefault()
    setOverride(false)
    const { error } = loginSchema.validate({ email, password }, { abortEarly: false })
    //joi returns truthy if something is wrong
    if (error) {
      setValType('warning')
      toast.warning(getLoginErrorMessage(email, password), { id: 'sonner', duration: Infinity })
      return
    }
    toast.loading('loading...', { id: 'sonner' })
    const result = await loginHandler(email, password)

    if (result?.error) {
      setValType('error')
      toast.error(result.error, { id: 'sonner', duration: Infinity })
      return
    } else {
      setValType('success')
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
      <form className='login-form'>
        <h1>Login</h1>

        <InputElement
          type="email"
          value={email}
          override={override}
          setOverride={setOverride}
          colorType={valType}
          changeFn={setEmail}
          keyDownFn={handleKeyDown}
        />
        <InputElement
          type="password"
          value={password}
          override={override}
          setOverride={setOverride}
          colorType={valType}
          changeFn={setPassword}
          keyDownFn={handleKeyDown}
        />
        <button className='btn-big btn-anim' onClick={loginOrchestrator}>login</button>

        <button className='btn-def btn-anim' onClick={loginGoogleOrchestrator}>sign in with google</button>

        <NavLink className='text-link text-anim' to={'/create'}> Don't have an account? create one!</NavLink>
      </form>
    </main>
  )
}