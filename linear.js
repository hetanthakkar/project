import React, { Component } from "react";
import {
  View,
  Text,
  BackHandler,
  ScrollView,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";
import { Button } from "react-native-paper";
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";
import { addUser } from "./actions/index";
import styles from "./styles1/styles1";
import Icon from "./icons";
import { nameRegex, mailRegex, screenHeight, screenWidth } from "./helper";
const validate = (values) => {
  let errors = {};

  if (!values.name) {
    errors.name = "This field is required!";
  }
  if (!values.username) {
    errors.username = "This field is required!";
  }
  if (!values.password) {
    errors.password = "This field is required!";
  }
  if (!values.email) {
    errors.cpassword = "This field is required!";
  }
  if (!mailRegex.test(values.email)) {
    errors.email = "Enter valid email address";
  }
  if (!nameRegex.test(values.name)) {
    errors.name = "Please fill the proper name";
  }
  if (values.password != undefined && values.password.length < 5) {
    errors.password = "Password should atleast have 5 characters";
  }
  return errors;
};

class Signup extends Component {
  myFields = ({
    label,
    meta: { error, touched, active },
    input: { onChange, ...restInput },
  }) => {
    return (
      <View style={{ marginBottom: screenHeight * 3 }}>
        <TextInput
          secureTextEntry={label == "Password"}
          onChangeText={onChange}
          {...restInput}
          style={
            active
              ? {
                  ...styles.textInput,
                  backgroundColor: "white",
                  borderColor: "#1BA9F5",
                }
              : styles.textInput
          }
        />
        {error && touched && <Text style={styles.errorText}>{error}</Text>}
      </View>
    );
  };

  state = { theme: "light" };
  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress", this.handleBackButton);
  }

  handleBackButton = () => {
    this.props.navigation.navigate("Entry");
    return true;
  };

  submit = async (values) => {
    console.log("heelo");
    await this.props.addUser({ name: values.name });
    await this.props.addUser({ userName: values.userName });
    await this.props.addUser({ email: values.email });
    await this.props.addUser({ password: values.password });
    this.props.navigation.navigate("Register");
  };
  theme = () => {
    console.log("ksdj");
    if (this.state.theme === "dark") this.setState({ theme: "light" });
    if (this.state.theme === "light") this.setState({ theme: "dark" });
  };
  render() {
    return (
      <View
        style={
          this.state.theme == "dark"
            ? { ...styles.mainView, backgroundColor: "#141519" }
            : styles.mainView
        }
      >
        <View style={styles.logoView}>
          <Image
            style={styles.logo}
            source={{
              uri: "https://raw.githubusercontent.com/react-ui-kit/dribbble2react/master/velocity/assets/images/icon.png",
            }}
          />
          <TouchableOpacity onPress={this.theme}>
            <Icon
              family={this.state.theme == "dark" ? "Entypo" : "Entypo"}
              name={this.state.theme == "dark" ? "light-bulb" : "light-bulb"}
              size={25}
              color={this.state.theme == "dark" ? "#DFE5EF" : "black"}
            />
          </TouchableOpacity>
        </View>

        <Text
          style={
            this.state.theme == "dark"
              ? { ...styles.title, color: "#DFE5EF" }
              : styles.title
          }
        >
          Sign Up To Get Started
        </Text>
        <ScrollView>
          <Text
            style={
              this.state.theme === "dark"
                ? { ...styles.errorLabel, color: "#DFE5EF" }
                : styles.errorLabel
            }
          >
            Name
          </Text>

          <Field
            autoFocus={true}
            name="name"
            component={this.myFields}
            label="Name"
          />
          <Text
            style={
              this.state.theme === "dark"
                ? { ...styles.errorLabel, color: "#DFE5EF" }
                : styles.errorLabel
            }
          >
            Username
          </Text>

          <Field
            name="username"
            component={this.myFields}
            label="Username "
            // validate={[required]}
          />
          <Text
            style={
              this.state.theme === "dark"
                ? { ...styles.errorLabel, color: "#DFE5EF" }
                : styles.errorLabel
            }
          >
            Email
          </Text>

          <Field name="email" component={this.myFields} label="Email " />
          <Text
            style={
              this.state.theme === "dark"
                ? { ...styles.errorLabel, color: "#DFE5EF" }
                : styles.errorLabel
            }
          >
            Password
          </Text>

          <Field name="password" component={this.myFields} label="Password" />
        </ScrollView>

        <Button
          mode="contained"
          style={styles.customButton}
          onPress={this.props.handleSubmit(this.submit)}
        >
          <Text style={styles.textStyle}>Create Account</Text>
        </Button>
        <View style={styles.signinView}>
          <Text style={styles.already}>Already have an account?</Text>
          <Text style={styles.signinText}> Signin</Text>
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.userReducer,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addUser: (value) => dispatch(addUser(value)),
  };
};
const ourform = reduxForm({
  form: "something",
  destroyOnUnmount: false,
  validate,
})(Signup);

export default connect(mapStateToProps, mapDispatchToProps)(ourform);
