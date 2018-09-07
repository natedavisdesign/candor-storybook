import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered';
import backgrounds from "@storybook/addon-backgrounds";

//Importing Components

//Add Phase
import AddNoImage from '../components/cards/addphase/AddNoImage.js'




storiesOf('Cards', module)
    //Center Add On
    .addDecorator(centered)
    //Background Add On
    .addDecorator(backgrounds([
        { name: "twitter", value: "#00aced" },
        { name: "facebook", value: "#3b5998" },
      ]))
    //List out Cards
    .add('Add: No Image', () => ( <AddNoImage />));