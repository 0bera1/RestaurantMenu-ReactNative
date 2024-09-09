import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { favContext } from '../store/favContext'
import { FOODS } from '../data/dummy-data';
import FoodList from '../components/FoodList';
import { useNavigation } from '@react-navigation/native';

export default function FavsScreen() {
    const navigation = useNavigation()
    const goAddFav = () => {
        navigation.navigate('Kategoriler')
    }
    const favFoodContext = useContext(favContext);
    const favFoods = FOODS.filter(
        (food) => favFoodContext.ids.includes(food.id))


    if (favFoods.length === 0) {
        return (
            <View style={styles.textContainer}>
                <Text onPress={goAddFav} style={styles.text}>Favorilere bir şey eklemediniz!</Text>
            </View>
        )
    }
    return <FoodList items={favFoods} />
}

const styles = StyleSheet.create({
    textContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    text: {
        fontSize: 18,
        color: '#ff6347',
        fontFamily:'Kanit'
    }
})