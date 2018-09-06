import { configure } from '@storybook/react';


function loadStories() {
  require('../src/stories');
  require('../src/stories/registration-form');
}

configure(loadStories, module);
