'use client'
import search from '../actions/search'
 
import { useActionState } from 'react'
 
const initialState = {
  message: '',
}
 
export function Search() {
  const [state, action] = useActionState(search, initialState)
 
  return (
    <form action={action}>
      <label htmlFor="search">Email</label>
      <input type="text" id="search" name="search" required />
      {/* ... */}
      <p aria-live="polite" className="sr-only">
        {state?.message}
      </p>
      <button>Sign up</button>
    </form>
  )
}