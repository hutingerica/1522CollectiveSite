import Head from 'next/head'
import Layout from '../../components/Layout'
import hydrate from 'next-mdx-remote/hydrate'
import { getFiles, getFileBySlug } from '../../lib/mdx'
import MDXComponent from '../../components/MDXComponent'

export default function Blog({ mdxSource, frontMatter }) {
  const content = hydrate(mdxSource, {
      components: MDXComponent
  })

  return (
    <Layout>
      <Head>
        <title>{frontMatter.title}</title>  
      </Head>
      <h1>{frontMatter.title}</h1>
      {frontMatter.readingTime.text}
      {content}
    </Layout>)
}



export async function getStaticPaths() {
  const themes = await getFiles('theme')

  return {
      paths: themes.map((p) => ({
          params: {
              slug: p.replace(/\.mdx/, '')
          }
      })),
      fallback: false
  }
}

export async function getStaticProps({ params }) {
  const theme = await getFileBySlug('theme', params.slug)

  return { props: theme }
}