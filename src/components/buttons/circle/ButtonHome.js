import React from 'react'
import styled from 'styled-components'


// Styled Components. CSS directly inside of Component File

const ButtonHome = styled.div` 
	background-color: rgba(11,11,11,0.20);
	position: absolute;
	width: 48px;
	height: 48px;
	border-radius: 50%;
	transition: 0.4s cubic-bezier(0.2, 0.8, 0.2, 1);
	

    &:active {
    background-color: white;
    }

`
const HomeIcon = styled.img`
	padding: 13px;
    
    transition: 0.4s cubic-bezier(0.2, 0.8, 0.2, 1);
	

    &:active {
    fill: green !important;
    }
`


//Component
const Button = props => (

		<ButtonHome>
			<HomeIcon src={require('../../../../public/icons/home-active.svg')}  />

		</ButtonHome>	
)

export default Button