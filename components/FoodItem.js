import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

export default function FoodItem({
    id,
    title,
    imageUrl,
    affordability,
    complexity
}) {
    const navigation = useNavigation();
    const FoodItemHandler= () => {
        navigation.navigate('Yemek Detay', {
            foodId:id
        });
    }
    return (
        <View style={styles.Item}>
            <Pressable style={({ pressed }) => (pressed ?
                styles.buttonPressed : null
            )}
            onPress={FoodItemHandler}>
                <View style={styles.innerView}>
                    <Image style={styles.image} source={{ uri: imageUrl }} />
                    <Text style={styles.titlee}>{title}</Text>
                    <View style={styles.details}>
                        <Text style={styles.detailItem}>{complexity}, </Text>
                        <Text style={styles.detailItem}>{affordability}</Text>
                    </View>
                </View>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    Item: {
        justifyContent: 'center',
        marginHorizontal: 15,
        borderWidth: 1,
        borderRadius: 20,
        borderColor: 'white',
        margin: 10,
        elevation: 4,
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        backgroundColor: 'white',
        shadowColor: 'gray'
    },
    innerView: {
        padding: 10,
        flex: 1
    },
    image: {
        width: '100%',
        height: 200,
        borderTopLeftRadius: 21,
        borderTopRightRadius: 21,
    },
    titlee: {
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold',
        margin: 8

    },
    details: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center'

    },
    detailItem: {
        fontSize: 13.5
    },
    buttonPressed:{
        opacity:0.75
    }
})