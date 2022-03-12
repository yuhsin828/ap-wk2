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
    backgroundColor: "#D8C7D1",
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
    color: "#8C84BF"
  },
});

export default Header;
