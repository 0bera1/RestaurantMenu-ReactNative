import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FoodIngredients({ data }) {
    return data.map((dataIng) => (
        <View key={dataIng}>
            <Text>{dataIng}</Text>
        </View>

    ))
}

const styles = StyleSheet.create({})