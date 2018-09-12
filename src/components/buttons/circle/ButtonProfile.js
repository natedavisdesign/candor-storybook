import React from 'react'
import styled from 'styled-components'


// Styled Components. CSS directly inside of Component File

const ButtonProfile = styled.div` 
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
const ProfileIcon = styled.img`
	padding: 13px 16px;
    
   
    &:active {

    }
`




//Component
const Button = props => (

		<ButtonProfile>
			<ProfileIcon src={require('../../../../public/icons/myprofile-nonactive.svg')}  />
		</ButtonProfile>	
)

export default Button