import React from 'react'
import styled from 'styled-components'


// Styled Components. CSS directly inside of Component File

const CandorQuestion = styled.p` 
  font-family: AzoSans-medium;
  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.5;
  letter-spacing: normal;
  -webkit-font-smoothing: antialiased;
  color: #4f505b;
`

//Component
const TextStyle = props => (

		<CandorQuestion>{props.title}</CandorQuestion>	
)

export default TextStyle