import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Layout from '../components/Layout'
import { getAllFilesFrontMatter } from '../lib/mdx'
import styled from 'styled-components'

export async function getStaticProps() {
  const bits = await getAllFilesFrontMatter('bit')
  return { props: {bits} }
}

export default function Bit({ bits }){
  return(
  <Layout>
      <Head>
        <title>Bits</title>
        <link rel="icon" href="favicon.ico" />
      </Head>
      <Wrapper>
        <Title>Bits</Title>
        <BitWrapper>
          {bits.map(({ slug, heroImage, title, description, theme, stage }) => (
            <ListBit key={slug}>
              <Link href={`/bit/${slug}`}>
                      <a>
                        <BitImage>
                          <Image src={heroImage} layout="fill" objectFit="cover" />
                        </BitImage>
                        <BitContent>
                          <p>{theme} | {stage}</p>
                          <p>{title}</p>
                          <p>{description}</p>
                        </BitContent>
                      </a>
              </Link>
            </ListBit>
          ))}
        </BitWrapper>
      </Wrapper>
  </Layout>
  )}

  const Wrapper = styled.div`
  margin: 6rem 0;
`
const Title = styled.p`
  //styleName: H1;
  font-size: 40px;
  font-variation-settings: 'wght' 700;
  line-height: 1.25;
  letter-spacing: -0.02em;
  margin-bottom: 4rem;
`
const BitWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin: -.5rem;
  margin-top:.5rem;
`
const BitContent = styled.div`
  display:flex;
  flex-direction: column;
  align-items:flex-start;
  margin: 1.5rem;
  width: -webkit-fill-available;
  position: absolute;
  bottom:0;

  p{
    width: 100%;
    font-size: 1.5rem;
    margin: -1px;
    padding: .4rem .75rem;
    background-color: #fafafa;
    font-variation-settings: 'wght' 700;
    line-height: 1.25;
    letter-spacing: -0.02em;
    border-radius: 0 8px 0 8px;
    border: 1px solid #2c2c2c;
  }
  p:first-of-type{
    width: fit-content;
    font-size: 1rem;
    margin: -1px;
    font-variation-settings: 'wght' 400;
    border-radius: 8px 8px 0 0;
  }
  p:last-of-type{
    align-self:flex-end;
    width: fit-content;
    max-width: 80%;
    font-size: 1rem;
    margin: -.5px 1px;
    font-variation-settings: 'wght' 400;
    border-radius: 0 0 8px 8px;
  }
  `
const ListBit = styled.li`
  width: 33.3%;
  padding: .5rem;
  border: 1px solid transparent;
  margin:0;

  &:nth-of-type(1),
  &:nth-of-type(2){
    width:50%;
  }


  a{
    display:block;
    height: 100%;
    width:100%;
    position:relative;
  }

  &:hover {
    ${BitContent} p{
      background-color: #F3F597;
      color: #2c2c2c;
    }
  }
`
const BitImage = styled.div`
  position: relative;
  width: 100%;
  height: 28rem;
  border-radius: 8px;
  overflow: hidden;
`