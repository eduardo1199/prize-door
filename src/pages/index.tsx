import Link from 'next/link';

import styles from '../styles/home.module.scss';

export default function Home() {
  return (
    <div>
      <h1>Hello word</h1>

      <div className={styles.container}>
        <Link href="/products">
          <a>navegation from products</a>
        </Link>
        <Link href="/userPage/11">
          <a>navegation from user id</a>
        </Link>
      </div>
    </div>
  )
}
