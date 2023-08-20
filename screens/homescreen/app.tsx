import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SplashScreen from 'react-native-splash-screen';

const SplashScreenUI = () => {
  setTimeout(() => {
    SplashScreen.hide();
  }, 1500);
  return (
    <View>
      <Text>SplashScreenUI</Text>
    </View>
  )
}

export default SplashScreenUI

const styles = StyleSheet.create({})