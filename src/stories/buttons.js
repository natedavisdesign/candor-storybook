import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered';

//Importing Components

//Large Buttons
import ButtonLgPrimary from '../components/buttons/large/ButtonLgPrimary.js'
import ButtonLgSecondary from '../components/buttons/large/ButtonLgSecondary.js'
import ButtonLgInverse from '../components/buttons/large/ButtonLgInverse.js'
//Medium Buttons
import ButtonMedPrimary from '../components/buttons/medium/ButtonMedPrimary.js'
import ButtonMedSecondary from '../components/buttons/medium/ButtonMedSecondary.js'
//Small Buttons
import ButtonSmPrimary from '../components/buttons/small/ButtonSmPrimary.js'
import ButtonSmSecondary from '../components/buttons/small/ButtonSmSecondary.js'
//Other 
import ButtonAddIdea from '../components/buttons/other/ButtonAddIdea.js'




storiesOf('Buttons', module)
    //Center Add On
    .addDecorator(centered)
    //List out Buttons
    .add('Lg Primary', () => ( <ButtonLgPrimary title="Testing out Props" />))
    .add('Lg Secondary', () => ( <ButtonLgSecondary />))
    .add('Lg Inverse', () => ( <ButtonLgInverse />))
    .add('Med Primary', () => ( <ButtonMedPrimary />))
    .add('Med Secondary', () => ( <ButtonMedSecondary />))
    .add('Sm Primary', () => ( <ButtonSmPrimary />))
    .add('Sm Secondary', () => ( <ButtonSmSecondary />))
    .add('Add Idea', () => ( <ButtonAddIdea />));

   
    