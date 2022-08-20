import React from 'react'

const UserItem = ({user}) => {
  return (
    <>
   <div class="card w-96 bg-base-100 shadow-xl">
  <figure class="px-10 pt-10">
    <img src={user.avatar_url} width={300} alt="Shoes" class="rounded-xl" />
  </figure>
  <div class="card-body items-center text-center">
    <h2 class="card-title">{user.login}</h2>
    
    <div class="card-actions">
      <button class="btn btn-primary">Visit Profile</button>
    </div>
  </div>
</div>
    </>
  )
}

export default UserItem