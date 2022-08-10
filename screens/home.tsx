import React, { FC, useState, useEffect } from 'react'
import { Platform, KeyboardAvoidingView, TouchableOpacity, SafeAreaView, Text, View, FlatList, ListRenderItemInfo } from 'react-native';
import { HomeProps } from './home.props';
import { initialData } from './initialData';
import { ItemType } from '../models/ItemType';
import { FontAwesome } from '@expo/vector-icons';
import { AddAndUpdate } from '../components/addAndUpdate'
import { styles } from './home.styles';
import { Todo } from '../models/todoType';
import { Mode } from '../models/modeType';
import { palette } from "../styles/color"

export const Home: FC<HomeProps> = () => {

  const [data, setData] = useState<Todo[]>(initialData)
  const [text, setText] = useState<string>("")
  const [button, setButton] = useState<Mode>("ADD")
  const [updateID, setUpdateID] = useState<number>(0)
  const [buttonDisabled, setButtonDisabled] = useState<boolean>(true)
  const [updateDisabled, setUpdateDisabled] = useState<boolean>(false)

  useEffect(() => {
    setButtonDisabled(!text)
  }, [text])

  const onChangeText = (text: any) => {
    setText(text)
  }

  const addAndUpdateTodoList = () => {
    if (button === "ADD") {
      const specificId = Number(Date.now() + (Math.random() * 1e6).toFixed(0))
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
      setUpdateDisabled(false)
    }
    setText("")
  }

  const removeTodoList = (id: number) => {
    setData(data => data.filter((data) => data.id !== id))
  }

  const updateTodoList = (id: number) => {
    const item = data.find((data) => data.id == id);
    if (item) {
      setButton("UPDATE")
      setText(item.title)
      setUpdateID(item.id)
      setUpdateDisabled(true)
    }
  }

  const renderItem = ({ item }: ListRenderItemInfo<ItemType>) => (
    <TouchableOpacity testID="list" disabled={updateDisabled} onPress={() => updateTodoList(item.id)} >
      <View style={styles.listOuter}>

        <View style={styles.listLeft}>
          <View style={styles.textOuter}>
            <View style={styles.textIcon}></View>
            <Text testID="text" style={styles.text}>{item.title}</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.remove}disabled={updateDisabled} testID="delete" onPress={() => removeTodoList(item.id)} >
          <Text><FontAwesome name="trash-o" size={28} color={palette.gray} /></Text>
        </TouchableOpacity>

      </View>
    </TouchableOpacity>
  )

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}>
      <SafeAreaView style={styles.container}>
        {updateDisabled && <View style={styles.overlay}></View>}


        <View style={styles.row}>
          <View style={styles.titleOuter}><Text style={styles.title}>TODO:</Text></View>
          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={item => item.id.toString()}
            ListFooterComponent={<View style={styles.block} />}
          />
        </View>

        <AddAndUpdate
          text={text}
          onChangeText={onChangeText}
          disabled={buttonDisabled}
          button={button}
          addAndUpdateTodoList={addAndUpdateTodoList}
        />

      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}
