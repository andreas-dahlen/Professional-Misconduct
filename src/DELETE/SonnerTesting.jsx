import { toast } from 'sonner'

export default function SonnerTesting() {


  const displayToastTest = (type) => {
    if (type === 'warning') { toast.warning('warning message is here!', { id: 'sonner', duration: Infinity }) }
    else if (type === 'loading') { toast.loading('loading is here!', { id: 'sonner' }) }
    else if (type === 'error') { toast.error('error message is here!', { id: 'sonner', duration: Infinity }) }
    else if (type === 'success') { toast.success('success message is here!', { id: 'sonner', duration: 3000 }) }
  }

  return (
    <div style={{ marginTop: '400px' }}>
      <button className='btn-def' onClick={() => displayToastTest('warning')}> warning </button>
      <button className='btn-def' onClick={() => displayToastTest('loading')}> loading </button>
      <button className='btn-def' onClick={() => displayToastTest('error')}> error </button>
      <button className='btn-def' onClick={() => displayToastTest('success')}> success </button>
    </div>
  )
}