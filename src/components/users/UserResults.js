import React, { useEffect, useState } from 'react'
import Spinner from '../layout/Spinner'
import UserItem from './UserItem'

const UserResults = () => {
  const [users, setUsers] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  let baseUrl = "https://api.github.com"
 
  useEffect(() => {
    allUsers();
  },[])

  const allUsers = async () => {
    const res = await fetch(`${baseUrl}/users`, {
      headers: {
        Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
      },
    })
    const data = await res.json()
    setUsers(data);
    setIsLoading(false);
  }
  
  return (
    <>
      {!isLoading && <div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'>
      {
        users.map((user) => (
            <UserItem key={user.id} user= {user} />
        ))
      }
      </div>}
      {isLoading && <Spinner />}
    </>
  )
}

export default UserResults