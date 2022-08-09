import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import CategoryScreen from './screens/CategoriesScreen';
import * as Font from "expo-font";
import React, { useState } from 'react';
import AppLoading from 'expo-app-loading';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MealDetailSreen from './screens/MealDetailsScreen';
import categoryMealsScreen from "./screens/CategoryMealsScreen";
import { AntDesign } from '@expo/vector-icons';
import FavoriteScreen from "./screens/FavoriteScreen";
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';


const fetchFonts = () => {
    return Font.loadAsync({
        'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
        'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
    })
}

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Meals = () => {
    const [fontLoaded, setFontLoaded] = useState(false);

    if (!fontLoaded) {
        return <AppLoading
            startAsync={fetchFonts}
            onFinish={() => setFontLoaded(true)}
            onError={(error) => console.log(error)}
        />
    }

    const OptionsOfNavigation = title => {
        return {
            title: title,
            headerTitleAlign: "center",
            headerStyle: {
                backgroundColor: "#6495ed",
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        }
    }


    return (
        <Stack.Navigator>
            <Stack.Screen name='Category Meal Screen'
                options={OptionsOfNavigation("Meals Category")} component={CategoryScreen} />
            <Stack.Screen
                options={({ route }) => OptionsOfNavigation(route.params.name)}
                name="CategoryMeals" component={categoryMealsScreen} />
            <Stack.Screen
                name='MealDetails'
                component={MealDetailSreen}
                options={({ route }) => {
                    return {
                        ...OptionsOfNavigation(route.params.name),
                        headerRight: () => (
                            <AntDesign name="staro" size={24} color="white" onPress={() => {
                                console.log('Marked as faverite');
                            }} />
                        )
                    }
                }}
            />
        </Stack.Navigator>
    );
}


const TabFunction = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: () => {
                        if (route.name === "Meals") {
                            return <Ionicons name="ios-restaurant-sharp" size={24} color="black" />
                        } else if (route.name === "Favorite") {
                            return <MaterialIcons name="favorite-outline" size={24} color="black" />
                        }
                    },
                    tabBarActiveTintColor: "tomato",
                    tabBarInactiveTintColor: "black",
                    tabBarStyle: {
                        backgroundColor: "#6495ed"
                    }
                })}
            >
                <Tab.Screen options={{
                    headerShown: false,
                }} name='Meals' component={Meals} />
                <Tab.Screen options={{
                    headerShown: true,
                    headerStyle: {
                        backgroundColor: "#6495ed"
                    },
                    headerTintColor: "#fff",
                    headerTitleAlign: "center",
                    headerTitleStyle: {
                        fontWeight: "bold"
                    }
                }} name='Favorite' component={FavoriteScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({
    container: {
    },
});


export default TabFunction;