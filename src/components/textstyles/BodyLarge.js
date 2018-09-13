import React from 'react'
import styled from 'styled-components'


// Styled Components. CSS directly inside of Component File

const BodyLarge = styled.p` 
  font-family: "azo-sans-web";
  font-size: 18px;
  font-weight: 900;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.33;
  letter-spacing: normal;
  -webkit-font-smoothing: antialiased;
  color: #4f505b;
`

//Component
const TextStyle = props => (

		<BodyLarge>{props.title}</BodyLarge>	
)

export default TextStyle