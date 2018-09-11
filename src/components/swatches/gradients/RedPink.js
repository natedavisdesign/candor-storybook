import React from 'react'
import styled from 'styled-components'

// Styled Components. CSS directly inside of Component File
const GradientRedPink = styled.div`

    border: none;
    border-radius: 8px;
    outline: none;
    width: 300px;
    height: 300px;
    background: -webkit-linear-gradient(-180deg, rgb(211, 51, 111), rgb(239, 91, 114));
    background: linear-gradient(-180deg, rgb(211, 51, 111), rgb(239, 91, 114));

`
//Component
const Gradient = props => (

        <GradientRedPink />
        
)

export default Gradient