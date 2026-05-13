import { useState } from 'react'
import { loginSchema } from '../validation/schemas'
import { toast } from 'sonner'
import { getLoginErrorMessage } from '../validation/messages'
import { useCreateUserHandler } from '../hooks/crudHandlers/useCreateUserHandler'
import InputElement from '../components/products/InputElement'

export default function CreateUserPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { createUserHandler } = useCreateUserHandler()

  const handleKeyDown = (e) => e.key === 'Enter' && ''

  const createOrchestrator = async (e) => {
    e.preventDefault()
    const { error } = loginSchema.validate({ email, password }, { abortEarly: false })

    if (error) {
      toast.warning(getLoginErrorMessage(email, password), { id: 'sonner', duration: Infinity })
      return
    }
    toast.loading('loading...', { id: 'sonner' })
    const result = await createUserHandler(email, password)

    if (result?.error) {
      toast.error(result.error, { id: 'sonner', duration: Infinity })
      return
    } else {
      toast.success('done!', { id: 'sonner', duration: 3000 })
    }
  }

  return (
    <main>
      <form className='create-form'>
        <h1> Create </h1>

        <InputElement
          type="email"
          value={email}
          changeFn={setEmail}
          onKeyDown={handleKeyDown}
        />

        <InputElement
          type="password"
          value={password}
          changeFn={setPassword}
          keyDownFn={handleKeyDown}
        />

        <button className='btn-def btn-anim' onClick={createOrchestrator}>Create</button>
      </form>
    </main>
  )
}