import router from 'next/router';
import { ParsedUrlQueryInput } from 'querystring';
import { useEffect, useState } from 'react';

type User = {
  id: number,
  name: string,
  course: string
}

export default function UsersPage () {
  const [userId, setUserId] = useState<number>();
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetch('http://localhost:3000/api/users').then(response => response.json()).then(usersJson => setUsers(usersJson));
  }, [])

  return (
    <div>
      <h1>
        Page from users
      </h1>
      <input 
        type="number" 
        value={userId ?? ''} 
        onChange={e => setUserId(Number(e.target.value))} 
        placeholder="digite o ID do usuário" 
      />
      <div>
        {users.map(user => {
          return (
            <div key={user.id}>
              <h2>{user.name}</h2>
              <p>{user.course}</p>
            </div>
          )
        })}
      </div>
      <button onClick={() => router.push(`/usersPage/${userId}`)}>
        Buscar
      </button> 
    </div>
  )
}