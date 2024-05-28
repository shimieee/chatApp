import React from "react";
import { NavigationContainer } from "@react-navigation/native";  
import { createStackNavigator } from "@react-navigation/stack";

//importing screens 
import Chat from "./screens/chat";
import Login from "./screens/login";
import Register from "./screens/register";

const Stack = createStackNavigator();

function ChatStack() {
  return(
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false }}/>
      <Stack.Screen name="Register" component={Register} options={{ headerShown: false }}/>
    </Stack.Navigator>
  )
}

function RootNavigator(){
  return(
    <NavigationContainer>
      <ChatStack/>
    </NavigationContainer>
  )
}
export default function App(){
  return <RootNavigator/>
   
}

