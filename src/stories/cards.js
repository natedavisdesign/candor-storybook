import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered';
import backgrounds from "@storybook/addon-backgrounds";

//Importing Components

//Add Phase
import AddNoImage from '../components/cards/addphase/AddNoImage.js'
import AddLongText from '../components/cards/addphase/AddLongText.js'



storiesOf('Cards', module)
    //Center Add On
    .addDecorator(centered)
    //List out Cards
    .add('Add: No Image', () => ( <AddNoImage />))
    .add('Add: Long', () => ( <AddLongText />));