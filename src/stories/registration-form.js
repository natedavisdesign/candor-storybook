import React from 'react';
import { storiesOf, action } from '@storybook/react';

import RegistrationForm from '../components/misc/registration-form.js';

const mockSubmit = (e) => {
  e.preventDefault();
  const submitAction = action('submitted');
  submitAction(e);
};

