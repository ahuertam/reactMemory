import React, { createContext } from 'react';

import PropTypes from 'prop-types';

export const Context = createContext();

export const MockProvider = ({ children }) => {
  const gatContext = {
    documentsDict: {
      '5e4d39175cd915000f27c6ea': {
        url:
          'https://s3-eu-west-1.amazonaws.com/int.statics.gamelearn.io/gamelearn/resources/58f4bb3b191bb175b9e52405/image/5e4d39175cd915000f27c6ea/card_back.png',
      },
      '5e4d3a035cd915000f27c6ed': {
        url:
          'https://s3-eu-west-1.amazonaws.com/int.statics.gamelearn.io/gamelearn/resources/58f4bb3b191bb175b9e52405/image/5e4d3a035cd915000f27c6ed/crescent-symbol.png',
      },
      '5e4d3a145cd915000f27c6ee': {
        url:
          'https://s3-eu-west-1.amazonaws.com/int.statics.gamelearn.io/gamelearn/resources/58f4bb3b191bb175b9e52405/image/5e4d3a145cd915000f27c6ee/diamond-symbol.png',
      },
      '5e4d39c95cd915000f27c6eb': {
        url:
          'https://s3-eu-west-1.amazonaws.com/int.statics.gamelearn.io/gamelearn/resources/58f4bb3b191bb175b9e52405/image/5e4d39c95cd915000f27c6eb/heart-symbol.png',
      },
      '5e4d39ea5cd915000f27c6ec': {
        url:
          'https://s3-eu-west-1.amazonaws.com/int.statics.gamelearn.io/gamelearn/resources/58f4bb3b191bb175b9e52405/image/5e4d39ea5cd915000f27c6ec/square-symbol.png',
      },
      '5e4d3a395cd915000f27c6ef': {
        url:
          'https://s3-eu-west-1.amazonaws.com/int.statics.gamelearn.io/gamelearn/resources/58f4bb3b191bb175b9e52405/image/5e4d3a395cd915000f27c6ef/table_top.png',
      },
      '5e550ef0366c28000f563d79': {
        url:
          'https://s3-eu-west-1.amazonaws.com/int.statics.gamelearn.io/gamelearn/resources/58f4bb3b191bb175b9e52405/image/5e550ef0366c28000f563d79/mushroom.jpg',
      },
      '5e550f74366c28000f563d7a': {
        url:
          'https://s3-eu-west-1.amazonaws.com/int.statics.gamelearn.io/gamelearn/resources/58f4bb3b191bb175b9e52405/image/5e550f74366c28000f563d7a/star.jpg',
      },
      '5e550f86366c28000f563d7b': {
        url:
          'https://s3-eu-west-1.amazonaws.com/int.statics.gamelearn.io/gamelearn/resources/58f4bb3b191bb175b9e52405/image/5e550f86366c28000f563d7b/ace-of-spade.jpg',
      },
      '5e550f98f861f3000f303e9e': {
        url:
          'https://s3-eu-west-1.amazonaws.com/int.statics.gamelearn.io/gamelearn/resources/58f4bb3b191bb175b9e52405/image/5e550f98f861f3000f303e9e/flower.jpg',
      },
      '5e550fabf861f3000f303e9f': {
        url:
          'https://s3-eu-west-1.amazonaws.com/int.statics.gamelearn.io/gamelearn/resources/58f4bb3b191bb175b9e52405/image/5e550fabf861f3000f303e9f/1up.jpg',
      },
      '5e55268c218b81000f42b57a': {
        url:
          'https://s3-eu-west-1.amazonaws.com/int.statics.gamelearn.io/gamelearn/resources/58f4bb3b191bb175b9e52405/image/5e55268c218b81000f42b57a/cosmos-bg-min.jpg',
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
