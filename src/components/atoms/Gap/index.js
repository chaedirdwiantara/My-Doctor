import {StyleSheet, View} from 'react-native';
import React from 'react';

const Gap = props => {
  const {height, width} = props;

  return <View style={{height: height, width: width}} />;
};

export default Gap;
