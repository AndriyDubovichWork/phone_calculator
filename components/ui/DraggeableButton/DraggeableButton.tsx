import React, { useState } from 'react';
import { View, Dimensions } from 'react-native';
import { RNSlidingButton, SlideDirection } from 'rn-sliding-button';

import LightGrayButtonComponent from '../LightGreyButton/LightGreyButton';

type DraggeableButtonProps = {
  onSwipe: (input: string) => void;
};

const DraggeableButton = ({ onSwipe }: DraggeableButtonProps) => {
  const windowWidth = Dimensions.get('window').width;
  const buttonSize = (windowWidth / 100) * 22;
  return (
    <RNSlidingButton
      style={{ backgroundColor: '#000' }}
      slideDirection={SlideDirection.ANY}
      onSlidingSuccess={(direction: any) => {
        if (direction === 'left') {
          onSwipe('(');
        } else if (direction === 'right') {
          onSwipe(')');
        } else {
          onSwipe('error' + direction);
        }
      }}
      height={buttonSize}
      successfulSlidePercent={10}
    >
      <LightGrayButtonComponent title='( )' />
    </RNSlidingButton>
  );
};

export default DraggeableButton;
