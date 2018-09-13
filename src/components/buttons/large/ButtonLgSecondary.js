import React from 'react'
import styled from 'styled-components'

// Styled Components. CSS directly inside of Component File
const ButtonLgSecondary = styled.button`
/*Main Styling*/
    padding: 8px 20px;
    font-size: 16px;
    color: #0f6dd7;
    font-family: "azo-sans-web";
    font-weight: bold;
    text-align: center;
    letter-spacing: 0;
    line-height: 16px;
    background: #CFE0F5;
    border: none;
    border-radius: 4px;
    outline: none;
    width: 335px;
    height: 40px;

    transition: 0.4s cubic-bezier(0.2, 0.8, 0.2, 1);

    &:active {
    transform: scale(0.98);
    }
`
//Component
const Button = props => (

        <ButtonLgSecondary>Large Secondary</ButtonLgSecondary>

)

export default Button