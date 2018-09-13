import React from 'react'
import styled from 'styled-components'

// Styled Components. CSS directly inside of Component File
const ButtonLgPrimary = styled.button`
/*Main Styling*/
    padding: 8px 20px;
    font-size: 16px;
    color: #fff;
    font-family: "azo-sans-web";
    font-weight: bold;
    text-align: center;
    letter-spacing: 0;
    line-height: 16px;
    background: #EF5B72;
    border: none;
    border-radius: 4px;
    outline: none;
    width: 335px;
    height: 40px;
    
    transition: 0.4s cubic-bezier(0.2, 0.8, 0.2, 1);

    &:active {
        transform: scale(0.98);
        }

    &:hover {
        background: #F55B72;
        }
`
//Component
const Button = props => (

        <ButtonLgPrimary>{props.title}</ButtonLgPrimary>

)

export default Button