import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Header = () => {
  return (
    <View style={styles.headerStyle}>
      <Text style={styles.textStyle}>IU  |  Albums</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: "#906B7A",
    justifyContent: "center",
    alignItems: "center",
    height: 60,
    shadowColor: "#D9C1CA",
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
