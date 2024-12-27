import { useState } from "react"
import { View, Text, TouchableOpacity, Alert } from "react-native"
import { MaterialIcons } from "@expo/vector-icons"
import { router } from "expo-router"

import { styles } from "./styles"
import { colors } from "@/styles/colors"
import { Categories } from "@/components/catergories"
import { Input } from "@/components/input"
import { Button } from "@/components/button"

export default function Add() {
  const [category, setCategory] = useState("")
  const [name, setName] = useState("")
  const [url, setUrl] = useState("")

  function handleAdd() {
    if (!category) {
      return Alert.alert("Categoria", "Selecione a categoria.")
    }

    //trim() impede do usuário inserir apenas espaços no campo.
    if (!name.trim()) {
      return Alert.alert("Nome", "Informe o nome.")
    }

    if (!url.trim()) {
      return Alert.alert("Url", "Informe a URL.")
    }

    console.log({ category, name, url })
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <MaterialIcons name="arrow-back" size={32} color={colors.gray[200]} />
        </TouchableOpacity>
        <Text style={styles.title}>Novo</Text>
      </View>
      <Text style={styles.label}>Selecione uma Categoria</Text>
      <Categories onChange={setCategory} selected={category} />

      <View style={styles.form}>
        <Input placeholder="Nome" onChangeText={setName} />
        <Input placeholder="Url" onChangeText={setUrl} />
        <Button title="Adicionar" onPress={handleAdd} />
      </View>
    </View>
  )
}
