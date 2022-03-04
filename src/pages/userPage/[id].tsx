import { useRouter } from 'next/router';

export default function UserPage () {

  const { query } = useRouter();
  const idUserParams = Number(query.id ?? '');

  console.log(query.id);

  return (
    <h1>
      Page of user {idUserParams === 0 ? 'loading...': idUserParams}
    </h1>
  )
}