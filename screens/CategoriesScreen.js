import React from "react";
import { StyleSheet, FlatList, Text, View, TouchableOpacity } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";


const CategoryScreen = ({ navigation }) => {

    const renderGridItem = (itemData) => {
        return (
            <CategoryGridTile
                title={itemData.item.title}
                color={itemData.item.color}
                onSelect={() => {
                    navigation.navigate('CategoryMeals', {
                        itemId: itemData.item.id,
                        name: 'Category Meals',
                    })
                }}
            />
        )
    }

    return (
        <FlatList
            data={CATEGORIES}
            renderItem={renderGridItem}
            numColumns={2}
            keyExtractor={(item, index) => item.id}
        />
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
})

export default CategoryScreen;