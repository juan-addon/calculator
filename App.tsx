import React from 'react'
import { SafeAreaView, StatusBar, Text } from 'react-native';
import { CalculatorScreen } from './src/screens/CalculadorsScreen';
import { styles } from './src/theme/appTheme';


const App = () => {
  return (
    <SafeAreaView style ={styles.main}>
        <StatusBar
          backgroundColor="black"
          barStyle='light-content'
        />
        <CalculatorScreen/>
    </SafeAreaView>
  )
}

export default App;
