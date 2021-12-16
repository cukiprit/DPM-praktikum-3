import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Platform } from 'react-native';
import { Focus } from './src/features/Focus/Focus';
import { FocusHistory } from './src/features/Focus/FocusHistory';
import { Timer } from './src/features/Timer/Timer';
import { fontSizes, paddingSizes, marginSizes } from './src/utils/sizes';
import { colors } from './src/utils/colors';

const STATUSES = {
  COMPLETED: 1,
  CANCELLED: 2,
};

export default function App() {
  const [focusSubject, setFocusSubject] = useState(null);
  const [focusHistory, setFocusHistory] = useState([]);

  // useEffect(() => {
  //   if(focSubject){
  //     setFocusHistory([...focusHistory, focSubject])
  //   }
  // }, [focSubject]); 

  const addHistorySubject = (subject, status) => {
    setFocusHistory([...focusHistory, { subject, status }]);
  };

  const onClear = () => {
    // delete things to do
    setFocusHistory([])
  };

  console.log(focusHistory);

  return (
    <View style={styles.container}>
      {focusSubject ? (
        <Timer
          focusSubject={focusSubject}
          onTimerEnd={() => {
            addHistorySubject(focusSubject, STATUSES.COMPLETED);
            setFocusSubject(null);
          }}
          clearSubject={() => {
            addHistorySubject(focusSubject, STATUSES.CANCELLED);
            setFocusSubject(null);
          }}
        />
      ) : (
        <View>
          <Focus addSubject={setFocusSubject} />
          <FocusHistory focusHistory={focusHistory} onClear={onClear} />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS !== 'ios' ? paddingSizes.md : paddingSizes.xl,
    backgroundColor: colors.cyan,
  },
});
