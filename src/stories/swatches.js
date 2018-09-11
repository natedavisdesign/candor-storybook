import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered';
import styles from "@sambego/storybook-styles";

//Importing Components

//Gradients
import GradientBluePink from '../components/swatches/gradients/BluePink.js'


storiesOf('Gradients', module)
    //Center Add On
    .addDecorator(centered)
    //List out Buttons
    .add('Blue Pink', () => ( <GradientBluePink />));