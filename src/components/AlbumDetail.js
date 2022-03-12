import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

const AlbumDetail = (props) => {
  const { title, artist, image, release } = props.album;
  return (
    <View style={styles.cardContainerStyle}>
      <View style={styles.cardSectionStyle}>
        <Image
          style={styles.imageStyle}
          source={{
            uri: image
          }}
        />
      </View>
      <View style={styles.cardSectionStyle}>
        <View style={styles.headerContentStyle}>
          <Text>{title}</Text>
          <Text>{release}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  // thumbnailContainerStyle: {
  //   flexDirection: "row",
  //   justifyContent: "flex-start"
  // },

  cardContainerStyle: {
    elevation: 5,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 30,
    borderColor: "#D9C1CA",
    borderBottomWidth: 3
  },
  cardSectionStyle: {
    padding: 10,
    backgroundColor: "#fff",
  },
  imageStyle: {
    borderRadius: 10,
    height: 300,
    width: null
  },
  headerContentStyle: {
    flexDirection: "column",
    justifyContent: "space-around",
    paddingLeft: 10
  },
});

export default AlbumDetail;