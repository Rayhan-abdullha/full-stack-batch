import React from 'react'
import type { UserTypes } from './UserProfile'
type User = {
    userInfo: UserTypes
}
const UserList = ({userInfo}: User) => {
  return (
      <div>
          <h1>Name: {userInfo.name}</h1>
          <p>Email: {userInfo.email}</p>
          <p aria-readonly>PassWord: { userInfo.password}</p>
    </div>
  )
}

export default UserList