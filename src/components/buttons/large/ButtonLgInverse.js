import React from 'react'
import styled from 'styled-components'

// Styled Components. CSS directly inside of Component File
const ButtonLgInverse = styled.button`
/*Main Styling*/
    padding: 8px 20px;
    font-size: 16px;
    color: #1c1c1f;
    font-family: AzoSans-Bold;
    font-weight: bold;
    text-align: center;
    letter-spacing: 0;
    line-height: 16px;
    background: #ffffff;
    border: none;
    border-radius: 4px;
    outline: none;
    width: 335px;
    height: 40px;
    box-shadow: 0 4px 17px 0 rgba(28, 28, 31, 0.3);

    transition: 0.4s cubic-bezier(0.2, 0.8, 0.2, 1);

    &:active {
    transform: scale(0.99);
    box-shadow: 0 0px 0px 0 rgba(0, 0, 0, 0);
    }
`
//Component
const Button = props => (

        <ButtonLgInverse>Large Inverse Test</ButtonLgInverse>

)

export default Button