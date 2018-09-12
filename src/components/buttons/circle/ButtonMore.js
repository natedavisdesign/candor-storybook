import React from 'react'
import styled from 'styled-components'


// Styled Components. CSS directly inside of Component File

const ButtonMore = styled.div` 
	background-color: rgba(11,11,11,0.20);
	width: 44px;
	height: 44px;
	border-radius: 50%;
	transition: 0.4s cubic-bezier(0.2, 0.8, 0.2, 1);
	
    &:active {
    transform: scale(0.98);
    }
`
const MoreIcon = styled.div`
	fill: white;
	transition: 0.4s cubic-bezier(0.2, 0.8, 0.2, 1);
    
    &:active {
    }

   
`
//Component
const Button = props => (

		<ButtonMore>
			<MoreIcon>
				<svg xmlns="http://www.w3.org/2000/svg" >
				<path d="M27,24 C27,22.8954305 27.8954305,22 29,22 C30.1045695,22 31,22.8954305 31,24 C31,25.1045695 30.1045695,26 29,26 C27.8954305,26 27,25.1045695 27,24 Z M21,24 C21,22.8954305 21.8954305,22 23,22 C24.1045695,22 25,22.8954305 25,24 C25,25.1045695 24.1045695,26 23,26 C21.8954305,26 21,25.1045695 21,24 Z M15,24 C15,22.8954305 15.8954305,22 17,22 C18.1045695,22 19,22.8954305 19,24 C19,25.1045695 18.1045695,26 17,26 C15.8954305,26 15,25.1045695 15,24 Z" id="Combined-Shape">
                </path>
				</svg>
			</MoreIcon>
		</ButtonMore>		
)

export default Button

