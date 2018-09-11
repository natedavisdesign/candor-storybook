import { configure } from '@storybook/react';

function loadStories() {
  
  require('../src/stories/buttons');
  require('../src/stories/cards');
  require('../src/stories/input');
  require('../src/stories');
  require('../src/stories/registration-form');
}

configure(loadStories, module);
