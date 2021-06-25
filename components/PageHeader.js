import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'

export default function PageHeader(){
  return (
    <Wrapper>
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
    </Wrapper>
  )
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
const HeaderWrapperSmall = styled.header`
  position: fixed;
  padding: 1rem ;
  max-width:1348px;
  border-bottom: 1px solid transparent;
  display:flex;
  width:100%;
  top:0;

  margin: 0 -1px;
  z-index:9999;
  background-color:hsla(0, 0%, 98%, .90);
  backdrop-filter:blur(1.5rem) grayscale(100%);
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