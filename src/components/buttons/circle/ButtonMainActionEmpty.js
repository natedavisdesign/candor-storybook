import React from 'react'
import styled from 'styled-components'

// Styled Components. CSS directly inside of Component File

const ButtonMainActionEmpty = styled.div` 
	background-color: white;
	width: 48px;
	height: 48px;
	border-radius: 50%;
	box-shadow: 0 2px 8px 0 rgba(0,0,0,0.20);
	transition: 0.4s cubic-bezier(0.2, 0.8, 0.2, 1);
	
    &:active {
    box-shadow: 0 10px 22px rgba(0, 0, 0, 0);
    }
`
const AddIcon = styled.img`
	padding: 14px;
`



//Component
const Button = props => (

       
		<ButtonMainActionEmpty>
			<AddIcon src={require('../../../../public/icons/plus.svg')}  />
		</ButtonMainActionEmpty>
		

)

export default Button

