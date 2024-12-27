import { View, Text, TouchableOpacity } from "react-native"
import { MaterialIcons } from "@expo/vector-icons"
import { router } from "expo-router"

import { styles } from "./styles"
import { colors } from "@/styles/colors"
import { Categories } from "@/components/catergories"
import { Input } from "@/components/input"
import { Button } from "@/components/button"

export default function Add() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <MaterialIcons name="arrow-back" size={32} color={colors.gray[200]} />
        </TouchableOpacity>
        <Text style={styles.title}>Novo</Text>
      </View>
      <Text style={styles.label}>Selecione uma Categoria</Text>
      <Categories />

      <View style={styles.form}>
        <Input
          placeholder="Nome"
          onChangeText={console.log}
        />
        <Input placeholder="Url" />

        <Button title="Adicionar" />
      </View>
    </View>
  )
}