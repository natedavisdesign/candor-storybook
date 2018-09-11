import React from 'react'
import styled from 'styled-components'

// Styled Components. CSS directly inside of Component File
const GradientBluePink = styled.div`

    border: none;
    border-radius: 8px;
    outline: none;
    width: 300px;
    height: 300px;
    background: -webkit-linear-gradient(-180deg, rgb(46, 77, 171), rgb(231, 78, 116));
    background: linear-gradient(-180deg, rgb(46, 77, 171), rgb(231, 78, 116));
`
//Component
const Gradient = props => (

        <GradientBluePink />
        
)

export default Gradient