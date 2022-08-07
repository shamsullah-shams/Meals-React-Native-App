import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, } from "react-native";


const CategoryGridTile = (props) => {

    const styles = StyleSheet.create({
        gridItem: {
            flex: 1,
            margin: 15,
            height: 150,
        },
        container: {
            backgroundColor: props.color,
            flex: 1,
            borderRadius: 10,
            shadowColor: "black",
            shadowOpacity: 0.26,
            shadowOffset: { width: 0, height: 0 },
            shadowRadius: 10,
            elevation: 3,
            padding: 10,
            justifyContent: "flex-end",
            alignItems: "flex-end",

        },
        title: {
            fontFamily: "open-sans-bold",
            fontSize: 22,
            textAlign: "right",
        }
    });

    return (
        <TouchableOpacity
            style={styles.gridItem}
            onPress={props.onSelect}>
            <View style={styles.container}>
                <Text style={styles.title} numberOfLines={2}>{props.title}</Text>
            </View>
        </TouchableOpacity>
    );
};


export default CategoryGridTile;