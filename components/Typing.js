import Typed from 'react-typed'
import Styled from 'styled-components'

const words = [
  'We make complex concept straightforward, and charming. ;)',
  'We create provoking solutions that help people understand the problem better.',
  'We are two designers who enjoy our daily lives.',
  'We are one interaction designer and one service designer.',
  'We are two foodies.',
  'We are interested in food.',
  'We are interested in democracy.',
  'With you, we make a planet friendly future',
  'We believe designers should go beyond people center approach.',
  'We believe in lives centered design.',
  'We believe in people-planet approach.',
  'We believe in people on planet approach.',
  'We work on planet friendly solutions that you love.',
]

export default function Typing(){
  return <StyledTyped
            strings={words}
            typeSpeed={40}
            startDelay={40}
            loop
        />
}

const StyledTyped = Styled(Typed)`
  
  .typed-cursor {
        color: hsla(180, 100%, 50%, 1);
        opacity: 1;
        animation: typedjsBlink 0s infinite;
        -webkit-animation: typedjsBlink 0s infinite;
        animation: typedjsBlink 0s infinite;
    }

`

// forked from https://github.com/ssbeefeater/react-typed
