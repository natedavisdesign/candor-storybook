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
  

`

const GeneralField = props => (
    <CandorQuestion>
        <input className="count" type="text" placeholder="Your Candor Title" />
        <h5 className="counter"><span className="num">0</span>/400</h5>
    </CandorQuestion>
)


export default GeneralField