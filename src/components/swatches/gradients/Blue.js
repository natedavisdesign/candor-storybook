import React from 'react'
import styled from 'styled-components'

// Styled Components. CSS directly inside of Component File
const GradientBlue = styled.div`

    border: none;
    border-radius: 8px;
    outline: none;
    width: 300px;
    height: 300px;
    background: -webkit-linear-gradient(-180deg, rgb(49, 157, 216), rgb(29, 96, 184));
    background: linear-gradient(-180deg, rgb(49, 157, 216), rgb(29, 96, 184));
`
//Component
const Gradient = props => (

        <GradientBlue />
        
)

export default Gradient