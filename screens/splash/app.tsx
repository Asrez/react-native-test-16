import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import SplashScreen from "react-native-splash-screen";

const SplashScreen = ({ navigation }) => {
  const [timePassed, setTimePassed] = useState(false);

  setTimeout(function () {
    setTimePassed(true);
    SplashScreen.hide();
  }, 1500);

  if (!timePassed) {
    return (
      <View style={styles.splash}>
        <Text style={styles.text}>Splash Screen</Text>
      </View>
    );
  }
  navigation.navigate('Onboarding Screen');
  return null;
};

const styles = StyleSheet.create({
  splash: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh"
  },
  text: {
    fontSize: 20
  }
});

export default SplashScreen;