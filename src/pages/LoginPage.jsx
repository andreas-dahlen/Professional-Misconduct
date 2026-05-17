import { useState } from 'react'
import { NavLink } from 'react-router'
import { toast } from 'sonner'
import { loginSchema } from '../validation/schemas'
import { getLoginWarningMsg } from '../validation/messages'
import { useLoginHandler } from '../hooks/authHandlers/useLoginHandler'
import { useGoogleHandler } from '../hooks/authHandlers/useGoogleHandler'
import { useAsyncAction } from '../hooks/utils/useAsyncAction'
import InputElement from '../components/products/InputElement'

export default function LoginPage() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [valType, setValType] = useState(null)
  const [override, setOverride] = useState(false)

  const { loginHandler } = useLoginHandler()
  const { googleHandler } = useGoogleHandler()
  const { isDisabled, asyncAction } = useAsyncAction()

  const handleKeyDown = (e) => e.key === 'Enter' && loginOrchestrator()

  const loginOrchestrator = async (e) => {
    e?.preventDefault()
    setOverride(false)
    const { error } = loginSchema.validate({ email, password }, { abortEarly: false })

    if (error) {
      setValType('warning')
      toast.warning(getLoginWarningMsg(email, password), { id: 'sonner', duration: Infinity })
      return
    }

    const isSuccess = await asyncAction(() => loginHandler(email, password), 'welcome')

    setValType(isSuccess ? 'success' : 'error')
  }

  const loginGoogleOrchestrator = async (e) => {
    e?.preventDefault()
    asyncAction(() => googleHandler())
    setValType(null)
  }

  return (
    <main>
      <form className='login-form'>

        <InputElement
          type="email"
          autoComplete="email"
          value={email}
          override={override}
          setOverride={setOverride}
          colorType={valType}
          changeFn={setEmail}
          keyDownFn={handleKeyDown}
        />
        <InputElement
          type="password"
          autoComplete="current-password"
          value={password}
          override={override}
          setOverride={setOverride}
          colorType={valType}
          changeFn={setPassword}
          keyDownFn={handleKeyDown}
        />
        <button className='btn-semi-big btn-anim' onClick={loginOrchestrator} disabled={isDisabled}>login</button>

        <button className='btn-def btn-anim' onClick={loginGoogleOrchestrator} disabled={isDisabled}>sign in with google</button>

        <NavLink className='text-link text-anim' to={'/create'} onClick={e => isDisabled && e.preventDefault()}> Don't have an account? create one!</NavLink>
      </form>
    </main>
  )
}