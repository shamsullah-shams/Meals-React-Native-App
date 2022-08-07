import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";


const CategoryDetailsScreen = ({ route, navigation }) => {
    const { itemId } = route.params;
    const display = MEALS.filter(meal => meal.categoryIds.indexOf(itemId) >= 0);
    const renderMealItem = itemData => {
        return (
            <MealItem
                title={itemData.item.title}
                onSelectMeal={() => {
                    navigation.navigate('MealDetails', {
                        itemId: itemData.item.id,
                        name: itemData.item.title,
                    })
                }}
                duration={itemData.item.duration}
                affordability={itemData.item.affordability}
                complexity={itemData.item.complexity}
                image={itemData.item.imageUrl}
            />
        )
    }

    return (
        <View style={styles.screen}>
            <FlatList
                data={display}
                keyExtractor={(item, index) => item.id}
                renderItem={renderMealItem}
                style={{ width: "100%" }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 10,
    }
})

export default CategoryDetailsScreen;