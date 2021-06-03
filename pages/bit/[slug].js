import Head from 'next/head'
import Image from 'next/image'
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
        <BriefWrapper>
          {frontMatter.theme} | {frontMatter.stage}
          <h1>{frontMatter.title}</h1>
          {frontMatter.readingTime.text}
          {frontMatter.date}
        </BriefWrapper>
        <ContentWrapper>
          <LeftWrapper><h3>{frontMatter.description}</h3></LeftWrapper>
          <MidWrapper>
            <ImageWrapper>
              <Image priority src={frontMatter.heroImage} layout="fill" objectFit="cover"/>
            </ImageWrapper>
            {content}
          </MidWrapper>
          <RightWrapper></RightWrapper>
        </ContentWrapper>
      </Wrapper>
    </Layout>)
}

const Wrapper = styled.div`
  margin: 6rem 4rem;
  display: flex;
  flex-direction: column;
  p img {
    margin: 0rem auto 2rem;
  }
`
const BriefWrapper = styled.section`
  display:flex;
  flex-direction: column;
`
const ContentWrapper = styled.section`
  display:flex;
  justify-content:flex-start;
  margin-top: 2rem;
`
const LeftWrapper = styled.div`
  width:20%;
`
const MidWrapper = styled.div`
  width:60%;
  margin: 0 2rem;
  
`
const ImageWrapper = styled.div`
  position:relative;
  height: 30rem;
`
const RightWrapper = styled.div`
  width: 20%;
  background-color: black;
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