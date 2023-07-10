import {
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/AntDesign";
import Nav from "../components/Nav";

const About = ({ navigation }) => {
  return (
    <SafeAreaView style={{ marginTop: 30, padding: 14, flex: 1 }}>
      {/* <Nav navigation={navigation} /> */}
      <View style={{ display: "flex", flexDirection: "row", marginTop: 20 }}>
        <View>
          <Pressable onPress={() => navigation.goBack()}>
            <Icon name="arrowleft" size={25} />
          </Pressable>
        </View>
        <Text style={{ fontSize: 18, marginHorizontal: 15, fontWeight: "400" }}>
          About
        </Text>
      </View>
      <View
        style={{
          marginTop: 20,
        }}
      >
        <View
          style={{ display: "flex", flexDirection: "row", marginVertical: 20 }}
        >
          <View style={{ flexGrow: 1 }}>
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>
              Texpidea Technologies Pvt Ltd
            </Text>
          </View>
          <View>
            <Text style={{ fontSize: 14 }}>V 0.0.2</Text>
          </View>
        </View>

        <View
          style={{
            borderColor: "gray",
            height: 1,
            borderWidth: 0.5,
          }}
        />
        <View>
          <Text style={{ fontSize: 14, marginVertical: 15 }}>
            Go to the website -
            <Text style={styles.fontColor}>www.texpidea.com</Text>
          </Text>
        </View>

        <View
          style={{
            borderColor: "gray",
            height: 1,
            borderWidth: 0.5,
          }}
        />
        <View>
          <Text style={{ fontSize: 14, marginVertical: 15 }}>
            Write us a queries at -
            <Text style={styles.fontColor}>support@texpidea.com</Text>
          </Text>
        </View>

        <View
          style={{
            borderColor: "gray",
            height: 1,
            borderWidth: 0.5,
          }}
        />
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          marginTop: 20,
        }}
      >
        <View style={{ flexGrow: 1 }}>
          <Text>Social Links</Text>
        </View>

        <View>
          <Pressable>
            <Image source={require("../assets/insta.png")} style={styles.img} />
          </Pressable>
        </View>
        <View>
          <Pressable>
            <Image source={require("../assets/face.png")} style={styles.img} />
          </Pressable>
        </View>
        <View>
          <Pressable>
            <Image source={require("../assets/you.png")} style={styles.img} />
          </Pressable>
        </View>
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

export default About;

const styles = StyleSheet.create({
  fontColor: {
    cursor: "pointer",
    color: "blue",
    textDecorationLine: "underline",
  },
  img: {
    width: 25,
    height: 25,
    marginHorizontal: 6,
  },
});
