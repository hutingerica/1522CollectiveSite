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
        <BitsWrapper>
          {bits.map(({ slug, heroImage, title, date, theme, stage }) => (
            <ListBit key={slug}>
              <Link href={`/bit/${slug}`}>
                      <a>
                        <ItemTitle>{title}</ItemTitle>
                        <Tags>
                          <p>{stage}</p>
                          <p>{theme}</p>
                          <p>{date}</p>
                        </Tags>
                        <ImageWrapper>
                          <Image src={`${heroImage}`} layout="fill" objectFit="cover" />
                        </ImageWrapper>
                      </a>
              </Link>
            </ListBit>
          ))}
        </BitsWrapper>
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
const StyledTitle = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem 0;
  p{
    font-size: 1rem;
    font-variation-settings: 'wght' 500;
    line-height:1.7;
    margin: 0.5rem 0;
  }
`
const BitsWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  margin:-1rem;
`
const ListBit = styled.li`
  width: 33.3%;
  padding: 1rem;
  border: 1px solid transparent;
  margin-bottom: 2rem;

  a{
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  &:hover {
    border: 1px solid transparent;
  }
`
const ImageWrapper = styled.div`
  position: relative;
  min-width: 240px;
  min-height: 320px;
  flex: 1;

`
const ItemTitle = styled.p`
    letter-spacing: -0.02rem;
    font-size: 24px;
    line-height: 1.25;
    margin-bottom: 0.5rem;
    font-variation-settings: 'wght' 700;
`
const Tags = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  margin-bottom: 0.5rem;
  margin-left: -0.5rem;
  p {
      font-size: 14px;
      font-weight: 700;
      line-height: 24px;
      letter-spacing: 0em;
      margin-left: 0.5rem;
      &::before{
        content:'|';
        padding-right:0.5rem;
      }

  }
`