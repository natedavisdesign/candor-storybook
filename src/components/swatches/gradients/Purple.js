import React from 'react'
import styled from 'styled-components'

// Styled Components. CSS directly inside of Component File
const GradientPurple = styled.div`

    border: none;
    border-radius: 8px;
    outline: none;
    width: 300px;
    height: 300px;
    background: rgb(136,17,240);
    background: linear-gradient(20deg, rgba(136,17,240,1) 0%, rgba(96,12,169,1) 100%);
`
//Component
const Gradient = props => (

        <GradientPurple />
        
)

export default Gradient