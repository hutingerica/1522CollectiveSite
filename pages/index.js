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

        <TypingandTheme>
          <TypedArea>
            <Typing/>
          </TypedArea>
          <ThemeItems>
            <StyledTitle>
              <Link href="/theme"><a>Theme</a></Link>
            </StyledTitle>
            <Themes>
            {themes.map(({slug, title, slogan, heroimage}) => (
              <Link href={`/theme/${slug}`}>
                <ThemeItem>
                  <Image
                    priority
                    block
                    src={`/icons/index-${slug}.png`}
                    height={50}
                    width={133}
                  />
                  <ThemeImage>
                    <Image
                      priority
                      src={heroimage}
                      layout="fill"
                      objectFit="cover"
                    />
                    <ThemeSlogan>
                      <p>{title}</p>
                      <p>{slogan}</p>
                    </ThemeSlogan>
                  </ThemeImage>
                </ThemeItem>
              </Link>
            ))}
            </Themes>
            <ThemeBackground></ThemeBackground>
          </ThemeItems>
        </TypingandTheme>
        <RecentBit>
          <BitsTitle>
            <p>Recent Bits</p>
            <Link href="/"><a>All→</a></Link>
          </BitsTitle>
        <Wrapper>
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
        </Wrapper>
        </RecentBit>
    </Layout>
)}

const TypingandTheme = styled.section`
  position:relative;
`
const ThemeImage = styled.div`
  display: none;
  position:absolute;
  top:100%;
  left:0;
  width:100%;
  height:20rem;
  border-radius:0 0 16px 16px;
  overflow:hidden;
  box-sizing: content-box;
  margin: 0 -1px;
  border:1px solid #2c2c2c;
`
const ThemeSlogan = styled.div`
  display: none;
  position: sticky;
  top:100%;
  left:0;
  margin: 1.5rem;


  p{
    width: fit-content;
    font-size: 1.5rem;
    margin: -1px;
    padding: .5rem 1rem;
    background-color: #F3F597;
    font-variation-settings: 'wght' 500;
    line-height: 1.25;
    letter-spacing: -0.02em;
    border-radius: 8px 8px 0 0;
    border: 1px solid #2c2c2c;
  }
  p:last-of-type{
    width: fit-content;
    font-size: 2rem;
    margin: -1px;
    padding: .5rem 1rem;
    background-color: #F3F597;
    font-variation-settings: 'wght' 700;
    line-height: 1.25;
    letter-spacing: -0.02em;
    border-radius: 0 8px 8px 8px;
    border: 1px solid #2c2c2c;
  }
`
const Themes = styled.ul`
  width:100%;
  display:flex;
  justify-content:space-between;
  margin:0;
  position: relative;
`
const ThemeItem = styled.li`
  width: 25%;
  cursor: pointer;
  margin:-1px;
  padding:1.5rem 0;
  border:1px solid transparent;
  box-sizing: content-box;

  &:hover {
    border: 1px solid #2c2c2c;
    background-color: #00ffff;

    ${ThemeSlogan}{
      display:inline-block;
    }
    ${ThemeImage}{
      display:block;
    }
  }
`
const ThemeItems = styled.div`
  background-color: #FAFAFA;
  width:40%;
  position:absolute;
  top:10rem;
  right:0;
  display: block;
  border-radius:16px;
  overflow:hidden;
  border: 1px solid #2c2c2c;
  scroll-snap-stop: always;

`
const ThemeBackground = styled.div`
  background-color: #F3F597;
  height:20rem;
  border-top:1px solid #2c2c2c;
`
const TypedArea = styled.div`
  background-color: #2C2C2C;
  color: #FAFAFA;
  width: 65%;
  min-height: 30rem;
  margin: 5rem 0;
  border-radius: 16px;
  padding:40px;
  padding-right:80px;
  font-size: 3rem;
  font-variation-settings: 'wght' 700;
  line-height: 140%;
  letter-spacing: 0.02em;

`
const StyledTitle = styled.div`
  display: flex;
  justify-content: center;
  padding: .5rem 1.5rem;
  border-bottom: 1px solid #2c2c2c;
  p, a{
  margin:0;
  font-size: 1rem;
  font-variation-settings: 'wght' 400;
  line-height:130%;
  }
`
const RecentBit = styled.section`
  margin-top: 16rem;
  width: 70%;
`
const BitsTitle = styled(StyledTitle)`
  border-radius:8px;
  border: 1px solid #2c2c2c;
  background-color: #F3F597;
  justify-content:space-between;

`
const Wrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin:-.25rem;
  margin-top:.25rem;
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
  width: 50%;
  padding: .25rem;
  border: 1px solid transparent;
  margin:0;
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
  height: 24rem;
  border-radius: 8px;
  overflow: hidden;
`