import React from "react";
import { useEffect, useState, useCallback } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Button,
} from "react-native";
import firebase from "../database/firebaseDB";

const auth = firebase.auth();

export default function ChatScreen({ navigation }) {
  useEffect(() => {
    //This is the listener for authentication
    const unsubscribe = auth.onAuthStateChanged(user);
    {
      if (user) {
        navigation.navigate("Chat");
      } else {
        navigation.navigate("Login");
      }
    }
  });

  return unsubscribe;
}
[];

function logout() {
  firebase.auth().signOut();

  return (
    <View>
      <Button onPress={logout} title="Logout" />
      <Text>Hello this is chatScreen</Text>
    </View>
  );
}
