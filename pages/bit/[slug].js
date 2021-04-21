import Head from 'next/head'
import Layout from '../../components/Layout'
import hydrate from 'next-mdx-remote/hydrate'
import { getFiles, getFileBySlug } from '../../lib/mdx'
import MDXComponent from '../../components/MDXComponent'
import styled from 'styled-components'

export default function Blog({ mdxSource, frontMatter }) {
  const content = hydrate(mdxSource, {
      components: MDXComponent
  })

  return (
    <Layout>
      <Head>
        <title>{frontMatter.title}</title>  
      </Head>
      <Wrapper>
      <h1>{frontMatter.title}</h1>
      {frontMatter.readingTime.text}
      {content}
      </Wrapper>
    </Layout>)
}

const Wrapper = styled.div`
  margin: 6rem 8rem;
  display: flex;
  flex-direction: column;
  p img {
    margin: 0rem auto 2rem;
  }

`



export async function getStaticPaths() {
  const bits = await getFiles('bit')

  return {
      paths: bits.map((p) => ({
          params: {
              slug: p.replace(/\.mdx/, '')
          }
      })),
      fallback: false
  }
}

export async function getStaticProps({ params }) {
  const bit = await getFileBySlug('bit', params.slug)

  return { props: bit }
}