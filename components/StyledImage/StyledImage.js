import Image from 'next/image'
import styled from 'styled-components'

export default function StyledImage({src, caption}){

  return(
    <Wrapper>
      <FigureWrapper>
        <Image
          alt={src}
          src={`/photos/${src}`}
          layout="intrinsic"
          layout="fill"
          objectFit="cover"
        />
      </FigureWrapper>
      <Figcaption><strong>{caption}</strong></Figcaption>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: block;
  margin: 1rem 0;
  @media(max-width:425px){
    display:block;
    padding: .5rem 0;

  }
`
const FigureWrapper = styled.figure`
  position: relative;
  display:inline-block;
  width: 100%;
  height: 40rem;
  @media(max-width:768px){
    height:15rem;
  }
  @media(max-width:425px){
    height:12rem;
  }
`
const Figcaption = styled.figcaption`
  border-top: 1px solid black;
  margin-top:.5rem;
  display:block;
  text-align:left;
`