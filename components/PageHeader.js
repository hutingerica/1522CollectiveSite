import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'

export default function PageHeader(){
  return (
      <HeaderWrapperSmall>
          <Link href="/">
            <LogoWrapper>
              <Image
                priority
                src="/logo.png"
                alt="1522 Collective"
                height={36}
                width={116.06}
              />
              {/* <LogoFontStyle>1522 Collective</LogoFontStyle> */}
            </LogoWrapper>
          </Link>
          <NavWrapper>
            <Link href="/about"><a>About</a></Link>
            <Link href="/bit"><a>Bits</a></Link>
          </NavWrapper>
      </HeaderWrapperSmall>
  )
}

const LogoWrapper = styled.a`
  text-decoration: none;
  cursor: pointer;
  display:flex;
  justify-content:center;
  margin: 0 auto;
  /* border-radius: 5px; */
  /* border: 1px solid transparent; */

  &:hover {
    /* background-color: lightgoldenrodyellow;
    border: 1px solid lightslategray; */
    text-decoration: none;
    color: hsla(0, 0%, 17%, 0.6);
  }
`
const HeaderWrapperSmall = styled.header`
  position: fixed;
  padding: 1rem ;
  border-bottom: 1px solid black;
  width:100%;
  top:0;
  left:0;
  z-index:9999;
  background-color:hsla(0, 0%, 98%, .90);
  backdrop-filter:blur(1.5rem) grayscale(100%);
`
const NavWrapper = styled.nav`
  display:flex;
  align-items: center;
  position: absolute;
  top:1rem;
  right:1rem;
    a {
        color: hsla(0, 0%, 17%, 1);
        font-size: 1rem;
        font-variation-settings: 'wght' 600;
        letter-spacing: 0.05em;
        margin-left: 24px;
        padding: 3px 6px;
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