import Layout from '../components/Layout'
import styled from 'styled-components'
import Image from 'next/image'
import Head from 'next/head'
import { getAllFilesFrontMatter } from '../lib/mdx'

export async function getStaticProps() {
  const themes = await getAllFilesFrontMatter('theme')

  return { props: { themes } }
}

export default function About({themes}){
  return (
    <Layout home>
      <Head>
        <title>About</title>
        <link rel="icon" href="favicon.ico" />
      </Head>

      <Wrapper>
      <Title>About us</Title>
      <SubtitleWithLine>
        <Line/>
        <Subtitle>We are a design collective run two designers at the heart. We work on planet friendly solutions that you love.</Subtitle>
      </SubtitleWithLine>
      <VisionWrapper>
        <Subtitle>Vision</Subtitle>
        <Content>Learning from earthworms that loosen the soil and enhance porosity so that plants can root deeper, we envision 1522 Collective contributes to our futures by breaking the silos and creating new connections. We focus on creating lightweight engagements to future food, education, work and democracy that everyone can take part in:</Content>
      </VisionWrapper>
      {themes.map(({slug, vision, icon, title}) => (
          <ThemeWrapper key={slug}>
              <ThemeIcon>
                <Image fixed src={icon} height={35} width={50}/>
              </ThemeIcon>
              <ThemeText>
                <Subtitle>{title}</Subtitle>
                <Content>{vision}</Content>
              </ThemeText>
          </ThemeWrapper>
      ))}
      <Title>Join us</Title>
      <SubtitleWithLine>
        <Line/>
        <Subtitle>1522 Collective welcomes anyone who is interested in joining us working like “earthworms” of our futures. Let’s make complex problems straightforward, persent available solutions, and engage people on the planet with charming experiences.</Subtitle>
      </SubtitleWithLine>
      </Wrapper>
    </Layout>
  )
}

const Wrapper = styled.div`
  margin: 4rem 8rem;
`
const Title = styled.p`
  //styleName: H1;
  font-size: 40px;
  font-variation-settings: 'wght' 700;
  line-height: 1.25;
  letter-spacing: -0.02em;
`
const SubtitleWithLine = styled.div`
  display: flex;
  align-items: center;
  padding: 1.5rem 0;
`
const Line = styled.div`
  margin-right:1.5rem;
  min-width: 2rem;
  flex: 1 99999;
  height: 2.4px;
  background-color: hsl(0deg 0% 17% / 100%);
`
const Subtitle = styled.p`
  //styleName: Title;
  flex:0 1 60%;
  font-size: 16px;
  font-variation-settings: 'wght' 700;
  line-height: 1.7;
  letter-spacing: 0em;
`
const Content =styled.p`
  //styleName: Body;
  font-size: 16px;
  font-variation-settings: 'wght' 400;
  line-height: 1.7;
  letter-spacing: 0em;
`
const VisionWrapper = styled.div`
  padding:4rem 8rem;
`
const ThemeWrapper = styled.div`
  padding: 0 8rem 2rem;
  display: flex;
  justify-content: flex-start;

  &::last-of-type {
    padding-bottom:4rem;
  }
`
const ThemeText = styled.div`
  margin-left: 2rem;
  flex:1;
`
const ThemeIcon =styled.div`
  flex:0 0;
  flex-basis:50px;
  padding-top:0.3rem;
`

