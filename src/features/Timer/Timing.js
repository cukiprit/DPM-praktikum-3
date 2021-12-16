import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import { fontSizes, paddingSizes, marginSizes } from '../../utils/sizes';
import { colors } from '../../utils/colors';

export const Timing = ({ onChangeTime }) => {
  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <Button
          color={colors.purpleBlue}
          style={styles.btn}
          mode="contained"
          onPress={() => onChangeTime(5)}>
          5
        </Button>

        <Button
          color={colors.purpleBlue}
          style={styles.btn}
          mode="contained"
          onPress={() => onChangeTime(10)}>
          10
        </Button>

        <Button
          color={colors.purpleBlue}
          style={styles.btn}
          mode="contained"
          onPress={() => onChangeTime(15)}>
          15
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  item: {
    flexDirection: 'row',
  },
  btn: {
    marginTop: marginSizes.md,
    marginHorizontal: marginSizes.md,
  },
});
