import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { COLORS } from "../../utils";
import { LinearGradient } from "expo-linear-gradient";
import {
  LineOne,
  LineTwo,
  Location,
  DropIcon,
  NotificationIcon,
  HomeCloud,
  HumIcon,
  WindyIcon,
  DropUp,
} from "../../../assets/background";
import { useFonts } from "expo-font";
import BtmSheet from "../../components/BottomSheet/BtmSheet";

export default function Homepage({ navigation }) {
  const [isLoaded] = useFonts({
    Overpass_Reg: require("../../../assets/fonts/Overpass-Regular.ttf"),
    Overpass_Bold: require("../../../assets/fonts/Overpass-Bold.ttf"),
  });

  const [visible, setVisible] = useState(false);

  const toggle = () => {
    setVisible(!visible);
  };

  if (!isLoaded) {
    return null;
  } else {
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
            style={styles.headerLeft}
            onPress={() => navigation.navigate("Maps")}
          >
            <Location />

            <Text style={styles.cityText}>Semarang</Text>
            <DropIcon />
          </TouchableOpacity>

          <NotificationIcon />
        </View>

        <View style={styles.mainCont}>
          <HomeCloud style={styles.homeCloud} />

          <TouchableOpacity onPress={() => navigation.push("Detail")}>
            <View style={styles.dtlCont}>
              <LinearGradient
                colors={[
                  "rgba(191, 191, 191, 0.4)",
                  "rgba(255, 255, 255, 0.4)",
                ]}
                locations={[0, 1]}
                start={[0.77, 0.77]}
                end={[0.69, 0.22]}
                style={styles.linearDtl}
              >
                <View style={styles.detail}>
                  <Text style={styles.dtl1}>Today, 12 September</Text>
                  <View style={styles.mainTemp}>
                    <Text style={styles.dtl2}>29</Text>
                    <Text style={styles.dtl3}>°</Text>
                  </View>
                  <Text style={styles.dtl4}>Cloudy</Text>
                  <View style={styles.botDtlCont}>
                    <WindyIcon style={styles.botTxt} />
                    <Text style={styles.botTxt}>Wind</Text>
                    <Text
                      style={{
                        ...styles.botTxt,
                        marginRight: -1,
                      }}
                    >
                      |
                    </Text>
                    <Text
                      style={{
                        ...styles.botTxt,
                        marginRight: -11,
                      }}
                    >
                      10 km/h
                    </Text>
                  </View>
                  <View style={styles.botDtlCont}>
                    <HumIcon
                      style={{
                        ...styles.botTxt,
                        marginLeft: -6,
                      }}
                    />
                    <Text
                      style={{
                        ...styles.botTxt,
                        marginLeft: -10,
                      }}
                    >
                      Hum
                    </Text>
                    <Text style={{ ...styles.botTxt, marginLeft: -10 }}>|</Text>
                    <Text style={styles.botTxt}>54 %</Text>
                  </View>
                </View>
              </LinearGradient>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.mainCont}>
          <TouchableOpacity onPress={() => toggle()} style={styles.btnBot}>
            <Text style={styles.textBotBtn}>Forecast Report</Text>
            <DropUp />
          </TouchableOpacity>
        </View>
        <BtmSheet toggle={toggle} visible={visible} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontFamily: "Overpass_Reg",
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: "100%",
  },
  lineStyleOne: {
    position: "absolute",
    top: 100,
    zIndex: 1,
  },
  lineStyleTwo: {
    position: "absolute",
    right: -40,
    top: -30,
    zIndex: 2,
  },
  headerCont: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 30,
    alignItems: "center",
    top: 35,
    height: 40,
  },
  headerLeft: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  cityText: {
    fontSize: 24,
    color: COLORS.white,
    fontFamily: "Overpass_Bold",
    textShadowColor: "rgba(0, 0, 0, 0.1)",
    textShadowOffset: { width: -2, height: 3 },
    textShadowRadius: 1,
    marginHorizontal: 15,
  },
  homeCloud: {
    marginTop: 70,
  },
  mainCont: {
    display: "flex",
    alignItems: "center",
    width: "100%",
  },
  dtlCont: {
    marginTop: -30,
    width: "100%",
    height: 255,
    zIndex: 0,
  },
  linearDtl: {
    flex: 1,
    borderRadius: 20,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  detail: {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    width: "97%",
    height: "97%",
    borderRadius: 20,
    display: "flex",
    alignItems: "center",
    zIndex: 2,
  },
  dtl1: {
    fontSize: 18,
    marginTop: 10,
    textShadowColor: "rgba(0, 0, 0, 0.1)",
    textShadowOffset: { width: -2, height: 3 },
    textShadowRadius: 1,
    marginHorizontal: 15,
    color: "#fff",
    zIndex: 5,

    fontFamily: "Overpass_Reg",
  },
  mainTemp: {
    display: "flex",
    flexDirection: "row",
    position: "relative",
    marginTop: -10,
  },
  dtl2: {
    fontSize: 90,
    color: COLORS.white,
    fontFamily: "Overpass_Reg",
    textShadowColor: "rgba(0, 0, 0, 0.1)",
    textShadowOffset: { width: -4, height: 8 },
    textShadowRadius: 50,
  },
  dtl3: {
    fontSize: 60,
    color: COLORS.white,
    fontFamily: "Overpass_Reg",
    textShadowColor: "rgba(0, 0, 0, 0.1)",
    textShadowOffset: { width: -4, height: 8 },
    textShadowRadius: 50,
    position: "absolute",
    right: -25,
  },
  dtl4: {
    fontSize: 24,
    color: COLORS.white,
    fontFamily: "Overpass_Reg",
    textShadowColor: "rgba(0, 0, 0, 0.1)",
    textShadowOffset: { width: -2, height: 3 },
    textShadowRadius: 1,
    marginTop: -35,
  },
  botDtlCont: {
    display: "flex",
    flexDirection: "row",
    marginVertical: 5,
    alignItems: "center",
    width: "75%",
    justifyContent: "space-around",
  },
  botTxt: {
    fontSize: 18,
    color: COLORS.white,
    textShadowColor: "rgba(0, 0, 0, 0.1)",
    textShadowOffset: { width: -2, height: 3 },
    textShadowRadius: 1,
  },
  btnBot: {
    width: 180,
    height: 57,
    backgroundColor: COLORS.white,
    borderRadius: 20,
    elevation: 6,
    marginTop: 22,
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "row",
  },
  textBotBtn: {
    color: COLORS.secondary,
    fontSize: 18,
    fontFamily: "Overpass_Reg",
  },
});
