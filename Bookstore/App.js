

import React from 'react';

import WalkThrough from "./src/screens/walkthrough";

import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import SignIn from "./src/screens/signin";
import SignUp from "./src/screens/signup";
import HelpUs from "./src/screens/helpus";
import Home from "./src/screens/home";
const Stack = createNativeStackNavigator();
const App = () => {
 return(
   <NavigationContainer>
     <Stack.Navigator  screenOptions={{
       headerShown: false
     }}

     >
       <Stack.Screen name="Home" component={Home} />
       <Stack.Screen name="WalkThrough" component={WalkThrough} />
       <Stack.Screen name="SignIn" component={SignIn} />

       <Stack.Screen name="SignUp" component={SignUp} />
       <Stack.Screen name="HelpUs" component={HelpUs} />
     </Stack.Navigator>
   </NavigationContainer>
 )
};


export default App;
