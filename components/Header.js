import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'
import {useEffect, useState} from 'react'

export default function Header(){
  const [small, setSmall] = useState(false);

  useEffect(()=>{
    if(typeof window !== "undefined") {
      window.addEventListener("scroll", () => setSmall(window.pageYOffset > 200));
    }
  },[]);

  return (
    <Wrapper>
    {small? (
    <HeaderWrapperSmall>
        <Link href="/">
          <LogoWrapper>
            <Image
              priority
              src="/logo.png"
              alt="1522 Collective"
              height={35}
              width={112.83}
            />
            {/* <LogoFontStyle>1522 Collective</LogoFontStyle> */}
          </LogoWrapper>
        </Link>
        <NavWrapper>
          <Link href="/about"><a>About</a></Link>
          <Link href="/bit"><a>Bits</a></Link>
        </NavWrapper>
    </HeaderWrapperSmall>
    ):(
    <HeaderWrapper>
        <Link href="/">
          <LogoWrapper>
            <Image
              priority
              src="/logo.png"
              alt="1522 Collective"
              height={210}
              width={677}
            />
            {/* <LogoFontStyle>1522 Collective</LogoFontStyle> */}
          </LogoWrapper>
        </Link>
        <NavWrapper>
          <Link href="/about"><a>About</a></Link>
          <Link href="/bit"><a>Bits</a></Link>
        </NavWrapper>
    </HeaderWrapper>
    )}</Wrapper>)
}
const Wrapper = styled.div`
`
const LogoWrapper = styled.a`
  text-decoration: none;
  cursor: pointer;
  display:block;
  margin: 0 auto 0 0;
  /* border-radius: 5px; */
  /* border: 1px solid transparent; */

  &:hover {
    /* background-color: lightgoldenrodyellow;
    border: 1px solid lightslategray; */
    text-decoration: none;
    color: hsla(0, 0%, 17%, 0.6);
  }
`
const HeaderWrapper = styled.header`
  /* padding: 1.5rem 0; */
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  margin-bottom:1rem;
`
const HeaderWrapperSmall = styled.header`
  position: fixed;
  padding: 1rem 0;
  max-width:1348px;

  display:flex;
  width:100%;
  top:0;
  margin: 0 -1px;
  z-index:9999;
  border-radius:0 0 2px 2px;
  background-color:hsla(0, 0%, 98%, .90);
  backdrop-filter: blur(1.5rem) grayscale(100%);
`
const NavWrapper = styled.nav`
  display:inline-block;
    a {
        color: hsla(0, 0%, 17%, 1);
        font-size: 1rem;
        font-variation-settings: 'wght' 600;
        line-height: 36px;
        letter-spacing: 0.05em;
        margin-left: 24px;
        padding: 6px;
        border-radius: 5px;
        border: 1px solid transparent;

        &:hover {
        background-color: lightgoldenrodyellow;
        border: 1px solid lightslategray;
        text-decoration: none;
        color: hsla(0, 0%, 17%, 1);
        }
  }
`