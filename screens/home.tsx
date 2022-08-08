import React, { FC, useState, useEffect } from 'react'
import { TouchableOpacity, SafeAreaView, StyleSheet, Text, View, FlatList, ListRenderItemInfo } from 'react-native';
import { HomeProps } from './home.props';
import { useState } from 'react'
import { initialData } from './initialData';
import { ItemType } from '../models/ItemType';
import { AddAndUpdate } from '../components/addAndUpdate'

export const Home: FC<HomeProps> = () => {


  const [data, setData] = useState(initialData)
  const [text, setText] = useState("")
  const [button, setButton] = useState("ADD")
  const [updateID, setUpdateID] = useState(0)
import { FontAwesome } from '@expo/vector-icons';

  const addAndUpdateTodoList = () => {
    console.log("test")
    if (button === "ADD") {
      const specificId = Number(Date.now() + (Math.random() * 1e6).toFixed(0))
      console.log("test",specificId)
      setData([...data, { title: text, id: specificId }])
    } else {
      const newData = data.map(item => {
        if (item.id == updateID) {
          return { title: text, id: updateID }
        }
        return item;
      });
      setData(newData);
      setButton("ADD")
    }
    setText("")
  }
  const removeTodoList = (id) => {
    setData(data => data.filter((data) => data.id !== id))
    setButton("ADD")
  }
  const updateTodoList = (id) => {
    const datas = data.filter((data) => data.id == id)
    console.log(datas[0].title)
    setText(datas[0].title)
    setButton("UPDATE")
    setUpdateID(datas[0].id)
    console.log(updateID)
  }


  const renderItem = ({ item }: ListRenderItemInfo<ItemType>) => (
    <TouchableOpacity onPress={() => updateTodoList(item.id)} >
      <View style={styles.listOuter}>

        <View style={styles.listLeft}>
          <View style={styles.textOuter}>
            <View style={styles.textIcon}></View>
            <Text style={styles.text}>{item.title}</Text>
          </View>
        </View>

        <TouchableOpacity onPress={() => removeTodoList(item.id)} >
          <Text><FontAwesome name="trash-o" size={24} color="#999" /></Text>
        </TouchableOpacity>

      </View>

    </TouchableOpacity>
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

      <AddAndUpdate
        text={text}
        onChangeText={onChangeText}
        disabled={disabled}
        button={button}
        addAndUpdateTodoList={addAndUpdateTodoList}
      />

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
    marginVertical: 20,
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
    borderBottomColor: '#666',
  },
  block: {
    height: 280,
  },
});