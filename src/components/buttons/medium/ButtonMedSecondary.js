import React from 'react'
import styled from 'styled-components'

// Styled Components. CSS directly inside of Component File
const ButtonMedSecondary = styled.button`
/*Main Styling*/
    padding: 8px 20px;
    font-size: 16px;
    color: #0F6DD7;
    font-family: AzoSans-Bold;
    font-weight: bold;
    text-align: center;
    letter-spacing: 0;
    line-height: 16px;
    background: #CFE0F5;
    border: none;
    border-radius: 4px;
    outline: none;
    width: 160px;
    height: 40px;
`
//Component
const Button = props => (

        <ButtonMedSecondary>Med Secondary</ButtonMedSecondary>

)

export default Button