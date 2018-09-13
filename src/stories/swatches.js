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
import ColorBlue from '../components/swatches/colors/Blue.js'
import ColorBlueLight from '../components/swatches/colors/BlueLight.js'
import ColorMediumPink from '../components/swatches/colors/MediumPink.js'
import ColorOffWhite from '../components/swatches/colors/OffWhite.js'
import ColorPurpleDark from '../components/swatches/colors/PurpleDark.js'
import ColorRed from '../components/swatches/colors/Red.js'
import ColorRedDark from '../components/swatches/colors/RedDark.js'
import ColorTealish from '../components/swatches/colors/Tealish.js'



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
    .add('Purple Dark', () => ( <ColorPurpleDark />))
    .add('Red', () => ( <ColorRed />))
    .add('Red Dark', () => ( <ColorRedDark />))
    .add('Medium Pink', () => ( <ColorMediumPink />))
    .add('Blue', () => ( <ColorBlue />))
    .add('Blue Light', () => ( <ColorPurple />))
    .add('Off White', () => ( <ColorOffWhite />))
    .add('Tealish', () => ( <ColorTealish />));