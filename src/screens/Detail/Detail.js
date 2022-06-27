import React from "react";
import { styles } from "./Style";
import { View, Text, TouchableOpacity } from "react-native";
import { BOLD_SHADOW, COLORS, LIGHT_SHADOW } from "../../utils";
import { LineOne, LineTwo } from "../../../assets/background";
import { LinearGradient } from "expo-linear-gradient";
import { useFonts } from "expo-font";
import {
  CalendarIcon,
  CardFive,
  CardFour,
  CardOne,
  CardThree,
  CardTwo,
  DetailOne,
  DetailThree,
  DetailTwo,
  GearIcon,
  SunIcon,
  WhiteBackIcon,
} from "../../../assets/detailIcon";

export default function Detail({ navigation }) {
  const [isLoaded] = useFonts({
    Overpass_Reg: require("../../../assets/fonts/Overpass-Regular.ttf"),
    Overpass_Bold: require("../../../assets/fonts/Overpass-Bold.ttf"),
  });

  if (isLoaded) {
    return (
      <View style={styles.container}>
        <LinearGradient
          colors={[COLORS.first, COLORS.second]}
          start={[0, 0]}
          end={[1, 1]}
          location={[0, 1]} //[0 Color = 0%], [1 Color = 100%]
          style={styles.background}
        />

        <LineTwo style={styles.lineStyleOne} />

        <LineOne style={styles.lineStyleTwo} />

        <View style={styles.headerCont}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.headerContLeft}
          >
            <WhiteBackIcon />
            <Text style={styles.backText}>Back</Text>
          </TouchableOpacity>
          <GearIcon />
        </View>

        <View style={styles.todayCont}>
          <Text
            style={{
              ...BOLD_SHADOW,
              fontSize: 24,
            }}
          >
            Today
          </Text>
          <Text
            style={{
              ...LIGHT_SHADOW,
              fontSize: 18,
            }}
          >
            Sep, 12
          </Text>
        </View>

        <View style={styles.cardCont}>
          <CardOne
            style={{
              marginLeft: -40,
            }}
          />
          <CardTwo
            style={{
              marginLeft: -60,
            }}
          />
          <CardThree
            style={{
              marginLeft: -60,
            }}
          />
          <CardFour
            style={{
              marginLeft: -60,
            }}
          />
          <CardFive
            style={{
              marginLeft: -60,
            }}
          />
        </View>

        <View style={styles.todayCont}>
          <Text
            style={{
              ...BOLD_SHADOW,
              fontSize: 24,
            }}
          >
            Next Forecast
          </Text>
          <CalendarIcon />
        </View>
        <DetailOne
          style={{
            marginVertical: 15,
          }}
        />
        <DetailTwo
          style={{
            marginTop: -80,
          }}
        />
        <DetailThree
          style={{
            marginTop: -40,
          }}
        />

        <View style={styles.logoCont}>
          <SunIcon />
          <Text
            style={{
              ...LIGHT_SHADOW,
              fontSize: 18,
              marginHorizontal: 18,
            }}
          >
            AccuWeather
          </Text>
        </View>
      </View>
    );
  } else {
    return null;
  }
}
