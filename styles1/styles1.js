import { StyleSheet } from "react-native";
import { screenHeight, screenWidth } from "../helper";

const styles = StyleSheet.create({
  title: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: screenHeight * 3,
    marginTop: screenHeight * 4,
    color: "black",
  },
  logo: {
    width: 66,
    height: 58,
  },
  mainView: {
    height: screenHeight * 100,
    flex: 1,
  },
  logoView: {
    alignSelf: "center",
    marginTop: screenHeight * 8,
    flexDirection: "row",
  },
  customButton: {
    alignSelf: "center",
    backgroundColor: "#3d5af1",
    borderRadius: 10,
    width: screenWidth * 85,
    marginBottom: screenHeight * 2,
    padding: 3,
  },

  textStyle: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 14,
    textAlignVertical: "center",
    letterSpacing: 2,
  },

  errorLabel: {
    fontWeight: "bold",
    marginStart: screenWidth * 10,
    fontSize: 15,
    color: "black",
  },
  errorText: {
    color: "#FF6666",
    fontWeight: "bold",
    textAlign: "center",
  },
  already: {
    fontSize: 15,
    color: "grey",
  },
  signinText: {
    fontSize: 15,
    color: "#006BB4",
    fontWeight: "bold",
  },

  signinView: {
    alignSelf: "center",
    flexDirection: "row",
    marginBottom: screenHeight * 2,
  },
  textInput: {
    width: screenWidth * 85,
    marginStart: screenWidth * 10,
    marginTop: 5,
    backgroundColor: "#F3F3F3",
    borderColor: "#F3F3F3",
    borderWidth: 2,
    borderRadius: 8,
    fontSize: 16,
    height: screenHeight * 6,
    padding: 10,
  },
});

export default styles;
