import React, { useState } from 'react';
import { View, Dimensions } from 'react-native';
import { RNSlidingButton, SlideDirection } from 'rn-sliding-button';

import LightGrayButtonComponent from '../LightGreyButton/LightGreyButton';
import Slick from 'react-native-slick';
type DraggeableButtonProps = {
  onSwipe: (input: string) => void;
};

const DraggeableButton = ({ onSwipe }: DraggeableButtonProps) => {
  const windowWidth = Dimensions.get('window').width;
  const buttonSize = (windowWidth / 100) * 22;

  const [position, setPosition] = useState(0);
  return (
    <>
      <LightGrayButtonComponent
        title='( )'
        onPressIn={(e: any) => {
          setPosition(e.pageX);
        }}
        onPressOut={(e: any) => {
          if (e.locationX > position) {
            onSwipe('(');
          } else if (e.locationX < position) {
            onSwipe(')');
          } else {
            onSwipe(e.locationX);
          }
        }}
      />
    </>
  );
};

export default DraggeableButton;
