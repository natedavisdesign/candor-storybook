import React from 'react'
import styled from 'styled-components'

// Styled Components. CSS directly inside of Component File
const IdeaCountInactive = styled.div`
/*Main Styling*/
    width: 34px;
    height: 22px;
    background: #97999B;
    border-radius: 3px;
`
const IdeaIndicator = styled.div`
    display: flex;
   
`
const IdeaIcon = styled.img`
    padding: 6px 4px 6px 7px;
`
const IdeaText = styled.p`
    padding: 4px 6px 4px 0px;
    color: #FFFFFF;
    font-size: 14px;
    font-family: "azo-sans-web";
    font-weight: bold;
    text-align: center;
    letter-spacing: 0;
    line-height: 14px;
`

//Component
const IdeaCount = props => (

        <IdeaCountInactive>
            <IdeaIndicator>
                <IdeaIcon src={require('../../../public/icons/idea-count-small.svg')}  />
                <IdeaText>4</IdeaText>
            </IdeaIndicator>
        </IdeaCountInactive>

)

export default IdeaCount