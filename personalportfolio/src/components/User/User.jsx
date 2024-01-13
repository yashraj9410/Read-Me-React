import React from 'react'
import { useSearchParams } from 'react-router-dom'
// use Search params help to find user with id /user/:id

function User() {
    const userId = useParams()
  return (
    <div>User :{userId}</div>
  )
}

export default User


// this component will work for {/* <Route path='user/:userid' element={<User />} />   to fetch the user by id */}