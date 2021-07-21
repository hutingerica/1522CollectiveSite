import Head from 'next/head'
import styled from 'styled-components'
import Header from '../Header'
import PageHeader from '../PageHeader'

const meta = {
  siteTitle: "1522 Collective",
  description: "1522 Collective",
  image: "/logo.png",
  favIcon:"/favicon.ico"
}

export default function Layout({children, home}) {
  return (
    <LayoutWrapper>
      <Head>
        <link rel="icon" href= {meta.favIcon}/>
        <meta name="description" content={meta.description}/>
        <meta property="og:image" content={meta.image}/>
        <meta name="og:title" content={meta.siteTitle}/>
      </Head>
      {home? (<Header/>) : (<PageHeader/>)}
      <main>{children}</main>
    </LayoutWrapper>
  )
}

const LayoutWrapper = styled.div`
  padding: 40px;
  margin:70px auto 0;
  position:relative;
`
const LogoFontStyle = styled.p`
  font-size: 1.5rem;
  color: hsla(0, 0%, 17%, 1);
  font-variation-settings: 'wght' 600;
  line-height: 36px;
  letter-spacing: 0.02rem;
  margin:0 8px 0 2px;

  &:hover {
    text-decoration: none;
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