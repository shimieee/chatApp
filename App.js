import React , { useContext, useState, useEffect, createContext }from "react";
import { NavigationContainer } from "@react-navigation/native";  
import { createStackNavigator } from "@react-navigation/stack";
import {View , ActivityIndicator} from 'react-native';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from './config/firebase';


//importing screens 
import Chat from "./screens/chat";
import Login from "./screens/login";
import Register from "./screens/register";
import Home from "./screens/home";

const Stack = createStackNavigator();
const AuthenticatedUserContext = createContext ({});

//The AuthenticatedUserProvider component is a React component that uses the Context API to manage and provide an authenticated user's state throughout a React application.

const AuthenticatedUserProvider = ({ children }) => {
  //State Initialization:
  const [user , setUser]= useState (null);
  return(
    //Providing Context
    <AuthenticatedUserContext.Provider value={{user, setUser}}>
      {children}
    </AuthenticatedUserContext.Provider>
  )
}

//deals with home/chat 
function ChatStack() {
  return(
    <Stack.Navigator defaultScreenOptions={Home}>
      <Stack.Screen name="Home" component={Home} options={{ headerShown: false }}/>
      <Stack.Screen name="Chat" component={Chat} options={{ headerShown: false }}/>
    </Stack.Navigator>
  )
}

//deals w auth screens 
function AuthStack() {
  return(
    <Stack.Navigator  defaultScreenOptions={Login}>
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false }}/>
      <Stack.Screen name="Register" component={Register}options={{ headerShown: false }}/>
    </Stack.Navigator>
  )
}

function RootNavigator() {
    // Access the user context and state modification function
  const { user, setUser } = useContext(AuthenticatedUserContext);
    // Local state to track loading status
  const [isLoading, setIsLoading] = useState(true);

  // useEffect to handle authentication state changes
useEffect(() => {
    // onAuthStateChanged returns an unsubscriber
    const unsubscribeAuth = onAuthStateChanged(
      auth, // Authentication service (e.g., Firebase auth)
      async authenticatedUser => {
        // If an authenticated user is detected, set the user state
        authenticatedUser ? setUser(authenticatedUser) : setUser(null);
        // Update the loading state to false
        setIsLoading(false);
      }
    );
// unsubscribe auth listener on unmount
    return unsubscribeAuth;
  }, [user]);

// If the loading state is true, show a loading spinner 
if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size='large' />
      </View>
    );
  }

// Conditionally render navigation stacks based on the user's authentication status
return (
    <NavigationContainer>
      {user ? <ChatStack /> : <AuthStack />}
    </NavigationContainer>
  );
}

export default function App(){
  return (
    <AuthenticatedUserProvider>
        <RootNavigator/>
    </AuthenticatedUserProvider>
  )
   
}

