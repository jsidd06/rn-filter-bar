import {StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useEffect} from 'react';

type RnFilterBarProps = {
  setShowData?: any;
  data?: any;
};

const RnFilterBar = ({setShowData, data}: RnFilterBarProps) => {
  useEffect(() => {
    setShowData(data);
  }, [data, setShowData]);
  const handlerSubmit = (text: any) => {
    const d = data.filter((i: any) => i.name === text.toLowerCase());
    setShowData(d);
  };

  return (
    <View>
      <Text>RnFilterBar</Text>
      <TextInput
        style={styles.input}
        placeholder="Search.."
        placeholderTextColor="#000"
        onChangeText={text => handlerSubmit(text)}
      />
    </View>
  );
};

export default RnFilterBar;

const styles = StyleSheet.create({
  input: {
    marginVertical: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
  },
});
