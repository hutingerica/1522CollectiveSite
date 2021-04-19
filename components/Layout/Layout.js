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

export default function Layout({ children}) {
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
              <a>
              <Image
                priority
                src="/logo.png"
                alt={meta.siteTitle}
                height={30}
                width={271}
              />
              </a>
            </Link>
            <NavWrapper>
            <Link href="/about"><a>About</a></Link>
            <Link href="/bit"><a>Bit</a></Link>
            </NavWrapper>
          </HomeHeader>
      <main>{children}</main>
    </LayoutWrapper>
  )
}

const LayoutWrapper = styled.div`
  max-width: 84rem;
  margin: 0 auto;
`
const HomeHeader = styled.div`
  margin: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

`
const NavWrapper = styled.div`
    a {
    margin-left: 1rem;
  }
`