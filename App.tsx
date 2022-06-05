import React, {Component, useState, useEffect} from 'react'
import type {Node} from 'react';

import { View,
    Dimensions,
    StyleSheet, Animated, SafeAreaView, Text} from 'react-native'

const CIRCLE_RADIUS = 100;
const CIRCLE_BORDER_WITH = 2;
const ADDITIONAL_RADIUS = 6;
const CIRCLE_DIAMETER = 10;

const App: () => Node = () => {

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>
          Manchester United
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  }
});

export default App;
