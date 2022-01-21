import Head from 'next/head'
import Layout, { siteTitle } from '../templates/layout'
import CartList from "../components/CartList"

export default function Cart() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle} | Carrinho</title>
      </Head>
      <h1>Carrinho</h1>
      <CartList />
    </Layout>
  )
}

