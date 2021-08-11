import React from "react";
import { View } from "react-native";
import { Provider } from "react-redux";
import store from "./index";
import Myform from "./linear3";
export default class Signup extends React.Component {
  componentDidMount = () => {
    console.log(store);
  };
  render() {
    return (
      <Provider store={store}>
        <Myform navigation={this.props.navigation} />
      </Provider>
    );
  }
}
