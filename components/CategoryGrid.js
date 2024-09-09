import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function CategoryGrid({ title, color, FoodPress }) {
    return (
        <View style={styles.gridContainer}>
            <Pressable
                android_ripple={{ color: '#ccc' }}
                style={({ pressed }) => [
                    styles.button,
                    pressed ? styles.buttonPressed : null,
                ]}
                onPress={FoodPress}
            >
                <View style={[styles.insideView, { backgroundColor: color }]}>
                    <Text style={styles.title}>{title}</Text>
                </View>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    gridContainer: {
        flex: 1,
        margin: 15,
        height: 150,
        borderRadius: 20,
        overflow: 'hidden',
        elevation: 8,
        shadowColor: '#171717',
        shadowOpacity: 0.2,
        shadowOffset: { width: -2, height: 4 },
        shadowRadius: 5,
        backgroundColor: 'white'
    },
    button: {
        flex: 1,
    },
    buttonPressed: {
        opacity: 0.5,
    },
    insideView: {
        flex: 1,
        padding: 15,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
    },
    title: {
        fontFamily: 'sans-serif-medium',
        fontSize: 18,
        textAlign: 'center',
        color: '#FFFDD0',

    },
})