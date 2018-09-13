import React from 'react'
import styled from 'styled-components'

// Styled Components. CSS directly inside of Component File
const CandorJoined = styled.div`
/*Main Styling*/
    width: 327px;
    height: 185px;
    background: #FFFFFF;
    box-shadow: 0 10px 24px 0 rgba(0,0,0,0.13);
    border-radius: 3px;
    /*Save this interaction for Desktop
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
const CandorCreator = styled.p`
    padding: 24px 24px 0px 24px;
    color: #9B9B9B;
    font-size: 12px;
    font-family: AzoSans-Medium;
    font-weight: 500;
    text-align: left;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    line-height: 12px;
`
const CandorTitle = styled.p`
    padding: 6px 24px 0px 24px;
    color: #1C1C1F;
    font-size: 18px;
    font-family: AzoSans-Black;
    font-weight: 900;
    text-align: left;
    letter-spacing: 0;
    line-height: 24px;
`
const CandorQuestion = styled.p`
    padding: 8px 24px 24px 24px;
    color: #4F505B;
    font-size: 16px;
    font-family: AzoSans-Regular;
    font-weight: normal;
    text-align: left;
    letter-spacing: 0;
    line-height: 22px;
`
/*Indicators and Counts | Need to write a seperate component for this*/
const CandorStatus = styled.div`
    display: flex;
    padding-left: 23px;
`
const TimeIcon = styled.img`
    width: 20px;
    height: 20px;
`
const StatusIndicator = styled.p`
    padding-left: 4px;
    padding-right: 20px;
    color: #EF5B72;
    font-size: 14px;
    font-family: AzoSans-Bold;
    font-weight: bold;
    text-align: left;
    letter-spacing: 0;
    line-height: 20px;
    /*Quick Fix for layout before rewriting this entire part into a seperate component*/
    margin-right: 78px;
`
const IdeaIcon = styled.img`
    width: 20px;
    height: 20px;
   
`
const IdeaCount = styled.p`
    padding-left: 4px;
    color: #747580;
    font-size: 14px;
    font-family: AzoSans-Regular;
    text-align: right;
    letter-spacing: 0;
    line-height: 20px;
`

//Component
const Card = props => (

        <CandorJoined>
            <CandorCreator>By Nate Davis</CandorCreator>
            <CandorTitle>Voice UI Ideas</CandorTitle>
            <CandorQuestion>Let's brainstorm ideas for voice stuff we can make.</CandorQuestion>
                <CandorStatus>
                   <TimeIcon src={require('../../../../public/icons/time-red.svg')}  />
                   <StatusIndicator>5 Days to add ideas</StatusIndicator>
                   <IdeaIcon src={require('../../../../public/icons/idea-count.svg')}  />
                   <IdeaCount>0</IdeaCount>
                </CandorStatus>
        </CandorJoined>

)

export default Card