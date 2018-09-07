import { configure } from '@storybook/react';

function loadStories() {
  require('../src/stories');
  require('../src/stories/registration-form');
  require('../src/stories/buttons');
  require('../src/stories/cards');
}

configure(loadStories, module);
