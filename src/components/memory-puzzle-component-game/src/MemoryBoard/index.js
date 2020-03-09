/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
/* eslint-disable prefer-template */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';
import MemoryCard from '../MemoryCard';

const MemoryBoard = ({
  dimension,
  cards,
  backImage,
  solved,
  disabled,
  documentsDict,
  handleClick,
  flipped,
}) => {
  return (
    <ul className="card-board ">
      {cards.map((card, index) => (
        <MemoryCard
          documentsDict={documentsDict}
          id={card.id}
          width={dimension / 4.5}
          height={dimension / 4.5}
          back={backImage}
          front={card.image}
          title={card.title}
          description={card.description}
          solved={solved.includes(card.id)}
          flipped={flipped.includes(card.id)}
          disabled={disabled || solved.includes(card.id)}
          handleClick={() => handleClick(card.id, index)}
        />
      ))}
    </ul>
  );
};

MemoryBoard.defaultProps = {
  backImage: '',
};

MemoryBoard.propTypes = {
  backImage: PropTypes.string,
  disabled: PropTypes.bool.isRequired,
  dimension: PropTypes.number.isRequired,
  cards: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  flipped: PropTypes.arrayOf(PropTypes.string).isRequired,
  solved: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default injectIntl(MemoryBoard);
