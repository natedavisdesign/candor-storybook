

import React from 'react'
import styled from 'styled-components'


// Styled Components. CSS directly inside of Component File

const ButtonShare = styled.div` 
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

const ShareIcon = styled.div`
	fill: white;
	transition: 0.4s cubic-bezier(0.2, 0.8, 0.2, 1);
	margin: 3px 1px;
	& > svg {

	}
    &:active {
	opacity: 0.9;
    }
`
//Component
const Button = props => (

		<ButtonShare>
			<ShareIcon>
       
                <svg xmlns="http://www.w3.org/2000/svg" >

                    <path d="M23.2222222,19.9172723 L21.5642938,21.5670736 C21.2511077,21.8787245 20.7445773,21.8774799 20.4329264,21.5642938 C20.1212755,21.2511077 20.1225201,20.7445773 20.4357062,20.4329264 L23.4504845,17.4329264 C23.7625829,17.1223579 24.2669737,17.1223579 24.5790722,17.4329264 L27.5938505,20.4329264 C27.9070366,20.7445773 27.9082811,21.2511077 27.5966303,21.5642938 C27.2849794,21.8774799 26.7784489,21.8787245 26.4652628,21.5670736 L24.7777778,19.8878605 L24.7777778,31.5244375 C24.7777778,31.9539923 24.4295548,32.3022153 24,32.3022153 C23.5704452,32.3022153 23.2222222,31.9539923 23.2222222,31.5244375 L23.2222222,19.9172723 Z M27.1437778,25.3751319 C26.714223,25.3751319 26.366,25.026909 26.366,24.5973542 C26.366,24.1677994 26.714223,23.8195764 27.1437778,23.8195764 L28.6993333,23.8195764 C30.3974441,23.8195764 31.7777778,25.2245589 31.7777778,26.9391042 L31.7777778,34.5264375 C31.7777778,36.2409828 30.3974441,37.6459653 28.6993333,37.6459653 L19.3006667,37.6459653 C17.6025559,37.6459653 16.2222222,36.2409828 16.2222222,34.5264375 L16.2222222,26.9391042 C16.2222222,25.2245589 17.6025559,23.8195764 19.3006667,23.8195764 L20.8562222,23.8195764 C21.285777,23.8195764 21.634,24.1677994 21.634,24.5973542 C21.634,25.026909 21.285777,25.3751319 20.8562222,25.3751319 L19.3006667,25.3751319 C18.4678885,25.3751319 17.7777778,26.0775661 17.7777778,26.9391042 L17.7777778,34.5264375 C17.7777778,35.3879756 18.4678885,36.0904097 19.3006667,36.0904097 L28.6993333,36.0904097 C29.5321115,36.0904097 30.2222222,35.3879756 30.2222222,34.5264375 L30.2222222,26.9391042 C30.2222222,26.0775661 29.5321115,25.3751319 28.6993333,25.3751319 L27.1437778,25.3751319 Z" id="Combined-Shape">
                    </path>
                </svg>
			</ShareIcon>
		</ButtonShare>		
)

export default Button