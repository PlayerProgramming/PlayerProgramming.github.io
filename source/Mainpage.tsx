import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  Image,
  TouchableOpacity,
  FlatList,
  Platform,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Contactinfo from "./Contactinfo";
import * as data from "./data";

export default function Mainpage({ navigation }) {
  return (
    <SafeAreaView style={[styles.AndroidSafeArea, { flex: 1 }]}>
      <LinearGradient colors={data.theme.gradient} style={styles.background} />
      <View style={styles.headerContainer}>
        <View style={styles.headerImageContainer}>
          <Image
            style={[styles.headerImage]}
            source={require("../assets/etgcharacter1.png")}
          />
        </View>
        <Text>
          Hi, {"\n\n"}I'm Henry, {"\n\n"}the Fun Developer.{" "}
        </Text>
      </View>
      <View style={styles.bodyContainer}>
        <FlatList
          contentContainerStyle={{
            flexGrow: 1,
            justifyContent: "center",
          }}
          data={data.info}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.bodyList}
              onPress={() => navigation.navigate(item.id)}
            >
              <Image
                source={item.image}
                style={[
                  { width: 100, height: 100, borderRadius: 20 },
                  styles.bodyImage,
                ]}
              />
              <Text>{item.title}</Text>
            </TouchableOpacity>
          )}
          numColumns={3}
          horizontal={false}
          keyExtractor={(item) => item.id}
        />
      </View>
      <View style={styles.footerContainer}>
        <Contactinfo />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  headerContainer: {
    flex: 0.4,
    flexDirection: "row",
    margin: 10,
    borderRadius: 20,
    borderWidth: 0.2,
    alignItems: "center",
    justifyContent: "space-evenly",
  },

  test1: {},
  headerImage: {
    width: Platform.OS === "web" ? "80%" : "100%",
    height: Platform.OS === "web" ? 200 : undefined,
    flex: 1,
    resizeMode: "contain",
    margin: 10,
    borderRadius: 12,
  },
  headerImageContainer: {
    flex: 0.4,
  },
  bodyContainer: {
    flex: 1,
    margin: 10,
  },
  bodyList: {
    flex: 1,
    margin: 5,
    marginVertical: 30,
    width: "100%",
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 0.2,
    borderColor: "black",
    borderRadius: 20,
  },
  bodyImage: {
    width: undefined,
    height: undefined,
    aspectRatio: 1,
    resizeMode: "contain",
    flex: 1,
  },
  AndroidSafeArea: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  footerContainer: {
    flex: 0.1,
    margin: 10,
  },

  background: {
    position: "absolute",
    flex: 1,
    left: 0,
    right: 0,
    top: 0,
    // height: Platform.OS === "android" ? "120%" : "100%",
    ...Platform.select({
      ios: {
        height: 1000,
      },
      android: {
        height: 1400,
      },
      default: {
        height: "100%",
      },
    }),

    borderColor: "red",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
});
