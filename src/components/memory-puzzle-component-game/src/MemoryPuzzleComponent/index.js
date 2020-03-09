/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
/* eslint-disable prefer-template */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useContext, useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';
import MemoryBoard from '../MemoryBoard';

const defaultBackground =
  'https://s3-eu-west-1.amazonaws.com/int.statics.gamelearn.io/gamelearn/resources/puzzle-login.png';

const MemoryPuzzleComponent = ({
  info,
  context,
  nodeId,
  cardsImages,
  repeat,
  backImage,
  background,
  time,
  intl,
}) => {
  const reactContext = useContext(context);
  const { documentsDict = null} = reactContext;

  const [flipped, setFlipped] = useState([]);
  const [dimension, setDimensions] = useState(400);
  const [cards, setCards] = useState([]);
  const [solved, setSolved] = useState([]);
  const [disabled, setDisabled] = useState(false);
  const [countSolved, setCountSolved] = useState(1);
  const [movesDone, setMovesDone] = useState(0);
  const [backgroundStyle, setBackgroundStyle] = useState({ width: '100%' });
  const [timeLeft, setTimeLeft] = useState(time);

  const handleFinish = () => {
    setTimeout(() => {
      alert('isEndGame');
    }, 1000);
  };
  useEffect(() => {
    const timer = timeLeft > 0 && setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
  }, [timeLeft]);
  const backgroundImageId = background.imgId;
  const backCardImageId = backImage.imgId;

  useEffect(() => {
    const backgroundImage = () => {
      if (documentsDict && documentsDict[background.imgId]) {
        return documentsDict[background.imgId].url;
      }
      return defaultBackground;
    };
    let currentBackgroundImage;
    if (backgroundImage) {
      currentBackgroundImage = `url(${backgroundImage})`;
    } else {
      currentBackgroundImage = `url(${defaultBackground})`;
    }
    setBackgroundStyle({ width: '100%', backgroundImage: currentBackgroundImage });
  }, [background.imgId,documentsDict]);

  const sameCardClicked = (id) => {
    flipped.includes(id);
  };
  const isMatch = (id, index) => {
    const clickedCardPairId = cards[index].pairId;
    const flippedCardPairId = cards.find((card) => card.id === flipped[0]).pairId;
    const isTheSame = clickedCardPairId === flippedCardPairId;
    setMovesDone(movesDone + 1);
    return isTheSame;
  };
  const reset = () => {
    setFlipped([]);
    setDisabled(false);
  };
  const isEndGame = () => {
    // TODO FIX IT DOES NOT WORK WELL
    return countSolved === cardsImages.length;
  };
  const noMatch = () => {
    setTimeout(reset, 500);
  };
  const handleClick = (id, index) => {
    setDisabled(true);
    if (flipped.length === 0) {
      setFlipped([id]);
      setDisabled(false);
    } else {
      if (sameCardClicked(id)) return;
      setFlipped([flipped[0], id]);
      if (isMatch(id, index)) {
        setSolved([...solved, flipped[0], id]);
        reset();
        setCountSolved(countSolved + 1);
        if (isEndGame()) {
          handleFinish();
        }
      } else {
        noMatch();
      }
    }
  };

  const shuffleArray = (arr) =>
    arr
      .map((a) => [Math.random(), a])
      .sort((a, b) => a[0] - b[0])
      .map((a) => a[1]);

  const resizeBoard = () => {
    setDimensions(
      Math.min(document.documentElement.clientWidth, document.documentElement.clientHeigth),
    );
  };

  useEffect(() => {
    const initializeDeck = () => {
      const unitaryCardsSize = cardsImages.length;
      const newCardsArray = [];
      for (let i = 0; i < unitaryCardsSize; i += 1) {
        for (let e = 0; e < repeat; e += 1) {
          const title =
            cardsImages[i].title !== undefined && cardsImages[i].title !== ''
              ? cardsImages[i].title
              : null;
          const description =
            cardsImages[i].description !== undefined && cardsImages[i].description !== ''
              ? cardsImages[i].description
              : null;
          newCardsArray.push({
            id: `${i}${e}`,
            pairId: i,
            image: cardsImages[i].image,
            title,
            description,
          });
        }
      }
      return shuffleArray(newCardsArray);
    };
    resizeBoard();
    setCards(initializeDeck());
  }, [cardsImages, repeat]);

  useEffect(() => {
    const resizeLinstener = window.addEventListener('resize', resizeBoard);
    return () => window.removeEventListener('resize', resizeLinstener);
  });


  return (
    <div>
      <span className="title">Memory Puzzle</span>
      <br></br>
      <span className="title">Moves: {movesDone}</span>
      <br></br>
      <span className="title">Solved: {countSolved}</span>
      <br></br>
      <span className="title">Time: {timeLeft}</span>
      <div style={backgroundStyle}>
        <MemoryBoard
          documentsDict={documentsDict}
          dimension={dimension}
          cards={cards}
          backImage={backCardImageId}
          solved={solved}
          flipped={flipped}
          handleClick={handleClick}
          disabled={disabled}
        />
      </div>
    </div>
  );
};

MemoryPuzzleComponent.defaultProps = {
  cardsImages: [],
  backImage: {},
  time: 0,
  context: {},
  nodeId: 0,
  repeat: 1,
};

MemoryPuzzleComponent.propTypes = {
  cardsImages: PropTypes.shape([]),
  context: PropTypes.shape({}),
  backImage: PropTypes.shape({}),
  time: PropTypes.number,
  nodeId: PropTypes.number,
  repeat: PropTypes.number,
};

export default injectIntl(MemoryPuzzleComponent);
