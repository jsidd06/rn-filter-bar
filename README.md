# rn-filter-bar

| iOS                            | Android                                |
| ------------------------------ | -------------------------------------- |
| ![for iOS](src/assets/ios.gif) | ![for Android](src/assets/android.gif) |

`rn-filter-bar` is a customizable React Native component that provides a simple filter bar for searching and filtering data.

## Installation

To use `rn-filter-bar` in your React Native project, follow these steps:

1.Install the package using npm:

```bash
npm install rn-filter-bar
```

### Import the RnFilterBar component in your desired screen or component:

```
import RnFilterBar from 'rn-filter-bar';
```

## Usage

```
import React, { useState } from 'react';
import { View, Text } from 'react-native';
import RnFilterBar from 'rn-filter-bar';

const YourComponent = () => {
  const [filteredData, setFilteredData] = useState([]);

  const handleFilter = (filteredData) => {
    // Handle the filtered data as needed
    setFilteredData(filteredData);
  };

  return (
    <View>
      <RnFilterBar
        setFilterData={handleFilter}
        data={/* Your data array */}
        containerStyle={{ margin: 10 }}
        inputStyle={{ backgroundColor: '#e0e0e0' }}
        placeholderName="Search Items"
        placeholderColor="#888"
        caseSensitive={false}
        debounceTime={300}
      />
      {/* Display your filteredData */}
      {filteredData.map((item, index) => (
        <Text key={index}>{item.name}</Text>
      ))}
    </View>
  );
};

export default YourComponent;
```

### Props

- `setFilterData` : Callback function to receive the filtered data.
- `data` : The data to be filtered.
- `containerStyle` : Style for the container View.
- `inputStyle` : Style for the TextInput.
- `placeholderName`: Placeholder text for the input field.
- `placeholderColor` : Color of the placeholder text.
- `caseSensitive` : Boolean indicating whether the search should be case-sensitive.
- `debounceTime` : Time in milliseconds for debounce (optional).

## Usage 2

```
import {
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import RnFilterBar from '../components';
const data: any = [
  {
    id: Math.random().toLocaleString(),
    name: 'Animal',
  },
  {
    id: Math.random().toLocaleString(),
    name: 'lion',
  },
  {
    id: Math.random().toLocaleString(),
    name: 'cat',
  },
  {
    id: Math.random().toLocaleString(),
    name: 'cats',
  },
  {
    id: Math.random().toLocaleString(),
    name: 'crock',
  },
  {
    id: Math.random().toLocaleString(),
    name: 'baby',
  },
  {
    id: Math.random().toLocaleString(),
    name: 'scot',
  },
  {
    id: Math.random().toLocaleString(),
    name: 'zebra',
  },
];

const Home = () => {
  const [showData, setShowData] = useState([]);
  const [selectedData, setSelectedData] = useState<any>([]);
  useEffect(() => {
    console.log('check==>', selectedData);
  }, [selectedData]);

  const selectedHandler = (select: any) => {
    setSelectedData((prev: any) => {
      const sData = [...prev, select];
      return sData;
    });
    setShowData([]);
  };

  return (
    <View style={styles.ctn}>
      <RnFilterBar setFilterData={setShowData} data={data} />
      <ScrollView>
        {showData.map((d: any) => (
          <View key={d.id} style={styles.mapCtn}>
            <Pressable
              onPress={() => selectedHandler(d.name)}
              style={styles.btn}>
              <Text>{d.name}</Text>
            </Pressable>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  ctn: {
    flex: 1,
    paddingVertical: Platform.OS === 'ios' ? 80 : 10,
    marginHorizontal: 20,
  },
  mapCtn: {marginHorizontal: 15},
  btn: {marginVertical: 20},
});

```

#### Feel free to customize the styles and props according to your application's requirements.
