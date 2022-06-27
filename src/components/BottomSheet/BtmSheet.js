import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { BottomSheet } from "react-native-btr";
import {
  DropBold,
  LineBtmSht,
  RainOpacity,
  SunBold,
  WindyOpacity,
} from "../../../assets/icons";
import { COLORS } from "../../utils";

export default function BtmSheet({ visible, toggle }) {
  return (
    <BottomSheet
      visible={visible}
      onBackButtonPress={toggle}
      onBackdropPress={toggle}
    >
      <View style={btmStyles.container}>
        <View style={btmStyles.lineCont}>
          <LineBtmSht style={btmStyles.lineBtm} />
        </View>
        <Text
          style={{
            ...btmStyles.mrgnLeft,
            ...btmStyles.headerTxt,
          }}
        >
          Your notification
        </Text>

        <Text
          style={{
            ...btmStyles.mrgnLeft,
            color: COLORS.secondary,
            marginTop: 20,
          }}
        >
          New
        </Text>

        <View
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            flexDirection: "row",
            backgroundColor: "rgba(149, 229, 255, 0.28)",
            height: 85,
            marginVertical: 10,
            paddingHorizontal: 10,
          }}
        >
          <View
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <SunBold />
          </View>
          <View
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              width: "75%",
            }}
          >
            <Text
              style={{
                fontFamily: "Overpass_Reg",
                fontSize: 12,
              }}
            >
              10 minutes ago
            </Text>
            <Text
              style={{
                fontFamily: "Overpass_Bold",
                fontSize: 14,
                marginTop: 5,
              }}
            >
              A sunny day in your location, consider wearing your UV protection
            </Text>
          </View>
          <View
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <DropBold />
          </View>
        </View>

        <Text
          style={{
            ...btmStyles.mrgnLeft,
            color: COLORS.secondary,
            marginTop: 5,
            opacity: 0.7,
          }}
        >
          Earlier
        </Text>

        <View
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            flexDirection: "row",
            height: 85,
            marginVertical: 5,
            paddingHorizontal: 10,
          }}
        >
          <View
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <WindyOpacity />
          </View>
          <View
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              width: "75%",
            }}
          >
            <Text
              style={{
                fontFamily: "Overpass_Reg",
                fontSize: 12,
                opacity: 0.7,
                color: COLORS.secondary,
              }}
            >
              1 day ago
            </Text>
            <Text
              style={{
                fontFamily: "Overpass_Bold",
                fontSize: 14,
                marginTop: 5,
                opacity: 0.7,
                color: COLORS.secondary,
              }}
            >
              A cloudy day will occur all day long, don't worry about the heat
              of the sun
            </Text>
          </View>
          <View
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <DropBold
              style={{
                opacity: 0.7,
              }}
            />
          </View>
        </View>

        <View
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            flexDirection: "row",
            height: 85,
            marginTop: -5,
            paddingHorizontal: 10,
          }}
        >
          <View
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <RainOpacity />
          </View>
          <View
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              width: "75%",
            }}
          >
            <Text
              style={{
                fontFamily: "Overpass_Reg",
                fontSize: 12,
                color: COLORS.secondary,
                opacity: 0.7,
              }}
            >
              2 days ago
            </Text>
            <Text
              style={{
                fontFamily: "Overpass_Bold",
                fontSize: 14,
                marginTop: 5,
                color: COLORS.secondary,
                opacity: 0.7,
              }}
            >
              Potential for rain today is 84%, don't forget to bring your
              umbrella
            </Text>
          </View>
          <View
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <DropBold
              style={{
                opacity: 0.7,
              }}
            />
          </View>
        </View>
      </View>
    </BottomSheet>
  );
}

const btmStyles = StyleSheet.create({
  container: {
    height: "70%",
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
    backgroundColor: COLORS.white,
    display: "flex",
  },
  lineCont: {
    display: "flex",
    alignItems: "center",
    marginVertical: 20,
  },
  mrgnLeft: {
    marginLeft: 30,
  },
  headerTxt: {
    color: COLORS.secondary,
    textShadowColor: "rgba(0, 0, 0, 0.1)",
    textShadowOffset: { width: -2, height: 3 },
    textShadowRadius: 1,
    fontSize: 24,
    fontFamily: "Overpass_Bold",
  },
});
