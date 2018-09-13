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
    /*Scaling Transition (Maybe on Desktop)
    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
    &:hover {
    transform: scale(1.1, 1.1);
    box-shadow: 0 10px 22px rgba(0, 0, 0, 0.08);
    }*/
    transition: 0.6s cubic-bezier(0.2, 0.8, 0.2, 1);

    &:active {
    box-shadow: 0 0px 0px rgba(0, 0, 0, 0);
    transform: scale(0.99);
    }
`
const User = styled.h3`
    padding: 18px 233px 6px 20px;
    color: #9B9B9B;
    font-size: 12px;
    font-family: "azo-sans-web";
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
    font-family: "azo-sans-web";
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