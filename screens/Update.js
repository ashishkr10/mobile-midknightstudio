import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Nav from "../components/Nav";

const Update = ({ navigation }) => {
  return (
    <SafeAreaView style={{ marginTop: 30, padding: 14 }}>
      <Nav navigation={navigation} />
      <Text>Update</Text>
    </SafeAreaView>
  );
};

export default Update;

const styles = StyleSheet.create({});
