import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Onborading from './src/screens/Onborading';
import Login from './src/screens/auth/Login';
import Register from './src/screens/auth/Register';
import RecoveryPassword from './src/screens/auth/RecoveryPassword';
import Home from './src/components/Home';
import CourseDetails from './src/components/screens/CourseDetails';

const Stack = createNativeStackNavigator();


function StackScreen(){
  return(
    <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen  name="Onborading" component={Onborading} />
    <Stack.Screen  name="Login" component={Login} />
    <Stack.Screen  name="Register" component={Register} />
    <Stack.Screen  name="RecoveryPassword" component={RecoveryPassword} />
    <Stack.Screen  name="Home" component={Home} />
    <Stack.Screen  name="CourseDetails" component={CourseDetails} />
    
</Stack.Navigator>
  )
}

export default function App() {
  return (
    <>
      <NavigationContainer>
          <StackScreen />
          
    </NavigationContainer> 
          
    </>
  );
}