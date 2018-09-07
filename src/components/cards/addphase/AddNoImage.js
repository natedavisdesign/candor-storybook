import React from 'react'
import styled from 'styled-components'

// Styled Components. CSS directly inside of Component File
const AddNoImage = styled.div`
/*Main Styling*/
    width: 327px;
    height: 84px;
    background: #FFFFFF;
    box-shadow: 0 2px 7px 0 rgba(0,0,0,0.08);
    border-radius: 6px 6px 6px 6px;
`
const User = styled.h3`
    padding: 18px 233px 6px 20px;
    color: #9B9B9B;
    font-size: 12px;
    font-family: AzoSans-Medium;
    font-weight: 500;
    text-align: left;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    line-height: 12px;
`
const Idea = styled.p`
    padding: 6px 51px 24px 20px;
    color: #4F505B;
    font-size: 18px;
    font-family: AzoSans-Bold;
    font-weight: bold;
    text-align: left;
    letter-spacing: 0;
    line-height: 24px;
`
//Component
const Card = props => (

        <AddNoImage>
            <User>Nate Davis</User>
            <Idea>Dovetail</Idea>
        </AddNoImage>

)

export default Card