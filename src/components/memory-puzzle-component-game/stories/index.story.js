import React from 'react';

import { storiesOf, addDecorator } from '@storybook/react';
import { withContexts } from '@storybook/addon-contexts/react';
import { IntlProvider } from 'react-intl';
import MemoryPuzzleComponent from '../src/index';

import { MockProvider, Context } from './MockProvider';
import { mock, mock1, mock2, mock3, messages } from './mockForProps';

addDecorator(withContexts());
addDecorator((story) => <MockProvider>{story()}</MockProvider>);

storiesOf('Memory Puzzle Component|basic puzzle', module)
  .add('Memory puzzle ultraEasy', () => (
    <IntlProvider locale="en" messages={messages}>
      <MemoryPuzzleComponent {...mock3} context={Context} />
    </IntlProvider>
  ))
  .add('Memory puzzle easy slow', () => (
    <IntlProvider locale="en" messages={messages}>
      <MemoryPuzzleComponent {...mock} context={Context} />
    </IntlProvider>
  ))
  .add('Memory puzzle alternative art', () => (
    <IntlProvider locale="en" messages={messages}>
      <MemoryPuzzleComponent {...mock2} context={Context} />
    </IntlProvider>
  ))
  .add('Memory puzzle alternative art Massive', () => (
    <IntlProvider locale="en" messages={messages}>
      <MemoryPuzzleComponent {...mock1} context={Context} />
    </IntlProvider>
  ));
