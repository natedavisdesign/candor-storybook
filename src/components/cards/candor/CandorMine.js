import React from 'react'
import styled from 'styled-components'

// Styled Components. CSS directly inside of Component File
const CandorMine = styled.div`
/*Main Styling*/
    width: 327px;
    height: 192px;
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

const CandorTitle = styled.p`
    padding: 24px 24px 0px 24px;
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
    color: #747580;
    font-size: 14px;
    font-family: AzoSans-Regular;
    font-weight: normal;
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

        <CandorMine>
            
            <CandorTitle>Ideas for the Yearly Company Party</CandorTitle>
            <CandorQuestion>Where would you like to celebrate this year’s company holiday party?</CandorQuestion>
                <CandorStatus>
                   <TimeIcon src={require('../../../../public/icons/time-gray.svg')}  />
                   <StatusIndicator>5 Days to add ideas</StatusIndicator>
                   <IdeaIcon src={require('../../../../public/icons/idea-count.svg')}  />
                   <IdeaCount>0</IdeaCount>
                </CandorStatus>
        </CandorMine>

)

export default Card