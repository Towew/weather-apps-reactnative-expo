import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { styles } from "./Style";
import { useFonts } from "expo-font";
import {
  BackBold,
  GPSicon,
  MicIconBold,
  RecentIcon,
  RedLoc,
} from "../../../assets/icons";
import { MapsImg } from "../../../assets/mapsImg";
import { COLORS } from "../../utils";

export default function MapsPage({ navigation }) {
  const [isLoaded] = useFonts({
    Overpass_Reg: require("../../../assets/fonts/Overpass-Regular.ttf"),
    Overpass_Bold: require("../../../assets/fonts/Overpass-Bold.ttf"),
  });

  const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  let arrObj = [
    {
      city: "Surabaya",
      hiTemp: getRandomInt(30, 38),
      lowTemp: getRandomInt(20, 28),
    },
    {
      city: "Banjarmasin",
      hiTemp: getRandomInt(30, 38),
      lowTemp: getRandomInt(20, 28),
    },
    {
      city: "Yogyakarta",
      hiTemp: getRandomInt(30, 38),
      lowTemp: getRandomInt(20, 28),
    },
    {
      city: "Yogyakarta",
      hiTemp: getRandomInt(30, 38),
      lowTemp: getRandomInt(20, 28),
    },
  ];

  const [dataSearch] = useState(arrObj);
  const [newText, setNewText] = useState("");
  const [trigger, setTrigger] = useState(false);
  const [locMove, setLocMove] = useState({
    top: 0,
    right: 0,
  });

  const handleSubmit = (par1) => {
    dataSearch.unshift({
      city: par1,
      hiTemp: getRandomInt(30, 38),
      lowTemp: getRandomInt(20, 28),
    });

    setTrigger(!trigger);
  };

  useEffect(() => {
    console.log(isLoaded);

    setLocMove({
      top: parseInt(getRandomInt(50, 300)),
      right: parseInt(getRandomInt(50, 300)),
    });
  }, [isLoaded, trigger]);

  if (isLoaded) {
    return (
      <View style={styles.container}>
        <View style={styles.searchCont}>
          <View style={styles.searchBar}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <BackBold />
            </TouchableOpacity>
            <TextInput
              style={styles.inputText}
              placeholder="Search here"
              placeholderTextColor="#838BAA"
              onChangeText={(text) => setNewText(text)}
              returnKeyType="go"
              onSubmitEditing={() => handleSubmit(newText)}
            />

            <MicIconBold />
          </View>
          <Text style={styles.recentTxt}>Recent Search</Text>

          <FlatList
            data={dataSearch.slice(0, 3)}
            keyExtractor={(item, index) => index}
            style={{
              width: "90%",
            }}
            renderItem={({ item }) => (
              <View style={styles.recentCont}>
                <RecentIcon />
                <Text style={styles.recentTxt1}>{item.city}</Text>
                <Text style={styles.recentTxt2}>
                  {item.hiTemp}° / {item.lowTemp}°
                </Text>
              </View>
            )}
          />
        </View>
        <View style={styles.btmCont}>
          <MapsImg style={styles.MapsImg} />
          <RedLoc style={{ ...styles.RedLoc, ...locMove }} />

          <TouchableOpacity
            onPress={() => setTrigger(!trigger)}
            style={styles.gpsCont}
          >
            <GPSicon />
          </TouchableOpacity>
        </View>
      </View>
    );
  } else {
    return null;
  }
}
