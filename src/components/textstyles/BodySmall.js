import React from 'react'
import styled from 'styled-components'


// Styled Components. CSS directly inside of Component File

const BodySmall = styled.p` 
  font-family: "azo-sans-web";
  font-size: 14px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.43;
  letter-spacing: normal;
  -webkit-font-smoothing: antialiased;
  color: #4f505b;
`

//Component
const TextStyle = props => (

		<BodySmall>{props.title}</BodySmall>	
)

export default TextStyle