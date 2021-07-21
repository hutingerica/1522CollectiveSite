import styled from 'styled-components'

export default function Quote({quote, name}){

  return(
    <Wrapper>
      <Shape>
      <QuoteText>{quote}</QuoteText>
      <QuoteName> -{name}- </QuoteName>
      </Shape>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  margin: 3rem 10rem;
  padding: 0 3rem;
  border-radius: 1rem;
  border: 1px solid black;
  border-left: 8px solid black;
  border-bottom: 8px solid black;


`
const Shape = styled.div`
  display:flex;
  flex-direction: column;
  padding:1rem;
`
const QuoteText = styled.h2`
  line-height:1.7;
  font-style: italic;
  margin:0;
`
const QuoteName = styled.h6`
  margin:0;
`