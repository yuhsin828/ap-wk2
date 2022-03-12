import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { borderLeftColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";

const Header = () => {
  return (
    <View style={styles.headerStyle}>
      <Text style={styles.textStyle}>IU's Albums</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: "#D9C1CA",
    justifyContent: "center",
    alignItems: "center",
    height: 60,
    shadowColor: "#8C84BF",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    // Android Only
    elevation: 4
  },
  textStyle: {
    fontSize: 20,
    color: "#fff"
  },
});

export default Header;
