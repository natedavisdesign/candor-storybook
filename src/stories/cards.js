import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered';
import backgrounds from "@storybook/addon-backgrounds";
import styles from "@sambego/storybook-styles";

//Importing Components

//Add Phase
import AddNoImage from '../components/cards/ideas/addphase/AddNoImage.js'
import AddLongText from '../components/cards/ideas/addphase/AddLongText.js'
import AddWithImage from '../components/cards/ideas/addphase/AddWithImage.js'
//React Phase
import ReactNoImage from '../components/cards/ideas/reactphase/ReactNoImage.js'
import ReactWithImage from '../components/cards/ideas/reactphase/ReactWithImage.js'
import ReactLongText from '../components/cards/ideas/reactphase/ReactLongText.js'
//Reveal Phase
import RevealNoImage from '../components/cards/ideas/revealphase/RevealNoImage.js'
import RevealWithImage from '../components/cards/ideas/revealphase/RevealWithImage.js'
import RevealLongText from '../components/cards/ideas/revealphase/RevealLongText.js'


storiesOf('Cards', module)
    //Center Add On
    .addDecorator(centered)
    //Background Add On
    .addDecorator(styles({
        background: '#f9f9f9',
        height: '1000px',
      }))
    //List out Cards
    .add('Add: No Image', () => ( <AddNoImage />))
    .add('Add: With Image', () => ( <AddWithImage />))
    .add('Add: Long', () => ( <AddLongText />))
    .add('React: No Image', () => ( <ReactNoImage idea="Dovetail" />))
    .add('React: With Image', () => ( <ReactWithImage />))
    .add('React: Long', () => ( <ReactLongText />))
    .add('Reveal: No Image', () => ( <RevealNoImage idea="Dovetail" />))
    .add('Reveal: With Image', () => ( <RevealWithImage />))
    .add('Reveal: Long', () => ( <RevealLongText />));

/*storiesOf('Ideas', module)
.add('React: Long', () => ( <ReactLongText />));*/