import React from 'react'
import styled from 'styled-components'

// Styled Components. CSS directly inside of Component File
const ReactLongText = styled.div`
/*Main Styling*/
    width: 327px;
    height: 228px;
    background: #FFFFFF;
    box-shadow: 0 2px 7px 0 rgba(0,0,0,0.08);
    border-radius: 6px 6px 6px 6px;
    /* Save this interaction for Desktop
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
    font-size: 15px;
    font-family: "azo-sans-web";
    font-weight: bold;
    text-align: left;
    letter-spacing: 0;
    line-height: 20px;
`
/*Social Interactions | Need to write a seperate component for this*/
const Counts = styled.div`
    display: flex;
    padding-left: 20px;
`
const FaveIcon = styled.img`
    width: 21px;
    height: 20px;
`
const FaveCounter = styled.p`
    padding-left: 6px;
    padding-right: 20px;
    color: #3C3A5D;
    font-size: 15px;
    font-family: "azo-sans-web";
    font-weight: bold;
    text-align: left;
    letter-spacing: 0;
    line-height: 24px;
`
const CommentIcon = styled.img`
    width: 20px;
    height: 20px;
   
`
const CommentCounter = styled.p`
    padding-left: 6px;
    color: #3C3A5D;
    font-size: 15px;
    font-family: "azo-sans-web";
    font-weight: bold;
    text-align: left;
    letter-spacing: 0;
    line-height: 24px;
`

//Component
const Card = props => (

        <ReactLongText>
            <User>Nate Davis</User>
            <Idea>Here is a really long idea that’s been submitted that can be really
            really long. Like sometimes I repeat myself when I submit ideas because 
            I’m just thinking off the top of my head and free styling it.</Idea>
            <Counts>
                   <FaveIcon src={require('../../../../../public/icons/favorite.svg')}  />
                        <FaveCounter>2</FaveCounter>
                   <CommentIcon src={require('../../../../../public/icons/comment.svg')}  />
                        <CommentCounter>4</CommentCounter>
            </Counts>
        </ReactLongText>

)

export default Card