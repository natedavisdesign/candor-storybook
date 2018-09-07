import React from 'react'
import styled from 'styled-components'

// Styled Components. CSS directly inside of Component File
const ButtonSmSecondary = styled.button`
/*Main Styling*/
    padding: 4px 10px;
    font-size: 12px;
    color: #fff;
    font-family: AzoSans-Bold;
    font-weight: bold;
    text-align: center;
    letter-spacing: 0;
    line-height: 15px;
    text-transform: uppercase;
    background: #13C7A8;
    border: none;
    border-radius: 4px;
    outline: none;
    width: 100px;
    height: 32px;
`
//Component
const Button = props => (

        <ButtonSmSecondary>Sign Up</ButtonSmSecondary>

)

export default Button