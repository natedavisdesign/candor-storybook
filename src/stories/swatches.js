import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered';
import styles from "@sambego/storybook-styles";

//Importing Components

//Gradients
import GradientBluePink from '../components/swatches/gradients/BluePink.js'
import GradientPurple from '../components/swatches/gradients/Purple.js'
import GradientBlue from '../components/swatches/gradients/Blue.js'
import GradientTeal from '../components/swatches/gradients/Teal.js'
import GradientYellowPink from '../components/swatches/gradients/YellowPink.js'
import GradientDarkBlue from '../components/swatches/gradients/DarkBlue.js'
import GradientRedPink from '../components/swatches/gradients/RedPink.js'

//Colors
import ColorPurple from '../components/swatches/colors/Purple.js'



storiesOf('SWATCH: Gradients', module)
    //Center Add On
    .addDecorator(centered)
    //List out Gradients
    .add('Blue Pink', () => ( <GradientBluePink />))
    .add('Purple', () => ( <GradientPurple />))
    .add('Blue', () => ( <GradientBlue />))
    .add('Teal', () => ( <GradientTeal />))
    .add('Yellow Pink', () => ( <GradientYellowPink />))
    .add('Dark Blue', () => ( <GradientDarkBlue />))
    .add('Red Pink', () => ( <GradientRedPink />));

storiesOf('SWATCH: Colors', module)
    //Center Add On
    .addDecorator(centered)
    //List out Colors
    .add('Purple', () => ( <ColorPurple />))
   ;