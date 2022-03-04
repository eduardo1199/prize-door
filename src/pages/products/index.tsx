import Link from 'next/link';

export default function Products () {
  return (
    <>
      <h1>
        Page of products
      </h1>
      <div>
        <Link href="/products/158">
          <a>navigation from product id</a>
        </Link>
      </div>
    </>
  )
}