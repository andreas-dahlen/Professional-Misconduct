import { useState } from 'react'
import { loginSchema } from '../validation/schemas'
import { toast } from 'sonner'
import { getLoginErrorMessage } from '../validation/messages'
import { useCreateUserHandler } from '../hooks/crudHandlers/useCreateUserHandler'

export default function CreateUserPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  // const [name, setName] = useState('')
  const { createUserHandler } = useCreateUserHandler()


  const handleKeyDown = (e) => e.key === 'Enter' && ''

  const createOrchestrator = async (e) => {
    e.preventDefault()
    const { error } = loginSchema.validate({ email, password }, { abortEarly: false })

    if (error) {
      toast.error(getLoginErrorMessage(email, password), { id: 'login-error' })
      return
    }
    toast.error('loading...', { id: 'login-error' })
    const result = await createUserHandler(email, password)

    if (result?.error) {
      toast.error(result.error, { id: 'login-error' })
      return
    } else {
      toast.dismiss('login-error')
    }
  }
  return (
    <main>
      <form>
        : <h1> welcome!</h1>

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

        <button className='def-btn' onClick={createOrchestrator}>create</button>
      </form>
    </main>
  )
}