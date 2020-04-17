import React from 'react';
import PropTypes from 'prop-types';
import { ImageBackground } from 'react-native';

export default function Background({ image, children }) {
  return (
    <ImageBackground
      source={image}
      style={{
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
      }}
    >
      {children}
    </ImageBackground>
  );
}

Background.propTypes = {
  image: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};
