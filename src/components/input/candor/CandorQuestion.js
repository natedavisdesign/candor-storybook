import React from 'react'
import styled from 'styled-components'
import './TextCounter.js';

const CandorQuestion = styled.div`

    & > input {
        width: 327px;
        height: 160px;
        background: rgba(11,11,11,0.20);
        border-radius: 3px;
        outline: none;
        border: none;
        color: #FFFFFF;
        font-size: 18px;
        font-family: "azo-sans-web";
        font-weight: bold;
        text-align: center;
        letter-spacing: 0;
        line-height: 28px;

        &::placeholder {
        color:#ffffff;
        opacity: 0.5;
        font-weight: bold;
    }
    }
    & > h5 {
        margin-top: 17px;
        color: #FFFFFF;
        font-size: 12px;
        font-family: "azo-sans-web";
        font-weight: bold;
        text-align: center;
        letter-spacing: 0;
        line-height: 16px;
      
    }

    & > p {
        margin-bottom: 12px;
        color: #FFFFFF;
        font-size: 16px;
        font-family: "azo-sans-web";
        font-weight: bold;
        text-align: center;

        transition: 0.6s cubic-bezier(0.2, 0.8, 0.2, 1);

        &:active {
        box-shadow: 0 0px 0px rgba(0, 0, 0, 0);
        transform: scale(0.99);
}
    }

`

const GeneralField = props => (
    <CandorQuestion>
    <p>Your Question</p>
        <input className="count" type="text" placeholder="What's your question" />
        <h5 className="counter"><span className="num">0</span>/400</h5>
    </CandorQuestion>
)


export default GeneralField