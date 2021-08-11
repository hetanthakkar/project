import React from "react";
import { Provider } from "react-redux";
import store from "./index";
import Myform from "./linear";

export default class Signup extends React.Component {
  componentDidMount = () => {};
  render() {
    return (
      <Provider store={store}>
        <Myform navigation={this.props.navigation} />
      </Provider>
    );
  }
}
