import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Layout from '../components/Layout'
import { getAllFilesFrontMatter } from '../lib/mdx'

import styled from 'styled-components'
import Typing from '../components/Typing'

export async function getStaticProps() {
  const bits = await getAllFilesFrontMatter('bit')
  const themes = await getAllFilesFrontMatter('theme')

  return { props: { bits,themes } }
}

export default function Home({bits, themes}) {
  return (
    <Layout home>
      <Head>
        <title>1522 Collective</title>
        <link rel="icon" href="favicon.ico" />
      </Head>

      <main>
        <TypedArea>
          <Typing/>
        </TypedArea>
        <StyledTitle>
          <p>Theme</p><Line/>
        </StyledTitle>
        <ThemeItems>
          {themes.map(({slug, title, slogan}) => (
            <Link href={`/theme/${slug}`}>
              <ThemeItem>
                <Image
                  priority
                  block
                  src={`/icons/index-${slug}.png`}
                  height={50}
                  width={133}
                />
                <p>{title}</p>
                <ThemeSlogan><p>{slogan}</p></ThemeSlogan>
              </ThemeItem>
            </Link>
          ))}
        </ThemeItems>
        <StyledTitle>
          <p>Recent bits</p>
        </StyledTitle>
        <Wrapper>
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
        </Wrapper>
      </main>
    </Layout>
)}

const ThemeSlogan = styled.div`
  display: none;
  position: absolute;
  top:20%;
  right:0;
  max-width: 24rem;
  margin: 0 4rem;

  p{
    font-size: 40px;
    font-variation-settings: 'wght' 700;
    line-height: 1.25;
    letter-spacing: -0.02em;
  }
`
const ThemeItem = styled.div`
  padding: 32px 12px;
  cursor: pointer;
  border: 2.4px solid transparent;
  margin-right: 1rem;
  &::last-child {
    margin-right: 4.5rem;
  }

  p{
    font-size:24px;
    line-height:1.25;
    letter-spacing:-0.02rem;
    width: fit-content;
    margin: 0 auto;
    margin-top:3px;
  }

  &:hover {
    border: 2.4px solid hsl(0deg 0% 17% / 100%);
    background-color: hsl(0deg 0% 100% / 50%);

    ${ThemeSlogan}{
      display:block;
    }
  }
`
const ThemeItems = styled.div`
  display: flex;
  position: relative;
  margin: 1rem 8rem;
  margin-left:0;
  margin-bottom: 9rem;
`
const TypedArea = styled.div`
  width: 100%;
  min-height: 24rem;
  margin: 16rem 0 8rem;
  font-size: 96px;
  font-variation-settings: 'wght' 500;
  line-height: 120px;
  letter-spacing: -0.02em;
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
const Line = styled.div`
  width:50%;
  height: 2.4px;
  background-color: hsl(0, 0%, 17%);
  margin-top: 3px;
  margin-left: 1rem;
`

const Wrapper = styled.ul`
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