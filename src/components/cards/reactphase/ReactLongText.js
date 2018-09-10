import React from 'react'
import styled from 'styled-components'

// Styled Components. CSS directly inside of Component File
const AddLongText = styled.div`
/*Main Styling*/
    width: 327px;
    height: 180px;
    background: #FFFFFF;
    box-shadow: 0 2px 7px 0 rgba(0,0,0,0.08);
    border-radius: 6px 6px 6px 6px;
    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);

    &:hover {
    transform: scale(1.1, 1.1);
    box-shadow: 0 10px 22px rgba(0, 0, 0, 0.08);
    }
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
    font-size: 15px;
    font-family: AzoSans-Bold;
    font-weight: bold;
    text-align: left;
    letter-spacing: 0;
    line-height: 20px;
`

//Component
const Card = props => (

        <AddLongText>
            <User>Nate Davis</User>
            <Idea>Here is a really long idea that’s been submitted that can be really
            really long. Like sometimes I repeat myself when I submit ideas because 
            I’m just thinking off the top of my head and free styling it.</Idea>
        </AddLongText>

)

export default Card