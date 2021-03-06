import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  StyledContainer,
  InnerContainer,
  PageLogo,
  PageTitle,
} from "./../styles";

import Image from "../../assets/splash.png";

// const Login = () => {
//   return (
//     <View style={styles.container}>
//       <Image source={Image} />
//       <Text>Login</Text>
//       {/* <StatusBar style="auto" /> */}
//     </View>
//   );
// };

const Login = () => {
  return (
    <StyledContainer>
      <InnerContainer>
        <PageLogo source={require("./../../assets/logo.png")}></PageLogo>
        <PageTitle>TFGB</PageTitle>
      </InnerContainer>
    </StyledContainer>
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
