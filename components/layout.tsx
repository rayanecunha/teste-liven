import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export const siteTitle = 'Loja Liven'

export default function Layout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Teste para Liven"
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header>
        <Link href="/">
          <a>Produtos</a>
        </Link>
        <Link href="/">
          <a>Carrinho</a>
        </Link>
      </header>
      <main>{children}</main>
    </>
  )
}
