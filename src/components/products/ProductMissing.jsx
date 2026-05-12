import { NavLink } from 'react-router'
export default function ProductMissing({ path }) {
  return (
    <main>
      <h1 className='missing-error'>Oops! Something went wrong</h1>
      <h2 className='prod-missing'>
        Could not find "{path.name}" (id: {path.id})
      </h2>
      <NavLink to={-1} className="big-btn cancel-highlight">BACK</NavLink>
    </main>
  )
} 