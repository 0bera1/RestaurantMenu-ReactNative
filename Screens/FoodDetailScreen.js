import { ScrollView, StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React, { useLayoutEffect, useContext } from 'react';
import { FOODS } from '../data/dummy-data';
import FoodIngredients from '../components/FoodIngredients';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { favContext } from '../store/favContext';




export default function FoodDetailScreen({ route, navigation }) {


    const favFoodContext = useContext(favContext)
    const pressFavHandler = () => {
        setfavIconVisible(!favIconVisible)
    }
    const foodId = route.params.foodId;
    const selectedFood = FOODS.find(
        (food) => food.id === foodId
    );

    const foodIsFav = favFoodContext.ids.includes(foodId);
    function changeFav(){
        if (foodIsFav){
            favFoodContext.removeFav(foodId);
        }
        else {
            favFoodContext.addFav(foodId);
        }
    }

    useLayoutEffect(() => {
        //  headerda fav iconu belirtiyor
        navigation.setOptions({
            headerRight: () => {
                return <Pressable onPress={pressFavHandler}>
                    <MaterialIcons
                        name={foodIsFav ? 'favorite' : 'favorite-outline'}
                        size={36} color="#d32f2f"
                        onPress={changeFav} />
                </Pressable>
            }
        })


    }, [navigation, changeFav])

    return (
        <ScrollView>
            <View style={styles.container}>
                <Image style={styles.image}
                    source={{ uri: selectedFood.imageUrl }} />
                <Text style={styles.titlee}>{selectedFood.title}</Text>
            </View>

            <View style={styles.details}>
                <Text style={styles.detailItem}>{selectedFood.complexity}, </Text>
                <Text style={styles.detailItem}>{selectedFood.affordability}</Text>
            </View>
            <View style={styles.ingredientsContainer}>
                <Text style={styles.ingredientsTitle}>İçindekiler</Text>
                <View>
                    <FoodIngredients data={selectedFood.ingredients} />
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,

        marginBottom: 10
    },
    image: {
        width: '100%',
        height: 300,
        borderRadius: 15,
        marginBottom: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 10,
        elevation: 5,
    },
    titlee: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#343a40',
        marginBottom: 10,
        textAlign: 'center',
    },
    details: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#dee2e6',
    },
    detailItem: {
        fontSize: 18,
        color: '#495057',
        marginHorizontal: 5,
    },

    ingredientsContainer: {
        alignSelf: 'center',
        width: '95%',
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: '#ffffff',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 6,
        elevation: 4,
        marginVertical: 10,
    },
    ingredientsTitle: {
        fontSize: 20,
        fontWeight: '600',
        color: '#212529',
        marginBottom: 10,
        fontWeight: 'bold'
    }
});
