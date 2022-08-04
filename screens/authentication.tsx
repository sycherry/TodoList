import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { AuthenticationProps } from './authentication.props';

export const Authentication: React.FC<AuthenticationProps> = ({ navigation }) => {
   const toHome = () => {
        navigation.navigate('Home')
    } 
    return (
        <View style={styles.container}>
          <Text style={styles.title}>Set Authentication to Proceed</Text>
          <TouchableOpacity style={styles.button} onPress={() => toHome() } >
          <Text style={styles.buttonText}>Go to Settings</Text>
          </TouchableOpacity>
    
        </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 60
  },
  title: {
    fontSize: 24,
    marginBottom: 28,
  },
  button: {
    backgroundColor: '#0145A6',
    paddingHorizontal: 40,
    paddingVertical: 18,
    borderRadius:30
  },
  buttonText: {
    color: '#fff',
    fontSize:20,
    fontWeight: "bold"
  }
});
