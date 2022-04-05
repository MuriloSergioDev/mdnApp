import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Menu from './pages/Menu';
import Turmas from './pages/Turmas';
import CreateTurma from './pages/CreateTurma';
import EditTurma from './pages/EditTurma';
import TurmaDetail from './pages/TurmaDetail';
import EditUser from './pages/EditUser';
import ListStudents from './pages/ListStudents';
import PerformanceStudent from './pages/PerformanceStudent';
import RecoverPassword from './pages/RecoverPassword';
import EditPerformance from './pages/EditPerformance';
import Apostilas from "./pages/Apostilas";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Routes2 = () => {

    const Tab = createBottomTabNavigator();
    const AppStack = createStackNavigator();
    const MenuStack = createStackNavigator();
    const SettingsStack = createStackNavigator();


    function MenuStackScreen() {
        return (
            <MenuStack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Home">

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

    function TabStackScreen() {
        return (
            <Tab.Navigator>
                <Tab.Screen name="Home" component={MenuStackScreen} />
                <Tab.Screen name="Settings" component={SettingsStackScreen} />
            </Tab.Navigator>
        );
    }

    return (
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Home">
                <AppStack.Screen
                    name="Menu"
                    component={TabStackScreen}
                    options={{ headerShown: false }}
                />
                <AppStack.Screen name="Home" component={Home} />
                <AppStack.Screen name="Login" component={Login} />
                <AppStack.Screen name="SignUp" component={SignUp} />
                <AppStack.Screen name="EditUser" component={EditUser} />
                <AppStack.Screen name="RecoverPassword" component={RecoverPassword} />
            </AppStack.Navigator>

        </NavigationContainer>
    );
}

export default Routes2;