import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView } from "react-native";

export default function Home({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.title}>Welcome to 4thegays!</Text>
        <Text style={styles.subtitle}>Home Screen</Text>
        <TouchableOpacity style={[styles.button, styles.red]} onPress={() => navigation.navigate('Chat')}>
          <Text style={styles.buttonText}>Chat</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.orange]} onPress={() => navigation.navigate('Profile')}>
          <Text style={styles.buttonText}>Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.yellow]} onPress={() => navigation.navigate('Settings')}>
          <Text style={styles.buttonText}>Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.green]} onPress={() => navigation.navigate('Logout')}>
          <Text style={styles.buttonText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  innerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#ffb6c1", // Light pink
  },
  subtitle: {
    fontSize: 24,
    marginBottom: 40,
    color: "#ffb6c1", // Light pink
  },
  button: {
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    marginBottom: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  red: {
    backgroundColor: "#ffb6c1", // Light pink
  },
  orange: {
    backgroundColor: "#ffd1b3", // Light orange
  },
  yellow: {
    backgroundColor: "#fffacd", // Light yellow
  },
  green: {
    backgroundColor: "#d4f1d6", // Light green
  },
});
