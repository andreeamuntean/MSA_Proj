import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  StyledContainer,
  InnerContainer,
  PageLogo,
  PageTitle,
} from "./styles.js";

import Image from "../../assets/splash.png";

const Login = () => {
  return (
    <View style={styles.container}>
      <Image source={Image} />
      <Text>Login</Text>
      {/* <StatusBar style="auto" /> */}
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#d7b8f5",
    alignItems: "center",
    justifyContent: "center",
  },
});
