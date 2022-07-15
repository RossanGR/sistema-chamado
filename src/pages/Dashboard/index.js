import React, { useContext } from 'react'

import { AuthContext } from '../../contexts/auth'

export default function Dashboard() {
  const { signOut } = useContext(AuthContext);
  return (
    <>
      <div>Dashboard</div>
      <button onClick={signOut}>Logout</button>
    </>
  )
}
