import React from "react";
import {
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  StatusBar,
} from "react-native";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
import Icon from "./icons";

export default class App extends React.Component {
  state = { theme: "dark" };
  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: this.state.theme == "dark" ? "#141519" : "white",
          flexWrap: "wrap",
        }}
      >
        <StatusBar animated={true} backgroundColor="#25282f" />
        <View
          style={{
            flexDirection: "row",
            flex: 0.13,
            justifyContent: "center",
            backgroundColor: this.state.theme == "dark" ? "#25282f" : "#20232A",
          }}
        >
          <TouchableOpacity
            style={{
              position: "absolute",
              left: 16,
              marginTop: windowHeight * 0.02,
            }}
          >
            <Icon
              family="AntDesign"
              name="back"
              size={25}
              color={this.state.theme == "dark" ? "#DFE5EF" : "#DFE5EF"}
            />
          </TouchableOpacity>
          <View>
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 22,
                color: this.state.theme == "dark" ? "#DFE5EF" : "#DFE5EF",
                letterSpacing: 1,
                marginTop: windowHeight * 0.02,
              }}
            >
              Choose Your Role
            </Text>
          </View>
        </View>

        <View
          style={{
            marginStart: windowWidth * 0.03,
            marginTop: windowHeight * 0.03,
            marginRight: windowHeight * 0.01,
          }}
        >
          <Text
            style={{
              color: this.state.theme == "dark" ? "#DFE5EF" : "black",
              fontSize: 30,
              fontWeight: "bold",
            }}
          >
            Which one defines you?
          </Text>
          <Text
            style={{
              marginTop: windowHeight * 0.01,
              fontSize: 18,
              color: this.state.theme == "dark" ? "#DFE5EF" : "black",
            }}
          >
            Choose any one from below categories.
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            marginTop: windowHeight * 0.06,
            justifyContent: "space-around",
            height: windowHeight * 0.2,
          }}
        >
          <View>
            <TouchableOpacity
              style={{
                padding: 10,
                borderRadius: 20,
                backgroundColor: "#2196f3",
                width: windowWidth * 0.45,
                height: windowHeight * 0.2,
                // opacity: "0.7",
              }}
            >
              <Text
                style={{
                  color: "white",
                  fontWeight: "bold",
                  fontSize: 22,
                  padding: 6,
                }}
              >
                Teacher{"  "}👨‍🏫
              </Text>

              <Text style={{ color: "white", fontSize: 18, padding: 4 }}>
                Share and monetize your skills to earn money.
              </Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              style={{
                backgroundColor: "#1a237e",
                borderRadius: 20,
                padding: 10,
                width: windowWidth * 0.45,
                height: windowHeight * 0.2,
              }}
            >
              <Text
                style={{
                  color: "white",
                  fontWeight: "bold",
                  fontSize: 22,
                  padding: 6,
                }}
              >
                Student{"  "}👨🏻‍🎓
              </Text>

              <Text style={{ color: "white", fontSize: 18, padding: 4 }}>
                {" "}
                Get yourself ahed of croud by learning new skills
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
