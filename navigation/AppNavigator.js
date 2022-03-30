import React from 'react';
import { Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import FirstScreen from '../screens/FirstScreen';
import SecondScreen from '../screens/SecondScreen';


const Stack = createStackNavigator();

function AppNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Home"
                headerMode="screen"
                screenOptions={{
                    headerTintColor: Platform.OS === 'android' ? 'white' : 'blue',
                    headerStyle: {
                        backgroundColor: Platform.OS === 'android' ? 'green' : ''
                    }
                }}
                
            >
                <Stack.Screen
                    name="FirstScreen"
                    component={FirstScreen}
                    options={{
                        title: 'Home',
                    }}
                />

                <Stack.Screen
                    name="SecondScreen"
                    component={SecondScreen}
                    options={{
                        title: 'Text-to-Speech',
                    }}
                />
                
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default AppNavigator;