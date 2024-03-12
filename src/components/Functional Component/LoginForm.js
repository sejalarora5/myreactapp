import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
export default function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigation("/dashboard");
  }
  return (
    <div className="flex bg-black justify-center items-center h-screen w-screen ">
    <div className="flex bg-black self-center justify-center items-center">
      <form>
        <div className='flex space-x-3'>
          <label className='text-white'>
            Username
          </label>
          <input name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}>
          </input>
        </div>
        <br />
        <div className='flex space-x-4'>
          <label className='text-white'>
            Password
          </label>
          <input name="password" type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}>
          </input>
        </div>
        <br/>
        <div className='flex justify-center'>
        <button onClick={handleSubmit} type='submit' className='btn btn-outline btn-warning text-white'>
          Submit
        </button>
        </div>
      </form>
      </div>
    </div>
  )
}
