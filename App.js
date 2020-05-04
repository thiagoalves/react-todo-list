import React, { useEffect, useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

import {
  getMovies
} from './Data';

const App: () => React$Node = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => getMovies(setData), []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Philmes phoddas</Text>
      <FlatList
        data={data}
        renderItem={({item}) => <Text style={styles.item}>{item.title}</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 40,
  },
  container: {
   flex: 1,
   top: 50,
   left: 30,  
   paddingTop: 40
  },
  item: {
    padding: 20,
    fontSize: 18,
    height: 44,
  },
})

export default App;
