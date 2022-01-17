import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import { GetServerSideProps } from 'next'

export default function Home({
  allPostsData
}: {
  allPostsData: {
    date: string
    title: string
    id: string
  }[]
}) {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {
      
    }
  }
}
