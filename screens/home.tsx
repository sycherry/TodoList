import { StyleSheet, Text, View } from 'react-native';
import { HomeProps } from './home.props';

export const Home: React.FC<HomeProps> = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>TODO:</Text>

  <View>
    <Text>●</Text> 
    <Text>First Item</Text>
    <Text>Remove</Text> 
  </View>
  <View>
    <Text>Second Item</Text>
  </View>
  <View>
    <Text>Third Item</Text>
  </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 60
  },
  title : {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#0145A6',
  },
});
