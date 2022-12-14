import React from "react";
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View, } from "react-native";


const MealItem = props => {
    return (
        <View style={styles.mealItem}>
            <TouchableOpacity onPress={props.onSelectMeal}>
                <View>
                    <View style={styles.mealHeader}>
                        <ImageBackground source={{ uri: props.image }} style={styles.bgImage}>
                            <View style={styles.titleContainer}>
                                <Text numberOfLines={1} style={styles.title}>{props.title}</Text>
                            </View>
                        </ImageBackground>
                    </View>
                    <View style={styles.mealDetail}>
                        <Text>{props.duration}m</Text>
                        <Text>{props.complexity.toUpperCase()}</Text>
                        <Text>{props.affordability.toUpperCase()}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    );
};


const styles = StyleSheet.create({
    mealItem: {
        height: 200,
        width: "100%",
        backgroundColor: "#f5f5f5",
        borderRadius: 10,
        overflow: "hidden",
    },
    mealHeader: {
        flexDirection: "row",
        height: 170,
    },
    mealDetail: {
        flexDirection: "row",
        paddingHorizontal: 10,
        justifyContent: "space-between",
        height: 30,
    },
    bgImage: {
        width: "100%",
        height: "100%",
        justifyContent: "flex-end"
    },
    title: {
        fontFamily: "open-sans-bold",
        fontSize: 20,
        color: "white",
        textAlign: "center"
    },
    titleContainer: {
        backgroundColor: "rgba(0,0,0,0.5)",
        paddingVertical: 5,
        paddingHorizontal: 12,
    }
});


export default MealItem;