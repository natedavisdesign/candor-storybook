import React from 'react'
import styled from 'styled-components'


// Styled Components. CSS directly inside of Component File

const ButtonSearch = styled.div` 
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
const SearchIcon = styled.img`
	padding: 13px;
    
   
    &:active {

    }
`




//Component
const Button = props => (

		<ButtonSearch>
			<SearchIcon src={require('../../../../public/icons/search-nonactive.svg')}  />
		</ButtonSearch>	
)

export default Button