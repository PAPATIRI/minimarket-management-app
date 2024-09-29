import React from 'react';
import { View } from 'react-native';

interface SpaceProps {
  size: number;
  horizontal?: boolean;
  vertical?: boolean;
}

const Space: React.FC<SpaceProps> = ({ size, horizontal, vertical }) => {
  const style = {
    width: horizontal ? size : undefined,
    height: vertical ? size : undefined,
  };

  return <View style={style} />;
};

export default Space;
