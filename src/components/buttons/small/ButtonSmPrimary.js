import React from 'react'
import styled from 'styled-components'

// Styled Components. CSS directly inside of Component File
const ButtonSmPrimary = styled.button`
/*Main Styling*/
    padding: 4px 10px;
    font-size: 12px;
    color: #fff;
    font-family: "azo-sans-web";
    font-weight: bold;
    text-align: center;
    letter-spacing: 0;
    line-height: 15px;
    text-transform: uppercase;
    background: #9000FF;
    border: none;
    border-radius: 4px;
    outline: none;
    width: 100px;
    height: 32px;

    transition: 0.4s cubic-bezier(0.2, 0.8, 0.2, 1);

    &:active {
    transform: scale(0.98);
    }
`
//Component
const Button = props => (

        <ButtonSmPrimary>Login</ButtonSmPrimary>

)

export default Button