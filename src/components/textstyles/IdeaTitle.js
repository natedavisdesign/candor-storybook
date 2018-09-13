import React from 'react'
import styled from 'styled-components'


// Styled Components. CSS directly inside of Component File

const IdeaTitle = styled.p` 
  font-family: "azo-sans-web";
  font-size: 24px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  -webkit-font-smoothing: antialiased;
  color: #4f505b;
`

//Component
const TextStyle = props => (

		<IdeaTitle>{props.title}</IdeaTitle>	
)

export default TextStyle