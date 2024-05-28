import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, KeyboardAvoidingView, Platform } from "react-native";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";

export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onHandleLogin = () => {
    if (email !== "" && password !== "") {
      signInWithEmailAndPassword(auth, email, password)
        .then(() => console.log("Login success"))
        .catch((err) => Alert.alert("Login error", err.message));
    } else {
      Alert.alert("Error", "Please enter both email and password");
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
        <TouchableOpacity style={styles.button} onPress={onHandleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Text style={styles.signUpText}>Don't have an account?          Sign Up</Text>
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
    color: "#F8C8DC", // Pastel pink
  },
  input: {
    width: "100%",
    height: 50,
    borderColor: "#F8C8DC", // Pastel pink
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 20,
    color: "#333",
  },
  button: {
    width: "100%",
    height: 50,
    backgroundColor: "#F8C8DC", // Pastel pink
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
  signUpText: {
    color: "#F8C8DC", // Pastel pink
    marginTop: 20,
    fontSize: 16,
  },
});
