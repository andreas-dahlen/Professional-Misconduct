import { useNavigate } from 'react-router'
export default function ProductMissing({ path }) {

  const goTo = useNavigate()
  return (
    <main>
      <h1 className='missing-error'>Oops! Something went wrong</h1>
      <h2 className='prod-missing'>
        Could not find "{path.name}" (id: {path.id})
      </h2>
      <button className="def-btn btn-anim" onClick={() => goTo(-1)}>BACK</button>
    </main>
  )
} 