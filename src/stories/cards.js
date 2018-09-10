import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered';
import backgrounds from "@storybook/addon-backgrounds";
import styles from "@sambego/storybook-styles";

//Importing Components

//Add Phase
import AddNoImage from '../components/cards/addphase/AddNoImage.js'
import AddLongText from '../components/cards/addphase/AddLongText.js'
import AddWithImage from '../components/cards/addphase/AddWithImage.js'
//React Phase
import ReactNoImage from '../components/cards/reactphase/ReactNoImage.js'


storiesOf('Cards', module)
    //Center Add On
    .addDecorator(centered)
    //Background Add On
    .addDecorator(styles({
        background: '#e1ecfa',
        height: '1000px',
      }))
    //List out Cards
    .add('Add: No Image', () => ( <AddNoImage />))
    .add('Add: With Image', () => ( <AddWithImage />))
    .add('Add: Long', () => ( <AddLongText />))
    .add('React: No Image', () => ( <ReactNoImage idea="Dovetail" />));