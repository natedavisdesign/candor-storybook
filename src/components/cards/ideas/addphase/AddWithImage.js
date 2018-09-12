import React from 'react'
import styled from 'styled-components'

// Styled Components. 
const AddWithImage = styled.div`
    width: 327px;
    height: 156px;
    background: #FFFFFF;
    box-shadow: 0 2px 7px 0 rgba(0,0,0,0.08);
    border-radius: 6px 6px 6px 6px;
    /*Save this for Desktop
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
    padding: 18px 214px 6px 20px;
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
    padding: 0px 51px 0px 20px;
    color: #4F505B;
    font-size: 18px;
    font-family: AzoSans-Bold;
    font-weight: bold;
    text-align: left;
    letter-spacing: 0;
    line-height: 24px;
`
const ImageUploads = styled.div`
    padding: 16px 100px 20px 20px;
`

const Uploads = styled.img`
    width: 60px;
    border-radius: 2px;
    margin-right: 8px;
    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);

    &:hover {
    transform: translateY(-10px);
    }
`

//Component
const Card = props => (

        <AddWithImage>
            <User>Jim Morrison</User>
            <Idea>The Signature Room</Idea>
                <ImageUploads>
                <Uploads src={require('../../../../../public/images/1.jpg')} width="60" />
                <Uploads src={require('../../../../../public/images/2.jpg')} width="60" />
                <Uploads src={require('../../../../../public/images/3.jpg')} width="60" />
                </ImageUploads>
        </AddWithImage>

)

export default Card

