import React, { createContext } from 'react';

import PropTypes from 'prop-types';

export const Context = createContext();

export const MockProvider = ({ children }) => {
  const gatContext = {
    documentsDict: {
      '5e4d39175cd915000f27c6ea': {
        url:
          'https://i.imgur.com/a7EDcwg.png',
      },
      '5e4d3a035cd915000f27c6ed': {
        url:
          'https://i.imgur.com/W7knvV2.png',
      },
      '5e4d3a145cd915000f27c6ee': {
        url:
          'https://i.imgur.com/Lw9uGI0.png',
      },
      '5e4d39c95cd915000f27c6eb': {
        url:
          'https://i.imgur.com/yPCJ07F.png',
      },
      '5e4d39ea5cd915000f27c6ec': {
        url:
          'https://i.imgur.com/DPMU60z.png',
      },
      '5e4d3a395cd915000f27c6ef': {
        url:
          'https://i.imgur.com/7zyk7bK.png',
      },
      '5e550ef0366c28000f563d79': {
        url:
          'https://i.imgur.com/swnA1cb.png',
      },
      '5e550f74366c28000f563d7a': {
        url:
          'https://i.imgur.com/IxRFF0L.png',
      },
      '5e550f86366c28000f563d7b': {
        url:
          'https://i.imgur.com/X7X3fel.png',
      },
      '5e550f98f861f3000f303e9e': {
        url:
          'https://i.imgur.com/eEGa5FM.png',
      },
      '5e550fabf861f3000f303e9f': {
        url:
          'https://i.imgur.com/OxLqsBO.png',
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
