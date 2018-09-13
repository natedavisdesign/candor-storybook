import React from 'react'
import styled from 'styled-components'


// Styled Components. CSS directly inside of Component File

const BodyMedium = styled.p` 
  font-family: "azo-sans-web";
  font-size: 16px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.38;
  letter-spacing: normal;
  -webkit-font-smoothing: antialiased;
  color: #4f505b;
`

//Component
const TextStyle = props => (

		<BodyMedium>{props.title}</BodyMedium>	
)

export default TextStyle