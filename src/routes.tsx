import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';


const AppStack = createStackNavigator();
const Drawer = createDrawerNavigator();

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

const Routes = () => {

    return (
        <NavigationContainer>

            <AppStack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Home">
                <AppStack.Screen name="Home" component={Home} />
                <AppStack.Screen name="Login" component={Login} />
                <AppStack.Screen name="SignUp" component={SignUp} />
                <AppStack.Screen name="Menu" component={Menu} />
                <AppStack.Screen name="Turmas" component={Turmas} />
                <AppStack.Screen name="CreateTurma" component={CreateTurma} />
                <AppStack.Screen name="EditTurma" component={EditTurma} />
                <AppStack.Screen name="TurmaDetail" component={TurmaDetail} />
                <AppStack.Screen name="EditUser" component={EditUser} />
                <AppStack.Screen name="ListStudents" component={ListStudents} />
                <AppStack.Screen name="PerformanceStudent" component={PerformanceStudent} />
                <AppStack.Screen name="RecoverPassword" component={RecoverPassword} />
                <AppStack.Screen name="EditPerformance" component={EditPerformance} />
            </AppStack.Navigator>

        </NavigationContainer>
    );
}

const DrawerNavigator = () => {

    const Drawer = createDrawerNavigator();

    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Turmas" component={Turmas} />
        </Drawer.Navigator>
    );
}

export default Routes;