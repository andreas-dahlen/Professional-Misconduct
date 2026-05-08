import { useLogoutHandler } from '../hooks/useLogoutHandler'
import { toast } from 'sonner'


export default function AdminPage() {

  const { logoutHandler } = useLogoutHandler()
  const logoutOrchestrator = async () => {
    const result = await logoutHandler()
    if (result?.error) {
      toast.error(result.error, { id: 'logout-error' })
    }
  }

  return (
    <main>

      <div>welcome admin!</div>
      <button onClick={logoutOrchestrator}>logout</button>

    </main>
  )
}