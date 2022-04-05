import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../pages/Home';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';
import EditUser from '../pages/EditUser';
import RecoverPassword from '../pages/RecoverPassword';


const AppRoutes = () => {

    const AppStack = createStackNavigator();

    return (
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Home">                
                <AppStack.Screen name="Home" component={Home} />
                <AppStack.Screen name="Login" component={Login} />
                <AppStack.Screen name="SignUp" component={SignUp} />
                <AppStack.Screen name="EditUser" component={EditUser} />
                <AppStack.Screen name="RecoverPassword" component={RecoverPassword} />
            </AppStack.Navigator>

        </NavigationContainer>
    );
}

export default AppRoutes;