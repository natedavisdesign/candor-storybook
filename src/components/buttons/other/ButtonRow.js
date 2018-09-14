import React from 'react'
import styled from 'styled-components'

//Rewrite CSS for this later

// Styled Components. CSS directly inside of Component File
const ButtonRow = styled.button`
   /* display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    display: grid;
    grid-auto-flow: row;*/
    display: inline-block;
    width: 100%;
    margin-right: -50%
    width: 327px;
    height: 48px;
    background: #FFFFFF;
    box-shadow: 0 2px 7px 0 rgba(0,0,0,0.08);
    border-radius: 3px;
    outline: none;
    border: none;
    
    transition: 0.4s cubic-bezier(0.2, 0.8, 0.2, 1);

    &:active {
    transform: scale(0.98);
    box-shadow: 0 2px 7px 0 rgba(0,0,0,0.02);
    }
`
const RowText = styled.p`
    display: inline-block;
    width: 100%;
    margin-right: -50%
   /* justify-self: start;*/
    float: left;
    padding-left: 16px;
    color: #4F505B;
    font-size: 16px;
    font-family: AzoSans-Regular;
    font-weight: normal;
    text-align: left;
    letter-spacing: 0;
    line-height: 22px;


`
const RowIcon= styled.img`
    /*padding: 14px 12px 14px 0px;*/
    /*justify-self: end;*/
    float: right;
    padding-right: 16px;
    padding-top: 5px;
    align: center;

`

//Component
const Button = props => (

        <ButtonRow>
            <RowText>
            Details  
            <RowIcon src={require('../../../../public/icons/carrot.svg')} />
            </RowText>
        </ButtonRow>

)

export default Button