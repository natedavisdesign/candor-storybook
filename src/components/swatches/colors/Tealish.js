import React from 'react'
import styled from 'styled-components'

// Styled Components. CSS directly inside of Component File
const ColorTealish = styled.div`

    border: none;
    border-radius: 8px;
    outline: none;
    width: 300px;
    height: 300px;
    background-color: #2ac6a7;
    
`
//Component
const Color = props => (

        <ColorTealish />
        
)

export default Color