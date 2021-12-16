import React, { useState } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { TextInput } from 'react-native-paper';
import { RoundedButton } from '../../components/RoundedButton';
import { fontSizes, paddingSizes, marginSizes } from '../../utils/sizes';
import { colors } from '../../utils/colors';

export const Focus = ({ addSubject }) => {
  const [subject, setSubject] = useState(null);

  return (
    <View>
      <View style={styles.titleContaier}>
        <Text style={styles.title}>Apa yang ingin Anda lakukan?</Text>
        <View style={styles.inputContainer}>
          <TextInput
            label="Ketik Masukan"
            mode="outlined"
            style={{
              flex: 1,
              marginRight: marginSizes.md,
              backgroundColor: '#fff',
            }}
            onSubmitEditing={({ nativeEvent }) => setSubject(nativeEvent.text)}
          />
          <RoundedButton
            size={55}
            title="+"
            onPress={() => addSubject(subject)}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    color: colors.black,
    fontSize: fontSizes.lg,
    fontWeight: 'bold',
  },
  titleContaier: {
    padding: paddingSizes.lg,
    justifyContent: 'center',
  },
  inputContainer: {
    marginTop: marginSizes.md,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
