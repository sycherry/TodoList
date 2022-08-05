import { KeyboardAvoidingView, Platform, TouchableOpacity, SafeAreaView, StyleSheet, Text, View, FlatList, TextInput } from 'react-native';
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
    <View style={styles.listOuter}>
      <View style={styles.listLeft}>
        <View style={styles.textOuter}>
          <View style={styles.textIcon}></View>
          <Text style={styles.text}>{item.title}</Text>
        </View>
      </View>
      <TouchableOpacity onPress={() => removeTodoList(item.id)} >
        <Text>REMOVE</Text>
      </TouchableOpacity>
    </View>
  )

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.row}>
        <View style={styles.titleOuter}>
          <Text style={styles.title}>TODO:</Text>
        </View>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        ></FlatList>
      </View>


      <View style={styles.footerWrap}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.inputOuter}
        >
          <TextInput style={styles.input}
            placeholder="Enter here"
            value={text}
            placeholderTextColor="#666"
            onChangeText={text => onChangeText(text)}
          />
          <TouchableOpacity onPress={() => addTodoList()} >
            <View style={styles.addButton}>
              <Text style={styles.addText}>ADD</Text>
            </View>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </View>



    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  row: {
    paddingHorizontal: 15,
    paddingBottom: 160,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0145A6',
  },
  titleOuter: {
    marginBottom: 20,
  },



  listOuter: {
    backgroundColor: '#fff',
    padding: 18,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  listLeft: {
    maxWidth: '68%',
  },
  textOuter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textIcon: {
    width: 24,
    height: 24,
    backgroundColor: '#0145A6',
    borderRadius: 12,
    marginRight: 12,
  },
  text: {
    fontSize: 16,
    color: '#666',

  },
  footerWrap: {
    backgroundColor: '#ccc',
    position: 'absolute',
    bottom: 0,
    paddingTop: 20,
    paddingBottom: 40,
    paddingHorizontal: 10,
  },
  inputOuter: {
    flexDirection: 'row',
  },
  input: {
    fontSize: 16,
    color: "#000",
    paddingVertical: 28,
    paddingRight: 120,
    paddingLeft: 20,
    backgroundColor: '#FFF',
    borderRadius: 18,
    width: '100%',
    position: 'relative'
  },
  addButton: {
    position: 'absolute',
    right: 10,
    top: 10,
    paddingVertical: 18,
    paddingHorizontal: 30,
    backgroundColor: '#0145A6',
    borderRadius: 20,
  },
  addText: {
    fontWeight: 'bold',
    color: '#fff'
  }
});