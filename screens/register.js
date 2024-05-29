import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, KeyboardAvoidingView, Platform, Picker } from "react-native";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";

//comments for later 
//the database need to recognize that username is an identifier of the user account and make sure it is unique 
//also the text in password and confirm password should be the same if not throw error that is visible in the UI 

export default function Register({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [username, setUsername] = useState("");

  const onHandleRegister = () => {
    if (email !== "" && password !== "" && confirmPassword !== "" && password === confirmPassword && username !== "" ) {
      createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
          Alert.alert("Registration successful", "You can now login.");
          navigation.navigate('Login');
        })
        .catch((err) => Alert.alert("Registration error", err.message));
    } else {
      Alert.alert("Error", "Please fill in all fields correctly");
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={80}
    >
      <View style={styles.innerContainer}>
       <View style={styles.logoContainer}>
          <Text style={[styles.logoText, styles.pink]}>4</Text>
          <Text style={[styles.logoText, styles.orange]}>t</Text>
          <Text style={[styles.logoText, styles.yellow]}>h</Text>
          <Text style={[styles.logoText, styles.green]}>e</Text>
          <Text style={[styles.logoText, styles.blue]}>g</Text>
          <Text style={[styles.logoText, styles.indigo]}>a</Text>
          <Text style={[styles.logoText, styles.violet]}>y</Text>
          <Text style={[styles.logoText, styles.pink]}>s</Text>
        </View>

        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          placeholderTextColor="#999"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          autoCapitalize="none"
          placeholderTextColor="#999"
        />
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry
          autoCapitalize="none"
          placeholderTextColor="#999"
        />
        <TextInput
          style={styles.input}
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
          autoCapitalize="none"
          placeholderTextColor="#999"
        />
      
        <TouchableOpacity style={styles.button} onPress={onHandleRegister}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.signInText}>Already have an account?          Login</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFEFEF",
  },
  innerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  logoContainer: {
    flexDirection: "row",
    marginBottom: 30,
  },
  logoText: {
    fontSize: 69,
    fontFamily: "Chalkboard SE", // Replace with your cute font
    textAlign: "center",
  },
  orange: {
    color: "#ffa07a", // Light salmon
  },
  yellow: {
    color: "#ffd700", // Gold
  },
  green: {
    color: "#98fb98", // Pale green
  },
  blue: {
    color: "#add8e6", // Light blue
  },
  indigo: {
    color: "#87cefa", // Light sky blue
  },
  violet: {
    color: "#ee82ee", // Lavender
  },
  pink: {
    color: "#F8C8DC", 
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#ffb6c1", // Light pink
  },
  input: {
    width: "100%",
    height: 50,
    borderColor: "#ffb6c1", // Light pink
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 20,
    color: "#333",
  },
  pronounsPicker: {
    width: "100%",
    height: 50,
    borderColor: "#ffb6c1", // Light pink
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 20,
    color: "#333",
  },
  button: {
    width: "100%",
    height: 50,
    backgroundColor: "#ffb6c1", // Light pink
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginBottom: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  signInText: {
    color: "#ffb6c1", // Light pink
    marginTop: 20,
    fontSize: 16,
  },
});
