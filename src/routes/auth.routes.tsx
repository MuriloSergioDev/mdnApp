import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';


import Menu from '../pages/Menu';
import Turmas from '../pages/Turmas';
import CreateTurma from '../pages/CreateTurma';
import EditTurma from '../pages/EditTurma';
import TurmaDetail from '../pages/TurmaDetail';
import ListStudents from '../pages/ListStudents';
import PerformanceStudent from '../pages/PerformanceStudent';
import EditPerformance from '../pages/EditPerformance';
import Apostilas from "../pages/Apostilas";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const AuthRoutes = () => {

    const Tab = createBottomTabNavigator();
    const MenuStack = createStackNavigator();
    const SettingsStack = createStackNavigator();


    function MenuStackScreen() {
        return (
            <MenuStack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Menu">
                <MenuStack.Screen name="Menu" component={Menu} />
                <MenuStack.Screen name="Turmas" component={Turmas} />
                <MenuStack.Screen name="Apostilas" component={Apostilas} />
                <MenuStack.Screen name="CreateTurma" component={CreateTurma} />
                <MenuStack.Screen name="EditTurma" component={EditTurma} />
                <MenuStack.Screen name="TurmaDetail" component={TurmaDetail} />
                <MenuStack.Screen name="ListStudents" component={ListStudents} />
                <MenuStack.Screen name="PerformanceStudent" component={PerformanceStudent} />
                <MenuStack.Screen name="EditPerformance" component={EditPerformance} />
            </MenuStack.Navigator>
        );
    }

    function SettingsStackScreen() {
        return (
            <SettingsStack.Navigator>
            </SettingsStack.Navigator>
        );
    }

    const color = 'red';    
    const size = 25; 

    return (
        <NavigationContainer>
            <Tab.Navigator InitialRouteName="Menu" screenOptions={{ headerShown: false }}>
                <Tab.Screen name="Menu" component={MenuStackScreen} options={{
                    tabBarLabel: 'Home2' , tabBarIcon: () => (
                        <Ionicons name="home" color={color} size={size} />
                    ),
                }} />
                <Tab.Screen name="Settings" component={SettingsStackScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default AuthRoutes;