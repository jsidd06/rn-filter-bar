import {Image, Pressable, StyleSheet, TextInput, View} from 'react-native';
import React, {useEffect, useRef} from 'react';

type RnFilterBarProps = {
  setFilterData?: any;
  data?: any;
  containerStyle?: any;
  inputStyle?: any;
  placeholderName?: string;
  placeholderColor?: any;
  caseSensitive?: boolean;
  debounceTime?: number;
  arrowPress?: any;
  crossPress?: any;
  subContainerStyle?: any;
  leftContainer?: any;
  leftIcon?: any;
  crossContainer?: any;
  crossIcon?: any;
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
  arrowPress,
  crossPress,
  subContainerStyle,
  leftContainer,
  leftIcon,
  crossContainer,
  crossIcon,
}: RnFilterBarProps) => {
  const textInputRef = useRef<TextInput>(null);

  useEffect(() => {
    setFilterData(data);
  }, [data, setFilterData]);

  const handlerSubmit = (text: string) => {
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

  const handleCrossPress = () => {
    if (textInputRef.current) {
      textInputRef.current.clear();
      filterData('');
    }
  };

  return (
    <View style={[containerStyle]}>
      <View style={[styles.subRootCtn, subContainerStyle]}>
        <View style={[styles.rowRoot, leftContainer]}>
          {arrowPress && (
            <Pressable onPress={arrowPress}>
              <Image
                source={
                  leftIcon ? leftIcon : require('../assets/icons/left.png')
                }
                style={styles.img}
              />
            </Pressable>
          )}
          <TextInput
            ref={textInputRef}
            style={[styles.input, inputStyle]}
            placeholder={placeholderName || 'Search...'}
            placeholderTextColor={placeholderColor || '#000'}
            onChangeText={text => handlerSubmit(text)}
          />
        </View>
        {crossPress && (
          <Pressable onPress={handleCrossPress} style={[crossContainer]}>
            <Image
              source={
                crossIcon ? crossIcon : require('../assets/icons/cross.png')
              }
              style={styles.img}
            />
          </Pressable>
        )}
      </View>
    </View>
  );
};

export default RnFilterBar;

const styles = StyleSheet.create({
  subRootCtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    paddingRight: 10,
    paddingLeft: 10,
    borderRadius: 8,
  },
  input: {
    marginLeft: 10,
  },
  rowRoot: {flexDirection: 'row', alignItems: 'center'},
  img: {width: 14, height: 14},
});
