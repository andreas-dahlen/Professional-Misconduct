import { useState } from 'react'
import { loginSchema } from '../validation/schemas'
import { toast } from 'sonner'
import { getLoginWarningMsg } from '../validation/messages'
import { useCreateUserHandler } from '../hooks/crudHandlers/useCreateUserHandler'
import InputElement from '../components/products/InputElement'
import { useAsyncAction } from '../hooks/utils/useAsyncAction'

export default function CreateUserPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { createUserHandler } = useCreateUserHandler()

  const { isDisabled, asyncAction } = useAsyncAction()

  const handleKeyDown = (e) => e.key === 'Enter' && ''

  const createOrchestrator = async (e) => {
    e.preventDefault()
    const { error } = loginSchema.validate({ email, password }, { abortEarly: false })

    if (error) {
      toast.warning(getLoginWarningMsg(email, password), { id: 'sonner', duration: Infinity })
      return
    }
    asyncAction(() => createUserHandler(email, password), 'welcome!')
  }

  return (
    <main>
      <form className='create-form'>

        <InputElement
          type="email"
          autoComplete="email"
          value={email}
          changeFn={setEmail}
          onKeyDown={handleKeyDown}
        />

        <InputElement
          type="password"
          autoComplete="new-password"
          value={password}
          changeFn={setPassword}
          keyDownFn={handleKeyDown}
        />

        <button className='btn-semi-big btn-anim' onClick={createOrchestrator} disabled={isDisabled}>Create</button>
      </form>
    </main>
  )
}