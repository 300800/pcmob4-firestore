import React from "react";
import { View, TextInput, StyleSheet, TouchableOpacity } from "react-native";

export default function LoginScreen({ navigation }) {
  return (
    <View>
      <Text style={StyleSheet.title}>Chat App</Text>
      <Text style={StyleSheet.fieldTitle}>Email</Text>
      <TextInput
        style={Styles.input}
        autoCapitalize="none"
        autoCompleteType="email"
      />
      <Text style={Style.fieldTitle}>Password</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCompleteType="password"
      />
      <TouchableOpacity onPress={null} style={styles.loginButton}>
        <Text style={styles.buttonText}>Log in</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 24,
  },
  titles: {
    fontSize: 36,
    fontWeight: "bold",
    marginBottom: 24,
  },
  fieldTitle: {
    fontSize: 18,
    marginBottom: 12,
  },
  input: {
    borderColor: "#999",
    borderWidth: 1,
    marginBottom: 24,
    padding: 4,
    height: 36,
    fontSize: 18,
  },
});
