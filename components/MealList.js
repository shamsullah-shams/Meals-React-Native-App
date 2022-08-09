import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import MealItem from "./MealItem";


const MealList = props => {
    const renderMealItem = itemData => {
        return (
            <MealItem
                title={itemData.item.title}
                onSelectMeal={() => {
                    props.navigation.navigate('MealDetails', {
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
                data={props.display}
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


export default MealList;