import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import MealList from "../components/MealList";


const CategoryDetailsScreen = ({ route, navigation }) => {
    const { itemId } = route.params;
    const display = MEALS.filter(meal => meal.categoryIds.indexOf(itemId) >= 0);


    return <MealList display={display} navigation={navigation} />
}



export default CategoryDetailsScreen;