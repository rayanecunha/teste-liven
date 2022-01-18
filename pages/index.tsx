import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import { GetServerSideProps } from 'next'
import { getProducts } from "../services/api"

type ProductsProps = {
  products: {
    price: string;
    name: string;
    image: string;
    stock: number;
  }[]
}

export default function Home({ products }: ProductsProps) {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      {products?.map(item => 
        <div>
          <img src={item?.image}/>
          <p>{item?.name}</p>
          <p>{item?.price}</p>
          <p>{item?.stock}</p>
        </div>
      )}
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const data = await getProducts().then(response => {
    return response.json().then(data => ({
      data: data,
      status: response.status
    }));
  }).then(res => res.data);

  return {
    props: {
      products: data
    }
  }
}
