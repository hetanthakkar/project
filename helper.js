import { Dimensions } from "react-native";
export const nameRegex = /^[a-zA-Z ]{2,30}$/;
export const mailRegex =
  /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

export const screenHeight = Math.round(Dimensions.get("window").height) / 100;
export const screenWidth = Math.round(Dimensions.get("window").width) / 100;
