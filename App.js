import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View, Image } from "react-native";

export default function Statustbsr() {
  const [a, ubahNilai] = useState(0);

  return (
    <View style={styles.container} onPress={() => alert("HAHAHAH")}>
      <Image
        style={{ width: 50, height: 50 }}
        source={{ uri: "https://facebook.github.io/react/img/logo_og.png" }}
      />
      <StatusBar style="auto" />
      <TextInput
        style={{ height: 40, borderColor: "gray", borderWidth: 1, width: 100 }}
        onChangeText={(e) => ubahNilai(e)}
      />
      <Text style={{ fontSize: 20, color: "blue", fontWeight: "400" }}>
        {a}
      </Text>
      <Button
        title="Klik Disini"
        color="red"
        onPress={() => ubahNilai(a + 1)}
        backgroundColor="#000"
        accessibilityLabel="Learn more about this purple button"
      />
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
  title: {
    fontSize: 20,
    color: "blue",
    fontWeight: "400",
  },
});
