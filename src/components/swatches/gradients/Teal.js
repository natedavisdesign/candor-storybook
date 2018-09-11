import React from 'react'
import styled from 'styled-components'

// Styled Components. CSS directly inside of Component File
const GradientTeal = styled.div`

    border: none;
    border-radius: 8px;
    outline: none;
    width: 300px;
    height: 300px;
    background: -webkit-linear-gradient(-180deg, rgb(42, 171, 191), rgb(47, 201, 176));
    background: linear-gradient(-180deg, rgb(42, 171, 191), rgb(47, 201, 176));

`
//Component
const Gradient = props => (

        <GradientTeal />
        
)

export default Gradient