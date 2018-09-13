import React from 'react'
import styled from 'styled-components'

// Styled Components. CSS directly inside of Component File
const ColorRed = styled.div`

    border: none;
    border-radius: 8px;
    outline: none;
    width: 300px;
    height: 300px;
    background-color: #d41957;
    
`
//Component
const Color = props => (

        <ColorRed />
        
)

export default Color