import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered';
import styles from "@sambego/storybook-styles";

//Importing Components

//Search

//Text Fields
import PasswordField from '../components/input/fields/password/PasswordField.js'
import GeneralField from '../components/input/fields/general/GeneralField.js'
import CandorTitle from '../components/input/candor/CandorTitle.js'
import CandorQuestion from '../components/input/candor/CandorQuestion.js'





storiesOf('INPUT', module)
    //Center Add On
    .addDecorator(centered)
    .addDecorator(styles({
        background: '#9013FE',
        height: '1000px',
      }))
    //List out different inputs
    
    .add('Password Field', () => ( <PasswordField />))
    .add('General Field', () => ( <GeneralField />))
    .add('Candor Title', () => ( <CandorTitle />))
    .add('Candor Question', () => ( <CandorQuestion />));