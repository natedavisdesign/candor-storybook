import React from 'react'
import styled from 'styled-components'

// Styled Components. CSS directly inside of Component File
const ColorPurple = styled.div`

    border: none;
    border-radius: 8px;
    outline: none;
    width: 300px;
    height: 300px;
    background-color: #9013fe;
    
`
//Component
const Color = props => (

        <ColorPurple />
        
)

export default Color