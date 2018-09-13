import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered';
import styles from "@sambego/storybook-styles";

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
//Circular & Nav Icons
import ButtonMainActionEmpty from '../components/buttons/circle/ButtonMainActionEmpty.js'
import ButtonHome from '../components/buttons/circle/ButtonHome.js'
import ButtonProfile from '../components/buttons/circle/ButtonProfile.js'
import ButtonSearch from '../components/buttons/circle/ButtonSearch.js'
import ButtonMore from '../components/buttons/circle/ButtonMore.js'
import ButtonBack from '../components/buttons/circle/ButtonBack.js'
import ButtonForward from '../components/buttons/circle/ButtonForward.js'
import ButtonShare from '../components/buttons/circle/ButtonShare.js'




//Standard Buttons
storiesOf('BTNS: Standard', module)
    //Center Add On
    .addDecorator(centered)
    .addDecorator(styles({
        background: '#f9f9f9',
        height: '1000px',
      }))
    //List out Buttons
    .add('Lg Primary', () => ( <ButtonLgPrimary title="Primary Button" />))
    .add('Lg Secondary', () => ( <ButtonLgSecondary />))
    .add('Lg Inverse', () => ( <ButtonLgInverse />))
    .add('Med Primary', () => ( <ButtonMedPrimary />))
    .add('Med Secondary', () => ( <ButtonMedSecondary />))
    .add('Sm Primary', () => ( <ButtonSmPrimary />))
    .add('Sm Secondary', () => ( <ButtonSmSecondary />))
    .add('Add Idea', () => ( <ButtonAddIdea />));
    
//Buttons with Icons
    storiesOf('BTNS: Icons', module)
    //Center Add On
    .addDecorator(centered)
    .addDecorator(styles({
        background: '#CFE0F5',
        height: '1000px',
      }))
    //List out Buttons
    .add('Main Action: Empty', () => ( <ButtonMainActionEmpty />))
    .add('Home Button', () => ( <ButtonHome />))
    .add('Profile Button', () => ( <ButtonProfile />))
    .add('Search Button', () => ( <ButtonSearch />))
    .add('More Button', () => ( <ButtonMore />))
    .add('Share Button', () => ( <ButtonShare />))
    .add('Back Button', () => ( <ButtonBack />))
    .add('Forward Button', () => ( <ButtonForward />))
    ;

   
    