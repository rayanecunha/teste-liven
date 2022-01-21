import Head from 'next/head'
import Layout, { siteTitle } from '../templates/layout'
import { GetServerSideProps } from 'next'
import { getProducts } from "../services/api"
import Shelf from "../components/Shelf"

export type ProductsProps = {
  products: {
    id: number;
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
        <title>{siteTitle} | Produtos</title>
      </Head>
      <Shelf products={products} />
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
