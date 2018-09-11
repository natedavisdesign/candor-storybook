import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered';
import styles from "@sambego/storybook-styles";

//Importing Components

//Search
import Search from '../components/input/search/ButtonSearch.js'
//Password
import PasswordField from '../components/input/fields/password/PasswordField.js'




storiesOf('Input', module)
    //Center Add On
    .addDecorator(centered)
    .addDecorator(styles({
        background: '#fff',
        height: '1000px',
      }))
    //List out different inputs
    .add('Search', () => ( <Search />))
    .add('Password Field', () => ( <PasswordField />));