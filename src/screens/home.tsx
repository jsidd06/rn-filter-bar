import {
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useState} from 'react';
import RnFilterBar from '../components';
const data: any = [
  {
    id: Math.random().toLocaleString(),
    name: 'animal',
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
  const selectedHandler = (select: any) => {
    setSelectedData((prev: any) => [...prev, select]);
    console.log('check==>', selectedData);
    setShowData([]);
  };
  return (
    <View style={styles.ctn}>
      <RnFilterBar setShowData={setShowData} data={data} />
      <ScrollView>
        {showData.length > 0 ? (
          showData.map((d: any) => (
            <View key={d.id} style={styles.mapCtn}>
              <Pressable
                onPress={() => selectedHandler(d.name)}
                style={styles.btn}>
                <Text>{d.name}</Text>
              </Pressable>
            </View>
          ))
        ) : (
          <Text>No Search found</Text>
        )}
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
