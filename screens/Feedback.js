import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Nav from "../components/Nav";

const Feedback = ({ navigation }) => {
  return (
    <SafeAreaView style={{ marginTop: 30, padding: 14 }}>
      <Nav navigation={navigation} />
      <Text>Feedback</Text>
    </SafeAreaView>
  );
};

export default Feedback;

const styles = StyleSheet.create({});
