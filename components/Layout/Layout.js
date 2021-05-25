import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'

const meta = {
  siteTitle: "1522 Collective",
  description: "1522 Collective",
  image: "/logo.png",
  favIcon:"/favicon.ico"
}

export default function Layout({children}) {
  return (
    <LayoutWrapper>
      <Head>
        <link rel="icon" href= {meta.favIcon}/>
        <meta name="description" content={meta.description}/>
        <meta property="og:image" content={meta.image}/>
        <meta name="og:title" content={meta.siteTitle}/>
      </Head>
      <HomeHeader>
        <Link href="/">
          <LogoWrapper>
            <Image
              priority
              src="/logo.png"
              alt={meta.siteTitle}
              height={30}
              width={30}
            />
            <LogoFontStyle>1522 Collective</LogoFontStyle>
          </LogoWrapper>
        </Link>
        <NavWrapper>
          <Link href="/about"><a>About</a></Link>
          <Link href="/bit"><a>Bits</a></Link>
        </NavWrapper>
      </HomeHeader>
      <main>{children}</main>
      <Footer>
        <Link href="/">
          <LogoWrapper>
            <Image
              priority
              src="/logo.png"
              alt={meta.siteTitle}
              height={30}
              width={30}
            />
          <FooterFontStyle>1522 Collective</FooterFontStyle>
          </LogoWrapper>
        </Link>
      </Footer>
    </LayoutWrapper>
  )
}

const LayoutWrapper = styled.div`
  padding: 0 40px;
  max-width: 90rem;
  margin:0 auto;
`
const LogoFontStyle = styled.p`
  font-size: 24px;
  color: hsla(0, 0%, 17%, 1);
  font-variation-settings: 'wght' 500;
  line-height: 30px;
  letter-spacing: -0.02rem;
  margin:0 8px 0 2px;

  &:hover {
    text-decoration: none;
  }
`
const LogoWrapper = styled.a`
  text-decoration: none;
  display: flex;
  align-items: center;
  cursor: pointer;

  &:hover {
    text-decoration: none;
    color: hsla(0, 0%, 17%, 0.6);
  }
`
const HomeHeader = styled.header`
  padding: 1.5rem 0;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`
const NavWrapper = styled.div`
    a {
        color: hsla(0, 0%, 17%, 1);
        font-size: 16px;
        font-variation-settings: 'wght' 500;
        line-height: 27px;
        letter-spacing: 0em;
        margin-left: 24px;

        &:hover {
        text-decoration: none;
        color: hsla(0, 0%, 17%, 0.6);
        }
  }
`
const Footer = styled.footer`
  padding: 1.5rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
`
const FooterFontStyle = styled.p`
  font-size: 16px;
  font-variation-settings: 'wght' 700;
  line-height: 1.7;
  letter-spacing: 0em;
`