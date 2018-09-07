import React from 'react'
import styled from 'styled-components'

// Medium Button Parent CSS
const ButtonMedium = styled.button`
    padding: 8px 20px;
    font-size: 16px;
    color: #fff;
    background: #EF5B72;
    border: none;
    font-weight: 700;
    border-radius: 4px;
    outline: none;
`

// A new component based on Button, but wisth some override styles
const ButtonPrimary = styled(ButtonMedium)`
    color: #0F6DD7;
    background: #CFE0F5;
`

//
const ButtonSecondary = styled(ButtonMedium)`
    width: 303px;
    height: 40px;
    color: #0F6DD7;
    background: #CFE0F5;
    font-size: 16px;
    font-family: AzoSans-Bold;
    font-weight: bold;
    text-align: center;
    letter-spacing: 0;
    line-height: 16px;
`

const Button = props => (
    
        <div>
        <ButtonMedium>Button Default</ButtonMedium><br />
        <ButtonPrimary>Button Primary</ButtonPrimary><br />
        <ButtonSecondary>Button Secondary</ButtonSecondary>
        </div>
)

export default Button


/*// The Button from the last section without the interpolations

const Button = styled.button`
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

// A new component based on Button, but with some override styles
const TomatoButton = styled(Button)`
  color: tomato;
  border-color: tomato;
`;

render(
  <div>
    <Button>Normal Button</Button>
    <TomatoButton>Tomato Button</TomatoButton>
  </div>
);
*/


