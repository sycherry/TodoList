import { TouchableOpacity, SafeAreaView, StyleSheet, Text, View, FlatList, TextInput } from 'react-native';
import { HomeProps } from './home.props';
import { useState, useEffect } from 'react'

export const Home: React.FC<HomeProps> = () => {

  const initialData = [
    {
      title: 'First Item',
      id: 1
    },
    {
      title: 'Second Item',
      id: 2
    },
    {
      title: 'Third Item',
      id: 3
    },
  ]

  const [data, setData] = useState(initialData)
  const [text, onChangeText] = useState("")

  const addTodoList = () => {
    const specificId = Date.now().toString() + "_" + (Math.random() * 1e6).toFixed(0).toString()
    console.log(specificId)
    setData([...data, { title: text, id: specificId }])
  }
  const removeTodoList = (id) => {
    setData(data => data.filter((data) => data.id !== id))
  }

  const renderItem = ({ item }) => (
    <View>
      <Text>●</Text>
      <Text>{item.title}</Text>
      <TouchableOpacity onPress={() => removeTodoList(item.id)} >
        <Text>Remove</Text>
      </TouchableOpacity>
    </View>
  )

  return (
    <SafeAreaView style={styles.container}>
      <>
        <Text style={styles.title}>TODO:</Text>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        ></FlatList>


        <TextInput
          placeholder='Enter here'
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          onChangeText={t => onChangeText(t)}
          value={text}
        />
        <TouchableOpacity onPress={() => addTodoList()} >
          <Text>ADD</Text>
        </TouchableOpacity>
      </>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#0145A6',
  },
});