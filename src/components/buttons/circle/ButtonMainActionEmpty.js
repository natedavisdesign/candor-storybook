import React from 'react'
import styled from 'styled-components'

// Styled Components. CSS directly inside of Component File
const ButtonMainActionEmptyW = styled.div`
	/*Main Styling*/
	position: absolute;
	top: 50%;
	left: calc(50% - 60px);
	margin-top: -60px;
`
const ButtonMainActionEmpty = styled.div` 
	background-color: white;
	width: 120px;
	height: 120px;
	border-radius: 50%;
`
const AddIcon = styled.img`
	position: absolute;
	top: 50%;
	left: calc(50% - 20px);
	margin-top: -20px;
	width: 40px;
	height: 40px;
`



//Component
const Button = props => (

        <ButtonMainActionEmptyW>
		<ButtonMainActionEmpty>
			<AddIcon src={require('../../../../public/icons/plus.svg')}  />
		</ButtonMainActionEmpty>
		</ButtonMainActionEmptyW>

)

export default Button