import {useState} from 'react';
import {FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native';

const App = () => {
  const [img, setImg] = useState([]);

  return (
    <SafeAreaView>
      <View
        style={{height: 100, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontSize: 28}}>Gallery</Text>
      </View>
      <View style={{flex: 1}}>
        <FlatList
          data={img}
          keyExtractor={(_, index) => index}
          initialNumToRender={img.length}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
