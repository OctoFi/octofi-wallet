import React from 'react';
import PropTypes from 'prop-types';

// TODO: update click event and replace content
const Collectibles = ({ onClickAsset }) => {
  return (
    <>
      <button
        onTokenClick={(tokenAddress) => {
          onClickAsset(tokenAddress);
        }}
      >
        Add Collectibles here.
      </button>
    </>
  );
};

Collectibles.propTypes = {
  onClickAsset: PropTypes.func.isRequired,
};

export default Collectibles;
