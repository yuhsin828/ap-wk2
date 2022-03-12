import React from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import AlbumDetail from "./AlbumDetail";
import albumData from "../json/albums";

const AlbumList = () => {
  return (
    <ScrollView>
      <View style={styles.iuIntro}>
        <Image
          style={styles.thumbnailStyle}
          source={{
            uri: "https://i.kfs.io/artist/global/234878,0v11/fit/300x300.jpg"
          }}
        />
        <View>
          <Text style={styles.iuName}>IU 이지은</Text>
          <Text style={styles.introText}>Korea</Text>
        </View>
      </View>
      <View>
        <AlbumDetail album={albumData[0]} />
        <AlbumDetail album={albumData[1]} />
        <AlbumDetail album={albumData[2]} />
        <AlbumDetail album={albumData[3]} />
        <AlbumDetail album={albumData[4]} />
      </View>

      {/* <View style={styles.cardContainerStyle}>
        <View style={styles.cardSectionStyle}>
          <Image
            style={styles.imageStyle}
            source={{
              uri: albumData[0].image
            }}
          />
        </View>
        <View style={styles.cardSectionStyle}>
          <View style={styles.headerContentStyle}>
            <Text>{albumData[0].title}</Text>
            <Text>{albumData[0].release}</Text>
          </View>
        </View>
      </View>

      <View style={styles.cardContainerStyle}>
        <View style={styles.cardSectionStyle}>
          <Image
            style={styles.imageStyle}
            source={{
              uri: albumData[1].image
            }}
          />
        </View>
        <View style={styles.cardSectionStyle}>
          <View style={styles.headerContentStyle}>
            <Text>{albumData[1].title}</Text>
            <Text>{albumData[1].release}</Text>
          </View>
        </View>
      </View>

      <View style={styles.cardContainerStyle}>
        <View style={styles.cardSectionStyle}>
          <Image
            style={styles.imageStyle}
            source={{
              uri: albumData[2].image
            }}
          />
        </View>
        <View style={styles.cardSectionStyle}>
          <View style={styles.headerContentStyle}>
            <Text>{albumData[2].title}</Text>
            <Text>{albumData[2].release}</Text>
          </View>
        </View>
      </View>

      <View style={styles.cardContainerStyle}>
        <View style={styles.cardSectionStyle}>
          <Image
            style={styles.imageStyle}
            source={{
              uri: albumData[3].image
            }}
          />
        </View>
        <View style={styles.cardSectionStyle}>
          <View style={styles.headerContentStyle}>
            <Text>{albumData[3].title}</Text>
            <Text>{albumData[3].release}</Text>
          </View>
        </View>
      </View>

      <View style={styles.cardContainerStyle}>
        <View style={styles.cardSectionStyle}>
          <Image
            style={styles.imageStyle}
            source={{
              uri: albumData[4].image
            }}
          />
        </View>
        <View style={styles.cardSectionStyle}>
          <View style={styles.headerContentStyle}>
            <Text>{albumData[4].title}</Text>
            <Text>{albumData[4].release}</Text>
          </View>
        </View>
      </View> */}

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  iuIntro: {
    flexDirection: "row",
    padding: 30,
    backgroundColor: "#D9C1CA",
    alignItems: "center"
  },
  thumbnailStyle: {
    height: 120,
    width: 120,
    borderRadius: 60
  },
  iuName: {
    fontSize: 28,
    color: "#59252E",
    paddingLeft: 25,
    marginBottom: 5
  },
  introText: {
    fontSize: 20,
    color: "#59252E",
    paddingLeft: 25
  }
});

export default AlbumList;
