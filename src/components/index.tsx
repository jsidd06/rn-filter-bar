import {StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useEffect} from 'react';

type RnFilterBarProps = {
  setFilterData?: any;
  data?: any;
};

const RnFilterBar = ({setFilterData, data}: RnFilterBarProps) => {
  useEffect(() => {
    setFilterData(data);
  }, [data, setFilterData]);
  const handlerSubmit = (text: any) => {
    if (text.trim() === '') {
      setFilterData(data);
    } else {
      const filteredData = data.filter(
        (i: any) => i.name === text.toLowerCase(),
      );
      setFilterData(filteredData);
    }
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
