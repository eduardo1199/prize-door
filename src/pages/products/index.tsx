import Link from 'next/link';
import  router from 'next/router';
import { ParsedUrlQueryInput } from 'querystring';

export default function Products () {

  const handleProduct = (path: string, query: string | ParsedUrlQueryInput) => {
    router.push({
      pathname: path,
      query: query
    })
  }

  return (
    <>
      <h1>
        Page of products
      </h1>
      <div>
        <button onClick={() => handleProduct("/products/", {name: 'tenis', id: 2} )}>
          <a>navigation from product id</a>
        </button>
      </div>
    </>
  )
}