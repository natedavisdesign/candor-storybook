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
const SearchIcon = styled.div`
	fill: white;
	transition: 0.4s cubic-bezier(0.2, 0.8, 0.2, 1);

    &:active {
	fill: #FF4C6F;
    }
`
//Component
const Button = props => (

		<ButtonSearch>
			<SearchIcon>
				<svg xmlns="http://www.w3.org/2000/svg" >
				<path d="M34.5880393,31.6626944 C35.1376139,32.1784058 35.1376139,33.0739691 34.586275,33.5877901 C34.0361962,34.1374033 33.1768636,34.1374033 32.6272889,33.5877901 L27.7809249,28.7405818 C26.2680508,29.8759787 24.3434683,30.5634679 22.2810195,30.5634679 C17.158797,30.5634679 13,26.4043789 13,21.2817969 C13,16.159215 17.158797,12 22.2810195,12 C27.403242,12 31.562165,16.159215 31.562165,21.2817969 C31.562165,23.3443905 30.8745981,25.2691081 29.7394069,26.7820884 L34.5880393,31.6626944 Z M22.2810195,27.8133852 C25.8903679,27.8133852 28.8121493,24.8913987 28.8121493,21.2817969 C28.8121493,17.6721952 25.8903679,14.7502087 22.2810195,14.7502087 C18.6716711,14.7502087 15.7498897,17.6721952 15.7498897,21.2817969 C15.7498897,24.8913987 18.6716711,27.8133852 22.2810195,27.8133852 Z" id="icn-search"></path>
				</svg>
			</SearchIcon>
		</ButtonSearch>		
)

export default Button



