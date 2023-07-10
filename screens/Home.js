import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import Nav from "../components/Nav";

const Home = ({ navigation }) => {
  return (
    <SafeAreaView style={{ marginTop: 30, padding: 16, flex: 1 }}>
      <Nav navigation={navigation} />
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-around",
          rowGap: 25,
          marginTop: 40,
        }}
      >
        <View>
          <TouchableOpacity>
            <Image
              source={require("../assets/camera.png")}
              style={{ width: 150, height: 150 }}
            />
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity>
            <Image
              source={require("../assets/browse.png")}
              style={{ width: 150, height: 150 }}
            />
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity>
            <Image
              source={require("../assets/collage.png")}
              style={{ width: 150, height: 150 }}
            />
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity>
            <Image
              source={require("../assets/files.png")}
              style={{ width: 150, height: 150 }}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          marginVertical: 30,
          paddingVertical: 30,
          margin: 15,
          border: "2px solid #CCCCCC",
          borderRadius: 4,
          backgroundColor: "#CCCCCC",
          height: 200,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>Advertisments Space</Text>
      </View>
      <View
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 50,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          source={require("../assets/name.png")}
          style={{ width: 100, height: 30 }}
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
