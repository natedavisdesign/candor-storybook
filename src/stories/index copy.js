import React from 'react';
import { storiesOf } from '@storybook/react';

import ButtonPage from './Buttons';
import IconPage from './Icons';

storiesOf('General', module)
  .add('Buttons', () => <ButtonPage />)
  .add('Icons', () => <IconPage />);