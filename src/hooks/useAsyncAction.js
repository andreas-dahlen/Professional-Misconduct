import { useState } from 'react';
import { toast } from 'sonner';


export function useAsyncAction() {
  const [isDisabled, setIsDisabled] = useState(false)

  const asyncAction = async (asyncFunction, successMsg = 'success') => {
    setIsDisabled(true)
    toast.loading('loading...', { id: 'sonner' })
    const result = await asyncFunction()

    if (result?.error) {
      toast.error(result.error, { id: 'sonner', duration: Infinity })
      setIsDisabled(false)
      return false
    }
    if (result === true) {
      toast.success('welcome admin', { id: 'sonner', duration: 3000 })
      setIsDisabled(false)
      return true
    }

    toast.success(successMsg, { id: 'sonner', duration: 3000 })
    setIsDisabled(false)
    return true
  }
  return { isDisabled, asyncAction }
}