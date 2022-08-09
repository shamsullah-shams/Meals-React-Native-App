import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MealList from "../components/MealList";
import { MEALS } from "../data/dummy-data";

const FavoriteScreen = ({ navigation }) => {
    const display = MEALS.filter(m => m.id === "m1" || m.id === "m2");


    return <MealList display={display} navigation={navigation} />
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    }
})

export default FavoriteScreen;