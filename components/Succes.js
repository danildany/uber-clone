import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Icon } from "react-native-elements";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "tailwind-react-native-classnames";
const Succes = () => {
  return (
    <SafeAreaView style={tw`flex flex-col  items-center`}>
      <Text style={tw`text-center py-9  text-xl`}>We're going</Text>
      <Icon
        style={tw`bg-green-500 rounded-full p-5 w-20 `}
        name="done"
        color="black"
        size={40}
      />
    </SafeAreaView>
  );
};

export default Succes;

const styles = StyleSheet.create({});
