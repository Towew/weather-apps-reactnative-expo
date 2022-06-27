import { StyleSheet } from "react-native";
import { COLORS, LIGHT_SHADOW } from "../../utils";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontFamily: "Overpass_Reg",
    display: "flex",
    alignItems: "center",
    position: "relative",
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: "100%",
    zIndex: -2,
  },
  lineStyleOne: {
    position: "absolute",
    top: 100,
    left: 0,
    zIndex: -1,
  },
  lineStyleTwo: {
    position: "absolute",
    right: -40,
    top: -30,
    zIndex: -1,
  },
  headerCont: {
    marginTop: 50,
    height: 40,
    width: "90%",
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
  },
  headerContLeft: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    paddingLeft: 10,
    flex: 0.95,
  },
  backText: {
    fontFamily: "Overpass_Reg",
    fontSize: 24,
    ...LIGHT_SHADOW,
    color: COLORS.white,
    paddingHorizontal: 10,
  },
  todayCont: {
    marginTop: 20,
    paddingHorizontal: 15,
    display: "flex",
    width: "90%",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  cardCont: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "90%",
    marginTop: 15,
  },
  logoCont: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
    bottom: 30,
  },
});
