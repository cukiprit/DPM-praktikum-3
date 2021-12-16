import React, { useState } from 'react';
import { View, Text, StyleSheet, Vibration, Platform } from 'react-native';
import { Button, ProgressBar } from 'react-native-paper';
import Constant from 'expo-constants';
import { useKeepAwake } from 'expo-keep-awake';
import { Countdown } from '../../components/Countdown';
import { colors } from '../../utils/colors';
import { fontSizes, paddingSizes, marginSizes } from '../../utils/sizes';
import { Timing } from './Timing';

const DEFAULT_TIME = 0.1;

export const Timer = ({ focusSubject, onTimerEnd, clearSubject }) => {
  useKeepAwake();

  const [minutes, setMinutes] = useState(DEFAULT_TIME);
  const [isStarted, setIsStarted] = useState(false);
  const [progress, setProgress] = useState(1);

  const onProgress = (progress) => {
    setProgress(progress);
  };

  const vibrate = () => {
    if (Platform.OS === 'ios') {
      const interval = setInterval(() => Vibration.vibrate(), 1000);
      setTimeout(() => clearInterval(interval), 1000);
    } else {
      Vibration.vibrate(1000);
    }
  };

  const onEnd = () => {
    setMinutes(DEFAULT_TIME);
    setProgress(1);
    setIsStarted(false);
    onTimerEnd();
    vibrate();
  };

  const changeTime = (minutes) => {
    setMinutes(minutes);
  };

  return (
    <View style={styles.container}>
      <View style={styles.countdown}>
        <Countdown
          minutes={minutes}
          isPaused={!isStarted}
          onProgress={onProgress}
          onEnd={onEnd}
        />
      </View>
      <View style={styles.contentFocus}>
        <Text style={styles.txtTitle}>Saat ini sedang:</Text>
        <Text style={styles.focus}>{focusSubject}</Text>
      </View>

      <ProgressBar
        minutes={minutes}
        style={{
          marginHorizontal: marginSizes.md,
          height: 10,
          borderRadius: 10,
          marginTop: marginSizes.md,
        }}
        color={colors.purpleBlue}
        progress={progress}
      />

      <View style={styles.btnWrapper}>
        <Timing onChangeTime={changeTime} />
      </View>

      <View style={styles.btnWrapper}>
        {isStarted ? (
          <Button
            color={colors.purpleBlue}
            dark={true}
            style={styles.btn}
            mode="contained"
            size={50}
            onPress={() => setIsStarted(false)}>
            Pause
          </Button>
        ) : (
          <Button
            color={colors.purpleBlue}
            dark={true}
            style={styles.btn}
            mode="contained"
            size={50}
            onPress={() => setIsStarted(true)}>
            Mulai
          </Button>
        )}
        <Button
          color={colors.purpleBlue}
          dark={true}
          style={[styles.btn, { marginTop: marginSizes.lg }]}
          mode="contained"
          size={50}
          onPress={() => clearSubject()}>
          Kembali
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constant.statusBarHeight,
  },
  contentFocus: {
    alignItems: 'center',
    marginTop: Constant.statusBarHeight,
  },
  txtTitle: {
    fontSize: fontSizes.xl,
    color: colors.black,
    fontWeight: 'bold',
  },
  focus: {
    fontSize: fontSizes.lg,
    color: colors.black,
  },
  countdown: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    marginHorizontal: marginSizes.md,
    padding: paddingSizes.sm,
  },
  btnWrapper: {
    flex: 0.5,
  },
});
