import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered';
import styles from "@sambego/storybook-styles";

//Importing Components

//Candor Specific
import CandorTitle from '../components/textstyles/CandorTitle.js'
import CandorQuestion from '../components/textstyles/CandorQuestion.js'
import CandorOrganizer from '../components/textstyles/CandorOrganizer.js'

//Idea Specific
import IdeaTitle from '../components/textstyles/IdeaTitle.js'
import IdeaCreatorTitle from '../components/textstyles/IdeaCreatorTitle.js'

//Body Specific
import BodyLarge from '../components/textstyles/BodyLarge.js'
import BodyMedium from '../components/textstyles/BodyMedium.js'
import BodySmall from '../components/textstyles/BodySmall.js'







storiesOf('Text Styles', module)
    //Center Add On
    .addDecorator(centered)
    .addDecorator(styles({
        background: '#ffffff',
        height: '1000px',
      }))
    //List out Buttons
    .add('Candor: Title', () => ( <CandorTitle title="Candor Title" />))
    .add('Candor: Question', () => ( <CandorQuestion title="Candor Question" />))
    .add('Candor: Organizer', () => ( <CandorOrganizer title="Candor Organizer" />))
    .add('Idea: Title', () => ( <IdeaTitle title="Idea Title" />))
    .add('Idea: Creator Title', () => ( <IdeaCreatorTitle title="Idea Creator Title" />))
    .add('Body: Large', () => ( <BodyLarge title="Body Large" />))
    .add('Body: Medium', () => ( <BodyMedium title="Medium Large" />))
    .add('Body: Small', () => ( <BodySmall title="Small Large" />));