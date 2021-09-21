import React from "react";
import tw from "tailwind-react-native-classnames";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Icon } from "react-native-elements";
import { useDispatch, useSelector } from "react-redux";
import { selectOrigin, setDestination, setOrigin } from "../slices/navSlice";
import { useNavigation } from "@react-navigation/native";
const data = [
  {
    id: "123",
    icon: "home",
    location: "Home",
    destination: "Córdoba, Cordoba, Argentina",
    geometry: {
      location: {
        lat: -31.42008329999999,
        lng: -64.1887761,
      },
    },
  },
  {
    id: "456",
    icon: "work",
    location: "Work",
    destination: "Villa Carlos Paz, Cordoba, Argentina",
    geometry: {
      location: {
        lat: -31.4207828,
        lng: -64.4992141,
      },
    },
  },
];

const NavFavourites = ({ inHome }) => {
  const dispatch = useDispatch();
  const origin = useSelector(selectOrigin);
  const navigation = useNavigation();
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      ItemSeparatorComponent={() => (
        <View style={[tw`bg-gray-200`, { height: 0.5 }]} />
      )}
      renderItem={({ item: { location, destination, icon, geometry } }) => (
        <TouchableOpacity
          style={tw`flex-row items-center p-3`}
          onPress={() => {
            if (!origin || inHome) {
              dispatch(
                setOrigin({
                  location: geometry.location,
                  description: destination,
                })
              );
              dispatch(setDestination(null));
            } else {
              dispatch(
                setDestination({
                  location: geometry.location,
                  description: destination,
                })
              );
              navigation.navigate("RideOptionsCard");
            }
          }}
        >
          <Icon
            style={tw`mr-4 rounded-full bg-gray-300 p-3`}
            name={icon}
            color="white"
            size={18}
          />
          <View>
            <Text>{location}</Text>
            <Text>{destination}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavFavourites;

const styles = StyleSheet.create({});
