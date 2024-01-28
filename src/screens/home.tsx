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
