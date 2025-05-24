import React, {useState} from 'react';
import { SafeAreaView, View, StyleSheet } from 'react-native';
import COLORS from './constants/colors';
// import TabBar from './components/TabBar';
// import CustomButton from './components/CustomButton';
// import Card from './components/Card';
// import CategoryTabs from './components/CategoryTabs.jsx';
// import AffirmationBanner from './components/AffirmationBanner';
// import Header from './components/Header';


const App = () => {
  // const [activeTab, setActiveTab] = useState('home');
  // const [activeCategory, setActiveCategory] = useState('mood');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        {/* <Header /> */}
        {/* <CategoryTabs
          activeCategory={activeCategory}
          onChange={setActiveCategory}
        /> */}
        {/* <Card
          title="Calm 🌊"
          subtitle="розслаблення, медитація"
          imageSource={require('./assets/images/calm.png')}
        />
        <CustomButton
          title="Press Me"
          onPress={() => console.log('Button pressed')}
        /> */}
        {/* <AffirmationBanner /> */}
      </View>
      {/* <TabBar activeTab={activeTab} onTabPress={setActiveTab} /> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.neutralLightest,
  },
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
