import React from 'react'
import styled from 'styled-components'

// Styled Components. CSS directly inside of Component File
const GradientDarkBlue = styled.div`

    border: none;
    border-radius: 8px;
    outline: none;
    width: 300px;
    height: 300px;
    background: -webkit-linear-gradient(-180deg, rgb(23, 31, 158), rgb(29, 96, 184));
    background: linear-gradient(-180deg, rgb(23, 31, 158), rgb(29, 96, 184));

`
//Component
const Gradient = props => (

        <GradientDarkBlue />
        
)

export default Gradient