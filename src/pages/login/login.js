import './login.css'

import React, { useState } from 'react'
import { useLogin } from '../../hooks/useLogin'


export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { isPending, error, login } = useLogin()

  const handleSubmit = (e)=> {
    e.preventDefault()
    login(email, password);
    console.log(email, password);
  }
  return (
    <div>
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2>Sign up</h2>
        <label>
          <span>email:</span>
          <input
            required
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </label>
        <label>
          <span>password:</span>
          <input
            required
            type="text"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </label>
        {!isPending && <button className="btn">Log in</button>}
        {isPending && (
          <button className="btn" disabled>
            loading...
          </button>
        )}
        {error && <div className="error">{error}</div>}
      </form>
    </div>
  );
}
