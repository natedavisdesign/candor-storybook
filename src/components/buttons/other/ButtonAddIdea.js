import React from 'react'
import styled from 'styled-components'

// Styled Components. CSS directly inside of Component File
const ButtonAddIdea = styled.button`
/*Main Styling*/
    padding: 4px 10px;
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
    width: 100px;
    height: 40px;

    transition: 0.4s cubic-bezier(0.2, 0.8, 0.2, 1);

    &:active {
    transform: scale(0.98);
    }
`
//Component
const Button = props => (

        <ButtonAddIdea>Add Idea</ButtonAddIdea>

)

export default Button