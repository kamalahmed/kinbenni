import React from "react";
import { StyleSheet, ImageBackground, View, Image, Text } from "react-native";

const WelcomeScreen = (props) => {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <Image source={require("../assets/icon.png")} style={styles.logo} />
      <Text style={styles.title}>কিনবেন নাকি?</Text>
      <Text style={styles.tagline}>সেরা দামে সেরা পণ্য</Text>
      <View style={styles.loginButton}>
        <Text style={styles.button}>প্রবেশ করুন</Text>
      </View>
      <View style={styles.registerButton}>
        <Text style={styles.button}>নতুন একাউন্ট খুলুন</Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  button: {
    color: "#ffffff",
    textAlign: "center",
    padding: 20,
  },
  loginButton: {
    width: "100%",
    height: 70,
    backgroundColor: "#fc5c65",
  },
  registerButton: {
    width: "100%",
    height: 70,
    backgroundColor: "#4ecdc4",
  },
  logo: {
    width: 100,
    height: 100,
    position: "absolute",
    top: 70,
  },
  title: {
    position: "absolute",
    top: 200,
    fontSize: 50,
    color: "#fff",
  },
  tagline: {
    position: "absolute",
    top: 280,
    fontSize: 20,
    color: "#fff",
  },
});

export default WelcomeScreen;
