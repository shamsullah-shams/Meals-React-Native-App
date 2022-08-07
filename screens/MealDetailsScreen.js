import React, { useEffect } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { MEALS } from "../data/dummy-data";

const MealDetailSreen = () => {
    // const { itemId } = route.params;
    // const selectMeal = MEALS.find(m => m.id === itemId);

    return (
        <View style={styles.screen}>
            <Text>test</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    }
})

export default MealDetailSreen;