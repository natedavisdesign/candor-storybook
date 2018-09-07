import React from 'react';
import { storiesOf } from '@storybook/react';



import ButtonMedium from '../../../components/General/Buttons/Large/ButtonMedium.js'



storiesOf('Button', module)
    .add('inverse', () => ( <ButtonMedium />))
    .add('primary', () => ( <ButtonPrimary></ButtonPrimary>));
   
    