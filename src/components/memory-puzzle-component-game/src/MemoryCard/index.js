/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
/* eslint-disable prefer-template */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';

// Draws the square of colors around item
const MemoryCard = ({
  id,
  width,
  height,
  back,
  front,
  flipped,
  handleClick,
  documentsDict,
  disabled,
  solved,
  title,
  description,
}) => {
  const alt = '';
  const resolvedIdImg = documentsDict[front] ? documentsDict[front].url : null;
  const backImage = documentsDict[back] ? documentsDict[back].url : null;
  const turnedBack = !!(flipped || solved);
  return (
    <div className="card" onClick={() => (disabled ? null : handleClick(id))}>
      <div className="card-content">
        {turnedBack && title && <span className="title">{title}</span>}
        <img alt={alt} style={{ height, width }} src={turnedBack ? resolvedIdImg : backImage} />
        {turnedBack && description && <span className="description">{description}</span>}
      </div>
    </div>
  );
};

MemoryCard.defaultProps = {};

MemoryCard.propTypes = {
  handleClick: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  flipped: PropTypes.bool.isRequired,
  solved: PropTypes.bool.isRequired,
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  disabled: PropTypes.bool.isRequired,
};

export default MemoryCard;
