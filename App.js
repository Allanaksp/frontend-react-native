import { StyleSheet, Text, View } from 'react-native';
import  Header  from './components/Header'
import footer  from './components/Footer'
import content from './components/content';
import Content from './components/content';
import Footer from './components/Footer';

export default function App() {
  return (
    <View style={styles.container}>
        
        <Header />

        <Content />

        <Footer />
  
    </View>
  )

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})