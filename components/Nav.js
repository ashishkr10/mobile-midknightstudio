import { Image, Pressable, StyleSheet, View } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/Entypo";

const Nav = ({ navigation }) => {
  return (
    <View style={{ display: "flex", flexDirection: "row" }}>
      <View style={{ flexGrow: 1 }}>
        <Image
          source={require("../assets/logo.png")}
          style={{ width: 35, height: 35 }}
        />
      </View>
      <View>
        <Pressable onPress={() => navigation.toggleDrawer()}>
          <Icon name="menu" size={35} />
        </Pressable>
      </View>
    </View>
  );
};

export default Nav;

const styles = StyleSheet.create({});
