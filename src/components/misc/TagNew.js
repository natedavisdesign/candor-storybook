import React from 'react'
import styled from 'styled-components'

// Styled Components. CSS directly inside of Component File
const TagNew = styled.div`
/*Main Styling*/
    width: 44px;
    height: 16px;
    background: #2AC6A7;
    border-radius: 3px;
`
const TagText = styled.h3`
    width: 44px;
    height: 16px;
    color: #FFFFFF;
    font-size: 12px;
    font-family: "azo-sans-web";
    font-weight: bold;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 0.5px;
`

//Component
const Tag = props => (

        <TagNew>
            <TagText>NEW</TagText>
        </TagNew>

)

export default Tag