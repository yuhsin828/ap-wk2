import React from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import albumData from "../json/albums";

const Albumlist = () => {
  return (
    <ScrollView>
      {/* <View style={styles.iuIntro}>
        <Image
          style={styles.thumbnailStyle}
          source={{
            uri: albumData[0].thumbnail_image
          }}
        />
        <Text>IU</Text>
      </View> */}
      <View style={styles.cardContainerStyle}>
        <View style={[styles.thumbnailContainerStyle, styles.cardSectionStyle]}>
          <Image
            style={styles.thumbnailStyle}
            source={{
              uri: albumData[0].thumbnail_image
            }}
          />
          <View style={styles.headerContentStyle}>
            <Text>{albumData[0].title}</Text>
            <Text>{albumData[0].artist}</Text>
          </View>
        </View>
        <View style={styles.cardSectionStyle}>
          <Image
            style={styles.imageStyle}
            source={{
              uri: albumData[0].image
            }}
          />
        </View>
      </View>
      <View style={styles.cardContainerStyle}>
        <View style={[styles.thumbnailContainerStyle, styles.cardSectionStyle]}>
          <Image
            style={styles.thumbnailStyle}
            source={{
              uri: albumData[1].thumbnail_image
            }}
          />
          <View style={styles.headerContentStyle}>
            <Text>{albumData[1].title}</Text>
            <Text>{albumData[1].artist}</Text>
          </View>
        </View>
        <View style={styles.cardSectionStyle}>
          <Image
            style={styles.imageStyle}
            source={{
              uri: albumData[1].image
            }}
          />
        </View>
      </View>
      <View style={styles.cardContainerStyle}>
        <View style={[styles.thumbnailContainerStyle, styles.cardSectionStyle]}>
          <Image
            style={styles.thumbnailStyle}
            source={{
              uri: albumData[2].thumbnail_image
            }}
          />
          <View style={styles.headerContentStyle}>
            <Text>{albumData[2].title}</Text>
            <Text>{albumData[2].artist}</Text>
          </View>
        </View>
        <View style={styles.cardSectionStyle}>
          <Image
            style={styles.imageStyle}
            source={{
              uri: albumData[2].image
            }}
          />
        </View>
      </View>
      <View style={styles.cardContainerStyle}>
        <View style={[styles.thumbnailContainerStyle, styles.cardSectionStyle]}>
          <Image
            style={styles.thumbnailStyle}
            source={{
              uri: albumData[3].thumbnail_image
            }}
          />
          <View style={styles.headerContentStyle}>
            <Text>{albumData[3].title}</Text>
            <Text>{albumData[3].artist}</Text>
          </View>
        </View>
        <View style={styles.cardSectionStyle}>
          <Image
            style={styles.imageStyle}
            source={{
              uri: albumData[3].image
            }}
          />
        </View>
      </View>
      <View style={styles.cardContainerStyle}>
        <View style={[styles.thumbnailContainerStyle, styles.cardSectionStyle]}>
          <Image
            style={styles.thumbnailStyle}
            source={{
              uri: albumData[4].thumbnail_image
            }}
          />
          <View style={styles.headerContentStyle}>
            <Text>{albumData[4].title}</Text>
            <Text>{albumData[4].artist}</Text>
          </View>
        </View>
        <View style={styles.cardSectionStyle}>
          <Image
            style={styles.imageStyle}
            source={{
              uri: albumData[4].image
            }}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  iuIntro: {

  },
  thumbnailContainerStyle: {
    flexDirection: "row",
    justifyContent: "flex-start"
  },
  thumbnailStyle: {
    height: 50,
    width: 50,
    margin: 5,
    // borderRadius: 25
  },
  headerContentStyle: {
    flexDirection: "column",
    justifyContent: "space-around",
    paddingLeft: 10
  },
  cardContainerStyle: {
    // borderWidth: 1,
    // borderRadius: 2,
    // borderColor: "#D9C1CA",
    shadowColor: "#D9C1CA",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 20
  },
  cardSectionStyle: {
    padding: 5,
    backgroundColor: "#fff",
    borderColor: "#D9C1CA",
    borderBottomWidth: 1
  },
  imageStyle: {
    borderRadius: 10,
    height: 300,
    width: null
  }
});

export default Albumlist;
