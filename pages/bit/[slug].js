import Head from 'next/head'
import Image from 'next/image'
import Layout from '../../components/Layout'
import hydrate from 'next-mdx-remote/hydrate'
import { getFiles, getFileBySlug } from '../../lib/mdx'
import MDXComponent from '../../components/MDXComponent'
import styled from 'styled-components'
import {useEffect, useState} from 'react'


export default function Blog({ mdxSource, frontMatter }) {
  const [small, setSmall] = useState(false);
  useEffect(()=>{
    if(typeof window !== "undefined") {
      window.addEventListener("scroll", () => setSmall(window.pageYOffset > 200));
    }
  },[]);

  const content = hydrate(mdxSource, {
    components: MDXComponent
})

  return (
    <Layout>
      <Head>
        <title>{frontMatter.title}</title>  
      </Head>
      <Wrapper>
        {small? <BriefSpace/> :
           (
            <BriefWrapper>
              <h1>{frontMatter.title}</h1>
              <h2>{frontMatter.description}</h2>
              <strong>{frontMatter.date}</strong>
              <ImageWrapper>
                  <Image priority src={frontMatter.heroImage} layout="fill" objectFit="cover"/>
              </ImageWrapper>
              <Smallinfo>
                <strong>{frontMatter.theme} | {frontMatter.stage}</strong>
                <strong>{frontMatter.readingTime.text}</strong>
              </Smallinfo>
            </BriefWrapper>
           )
        }

        <ContentWrapper>
          <LeftWrapper>
            {small ? (
            <SmallBriefWrapper>
              <h1>{frontMatter.title}</h1>
              <h2>{frontMatter.description}</h2>
              <SmallImageWrapper>
                  <Image priority src={frontMatter.heroImage} layout="fill" objectFit="cover"/>
              </SmallImageWrapper>
              <Smallinfo>
                <strong>{frontMatter.date}</strong>
                <strong>{frontMatter.theme} | {frontMatter.stage}</strong>
                <strong>{frontMatter.readingTime.text}</strong>
              </Smallinfo>
            </SmallBriefWrapper>
            ) : (null)}
            <Info>
              <LeftWrapperTitle>{frontMatter.info}</LeftWrapperTitle>
            </Info>
            <LeftWrapperTitle>Tag</LeftWrapperTitle>
            <Tag>{frontMatter.tag}</Tag>  
            <LeftWrapperTitle>By {frontMatter.by}</LeftWrapperTitle>

          </LeftWrapper>
          <MidWrapper>
            {content}
          </MidWrapper>
        </ContentWrapper>
      </Wrapper>
    </Layout>)
}

const Wrapper = styled.div`
  margin-top:40px;
  display: flex;
  flex-direction: column;
  img {
    margin: 2rem auto;
  }
`
const BriefWrapper = styled.section`
  display:flex;
  flex-direction: column;
  align-items:center;

  h1{
    font-size:3.6rem;
  }
  h2{
    margin-top:0;
  }
  strong{
    margin:0;
  }
`
const SmallBriefWrapper = styled.section`
  display:flex;
  flex-direction: column;
  margin-bottom: 2rem;
  h1{
    margin-top:0;
  }
  h2{
    margin-top:0;
  }
  strong{
    margin:0;
  }
`
const BriefSpace = styled.div`
  margin-top: 8.8rem;
`
const Smallinfo = styled.div`
  display:flex;
  width:100%;
  justify-content: space-between;
`
const Tag = styled.a`
  border-radius: 6px;
  margin:0;
  display:inline-block;
  font-size:.8rem;
  padding: 0 3px;
  border: 1px solid black;
  border-left: 3px solid black;
  border-bottom: 3px solid black;

`
const Info = styled.section`
  border: 1px solid black;
  border-left: 3px solid black;
  border-bottom: 3px solid black;

  background-color: white;
  border-radius: 8px;
  margin: 0 0 2rem;
  padding: 1rem;

  p{
    margin-top:0.5rem;
  }
`
const ContentWrapper = styled.section`
  display:flex;
  justify-content:space-between;
  margin-top: 3.6rem;
  position:relative;
`
const LeftWrapper = styled.div`
  width:25%;
  margin-right: 1rem;
  text-align:left;
  position: absolute;
  
`
const LeftWrapperTitle = styled.p`
  font-size:.8rem;
  margin:.8rem 0 0;
  opacity:.8;

  &:first-of-type {
    margin-top:0;
  }
`
const MidWrapper = styled.div`
  width:75%;
  max-height: 60rem;
  overflow: auto;
  scroll-behavior: smooth;
  padding: .5rem 1rem 1rem;
  text-align:left;
  position:absolute;
  right: -1rem;
  top: 0;

  ::-webkit-scrollbar { width: 0 ! important }

  p {
    margin: 3rem 0;

    &:first-of-type {
    margin-top:0;
    }
  }
`
const ImageWrapper = styled.div`
  position:relative;
  height: 30rem;
  width:100%;
  margin:1rem 0;
  border: 1px solid black;
`
const SmallImageWrapper = styled(ImageWrapper)`
  max-height: 15rem;
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