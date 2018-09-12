import React from 'react'
import styled from 'styled-components'


// Styled Components. CSS directly inside of Component File

const IdeaCreatorTitle = styled.p` 
  font-family: AzoSans-Medium;
  font-size: 14px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: 0.5px;
  -webkit-font-smoothing: antialiased;
  color: #4f505b;
`

//Component
const TextStyle = props => (

		<IdeaCreatorTitle>{props.title}</IdeaCreatorTitle>	
)

export default TextStyle