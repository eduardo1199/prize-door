import Link from 'next/link';
import router from 'next/router';
import { ParsedUrlQueryInput } from 'querystring';
import styles from '../styles/home.module.scss';

export default function Home() {

  const handleToPageProducts = (path: string) => {
    router.push(path);
  }

  const handleToUsers = (path: string) => {
    router.push(path);
  }

  return (
    <div>
      <h1>Hello word</h1>

      <div className={styles.container}>
        <button onClick={() => handleToPageProducts("/products")}>
          <a>navegation from products</a>
        </button>
        <button onClick={() => handleToUsers("/usersPage")}>
          <a>navegation from user</a>
        </button>
      </div>
    </div>
  )
}
