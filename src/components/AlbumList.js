import React from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import { backgroundColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";
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
        <Text>IU</Text>
      </View>

      <AlbumDetail album={albumData[0]} />
      <AlbumDetail album={albumData[1]} />
      <AlbumDetail album={albumData[2]} />
      <AlbumDetail album={albumData[3]} />
      <AlbumDetail album={albumData[4]} />

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

// const styles = StyleSheet.create({
//   iuIntro: {
//     flexDirection: "row",
//     padding: 30,
//     backgroundColor: "#D9C1CA"
//   },
//   thumbnailStyle: {
//     height: 120,
//     width: 120,
//     borderRadius: 60
//   },

//   // thumbnailContainerStyle: {
//   //   flexDirection: "row",
//   //   justifyContent: "flex-start"
//   // },

//   cardContainerStyle: {
//     elevation: 5,
//     marginLeft: 20,
//     marginRight: 20,
//     marginTop: 30,
//     borderColor: "#D9C1CA",
//     borderBottomWidth: 3
//   },
//   cardSectionStyle: {
//     padding: 10,
//     backgroundColor: "#fff",
//   },
//   imageStyle: {
//     borderRadius: 10,
//     height: 300,
//     width: null
//   },
//   headerContentStyle: {
//     flexDirection: "column",
//     justifyContent: "space-around",
//     paddingLeft: 10
//   },
// });

export default AlbumList;
