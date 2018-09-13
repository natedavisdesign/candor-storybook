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
    box-shadow: 0 0px 0px rgba(0, 0, 0, 0);
	transform: rotate(45deg);
	transform-origin: 50% 50%;
    }

`
const AddIcon = styled.div`
	fill: #FF4C6F;
	transition: 0.4s cubic-bezier(0.2, 0.8, 0.2, 1);
	transform-origin: 50% 50%;

    &:active {
	
    }
`


//Component
const Button = props => (

	<ButtonMainActionEmpty>
	<AddIcon>
		<svg xmlns="http://www.w3.org/2000/svg" >
		<path d="M22.1444008,22.1444008 L22.1444008,15.3555992 C22.1444008,14.3307801 22.9751809,13.5 24,13.5 C25.0248191,13.5 25.8555992,14.3307801 25.8555992,15.3555992 L25.8555992,22.1444008 L32.6444008,22.1444008 C33.6692199,22.1444008 34.5,22.9751809 34.5,24 C34.5,25.0248191 33.6692199,25.8555992 32.6444008,25.8555992 L25.8555992,25.8555992 L25.8555992,32.6444008 C25.8555992,33.6692199 25.0248191,34.5 24,34.5 C22.9751809,34.5 22.1444008,33.6692199 22.1444008,32.6444008 L22.1444008,25.8555992 L15.3555992,25.8555992 C14.3307801,25.8555992 13.5,25.0248191 13.5,24 C13.5,22.9751809 14.3307801,22.1444008 15.3555992,22.1444008 L22.1444008,22.1444008 Z" id="icon-plus"></path>
		</svg>
	</AddIcon>
</ButtonMainActionEmpty>	
)

export default Button

