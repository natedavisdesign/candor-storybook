import React from 'react'
import styled from 'styled-components'


// Styled Components. CSS directly inside of Component File

const ButtonBack = styled.div` 
	background-color: rgba(11,11,11,0.20);
	width: 46px;
	height: 46px;
	border-radius: 50%;
	transition: 0.4s cubic-bezier(0.2, 0.8, 0.2, 1);
   
  	
	
    &:active {
	transform: scale(0.98);
	opacity: 0.9;
    }
`

const BackIcon = styled.div`
	fill: white;
	transition: 0.4s cubic-bezier(0.2, 0.8, 0.2, 1);
	
	& > svg {

	}
    &:active {
	opacity: 0.9;
    }
`
//Component
const Button = props => (

		<ButtonBack>
			<BackIcon>
            <svg xmlns="http://www.w3.org/2000/svg" >
                <path d="M18.739183,23 L29.6013072,23 C30.1535919,23 30.6013072,23.4477153 30.6013072,24 C30.6013072,24.5522847 30.1535919,25 29.6013072,25 L18.739183,25 L23.6761623,29.9612994 C24.0657259,30.352782 24.0641702,30.9859451 23.6726876,31.3755087 C23.2812049,31.7650723 22.6480419,31.7635166 22.2584783,31.372034 L15.6244913,24.7053673 C15.2362807,24.3152443 15.2362807,23.6847557 15.6244913,23.2946327 L22.2584783,16.627966 C22.6480419,16.2364834 23.2812049,16.2349277 23.6726876,16.6244913 C24.0641702,17.0140549 24.0657259,17.647218 23.6761623,18.0387006 L18.739183,23 Z" id="Combined-Shape">
                </path>
            </svg>
			</BackIcon>
		</ButtonBack>		
)

export default Button

