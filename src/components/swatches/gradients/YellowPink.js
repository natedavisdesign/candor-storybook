import React from 'react'
import styled from 'styled-components'

// Styled Components. CSS directly inside of Component File
const GradientYellowPink = styled.div`

    border: none;
    border-radius: 8px;
    outline: none;
    width: 300px;
    height: 300px;
    background: #F6D6A0;
    background: -webkit-radial-gradient(top right, #F6D6A0, #C37181);
    background: -moz-radial-gradient(top right, #F6D6A0, #C37181);
    background: radial-gradient(top right, #F6D6A0, #C37181);

`
//Component
const Gradient = props => (

        <GradientYellowPink />
        
)

export default Gradient