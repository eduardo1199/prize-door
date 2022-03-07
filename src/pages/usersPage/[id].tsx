import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

type User = {
  id: number,
  name: string,
  course: string
}

export default function UserPage () {
  const [user, setUser] = useState<User>();
  const { query } = useRouter();

  useEffect(() => {
    fetch(`http://localhost:3000/api/users/${query.id}`).then(response => response.json()).then(usersJson => setUser(usersJson));
  }, [query])

  return (
    <div>
      <h1>{user?.name}</h1>
      <p>{user?.course}</p>
    </div>
  )
}