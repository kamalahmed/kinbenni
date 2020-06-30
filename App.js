import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, Image, SafeAreaView, Button } from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text
        style={{
          fontSize: 30,
          marginBottom: 10,
        }}
      >
        Daily Dose of Fun
      </Text>

      <Image
        source={require("./assets/cat.jpg")}
        style={{
          width: 200,
          height: 200,
          borderRadius: 8,
        }}
      />

      <Text
        numberOfLines={2}
        style={{
          padding: 30,
        }}
      >
        আসসালামু আলাইকুম বন্ধুরা. আমি তো মোবাইলের এপ বানানো শিখতেছি। তোমারা একটু
        দোয়া করবা তো??
      </Text>
      <Button title={"It was fun"} onPress={() => alert("hank you")} />

      <StatusBar style="auto" />
    </SafeAreaView>
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
