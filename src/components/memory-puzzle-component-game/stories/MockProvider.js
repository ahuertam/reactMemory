import React, { createContext } from 'react';

import PropTypes from 'prop-types';

export const Context = createContext();

export const MockProvider = ({ children }) => {
  const gatContext = {
    documentsDict: {
      '5e4d39175cd915000f27c6ea': {
        url:
          'https://imgur.com/a7EDcwg',
      },
      '5e4d3a035cd915000f27c6ed': {
        url:
          'https://imgur.com/W7knvV2',
      },
      '5e4d3a145cd915000f27c6ee': {
        url:
          'https://imgur.com/Lw9uGI0',
      },
      '5e4d39c95cd915000f27c6eb': {
        url:
          'https://imgur.com/yPCJ07F',
      },
      '5e4d39ea5cd915000f27c6ec': {
        url:
          'https://imgur.com/DPMU60z',
      },
      '5e4d3a395cd915000f27c6ef': {
        url:
          'https://imgur.com/7zyk7bK',
      },
      '5e550ef0366c28000f563d79': {
        url:
          'https://imgur.com/swnA1cb',
      },
      '5e550f74366c28000f563d7a': {
        url:
          'https://imgur.com/IxRFF0L',
      },
      '5e550f86366c28000f563d7b': {
        url:
          'https://imgur.com/X7X3fel',
      },
      '5e550f98f861f3000f303e9e': {
        url:
          'https://imgur.com/eEGa5FM',
      },
      '5e550fabf861f3000f303e9f': {
        url:
          'https://imgur.com/OxLqsBO',
      },
    },
    references: {
      modelFactory: {},
      animationManager: {},
      presetCollector: {},
    },
  };

  return <Context.Provider value={gatContext}> {children}</Context.Provider>;
};

MockProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
