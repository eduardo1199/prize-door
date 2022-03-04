import { useRouter } from 'next/router';

export default function Product () {

  const { query } = useRouter();
  const idProduct = Number(query.id ?? '');

  console.log(query.id);

  return (
    <h1>
      Page of product {idProduct === 0 ? 'loading...': idProduct}
    </h1>
  )
}