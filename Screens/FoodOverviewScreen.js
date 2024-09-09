import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { FOODS, CATEGORIES } from '../data/dummy-data'
import FoodItem from '../components/FoodItem'
import Category from '../models/Category'
import FoodList from '../components/FoodList'

export default function FoodOverviewScreen({ route, navigation }) {
    const categoryId = route.params.categoryId
    const displayedFoods = FOODS.filter((foodItem) => {
        return foodItem.categoryIds.indexOf(categoryId) >= 0;
    })


    useLayoutEffect(() => {

        //  header, girilen yemeğin başlığını alıyor
        const categoryTitle = CATEGORIES.find(
            (Category) =>
                Category.id === categoryId
        ).title

        navigation.setOptions({
            title: categoryTitle
        })


    }, [navigation, categoryId])

    return (
        <FoodList items={displayedFoods}/>
    )
}

const styles = StyleSheet.create({})