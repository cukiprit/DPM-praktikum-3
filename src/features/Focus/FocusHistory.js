import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, FlatList } from 'react-native';
import { Button } from 'react-native-paper';
import { marginSizes, paddingSizes, fontSizes } from '../../utils/sizes';
import { colors } from '../../utils/colors';

const HistoryItem = ({ item, index }) => {
  return (
    <View>
      <Text style={styles.historyItem}>{item.subject}</Text>
    </View>
  );
};

export const FocusHistory = ({ focusHistory, onClear }) => {
  const clearHistory = () => {
    onClear();
  };

  return (
    <View>
      <SafeAreaView>
        {!!focusHistory.length && (
          <View>
            <View style={{ alignItems: 'center' }}>
              <Text style={styles.txtHistory}>Hal yang sudah Anda lakukan</Text>
            </View>
            <FlatList
              contentContainerStyle={{ alignItems: 'center' }}
              data={focusHistory}
              renderItem={HistoryItem}
              keyExtractor={(item, index) => index.toString()}
            />
            <Button
              style={{ marginHorizontal: marginSizes.lg }}
              mode="contained"
              onPress={() => clearHistory()}>
              Hapus
            </Button>
          </View>
        )}
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  historyItem: {
    color: colors.black,
    fontSize: fontSizes.md,
    marginVertical: marginSizes.lg,
  },
  txtHistory: {
    fontSize: fontSizes.md,
    fontWeight: 'bold',
    marginBottom: marginSizes.md,
  },
});
