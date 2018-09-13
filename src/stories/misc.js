import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered';
import styles from "@sambego/storybook-styles";

//Importing Components


import TagNew from '../components/misc/TagNew.js'
import TagTop from '../components/misc/TagTop.js'
import IdeaCountActive from '../components/misc/IdeaCountActive.js'
import IdeaCountInactive from '../components/misc/IdeaCountInactive.js'






storiesOf('MISC', module)
    //Center Add On
    .addDecorator(centered)
    .addDecorator(styles({
        background: '#f9f9f9',
        height: '1000px',
      }))

    .add('Tag: New', () => ( <TagNew />))
    .add('Tag: Top', () => ( <TagTop />))
    .add('Idea Count: Active', () => ( <IdeaCountActive />))
    .add('Idea Count: Inactive', () => ( <IdeaCountInactive />))
    ;
    
