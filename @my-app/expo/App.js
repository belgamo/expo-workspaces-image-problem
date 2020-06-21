import React from "react";
import { StyleSheet, Text, View } from "react-native";

import GoogleButton from "@my-app/ui/GoogleButton";

export default function App() {
  return (
    <View style={styles.container}>
      <GoogleButton />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
