import {StyleSheet, TextInput, View} from 'react-native';
import React, {useEffect} from 'react';

type RnFilterBarProps = {
  setFilterData?: any;
  data?: any;
  containerStyle?: any;
  inputStyle?: any;
  placeholderName?: string;
  placeholderColor?: any;
  caseSensitive?: boolean;
  debounceTime?: number;
};

const RnFilterBar = ({
  setFilterData,
  data,
  inputStyle,
  containerStyle,
  placeholderName,
  placeholderColor,
  caseSensitive = false,
  debounceTime = 0,
}: RnFilterBarProps) => {
  useEffect(() => {
    setFilterData(data);
  }, [data, setFilterData]);

  const handlerSubmit = (text: any) => {
    if (debounceTime > 0) {
      setTimeout(() => filterData(text), debounceTime);
    } else {
      filterData(text);
    }
  };

  const filterData = (text: string) => {
    const filteredData = data.filter((item: any) =>
      caseSensitive
        ? item.name.includes(text)
        : item.name.toLowerCase().includes(text.toLowerCase()),
    );
    setFilterData(filteredData);
  };

  return (
    <View style={[containerStyle]}>
      <TextInput
        style={[styles.input, inputStyle]}
        placeholder={placeholderName || 'Search...'}
        placeholderTextColor={placeholderColor || '#000'}
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
