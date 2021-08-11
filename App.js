import { createBrowserApp } from "@react-navigation/web";
import { createSwitchNavigator, createAppContainer } from "react-navigation";
import Register from "./registerContainer";
import Signup from "./signupContainer";
import MapView from "./map";
import Home from "./main1";
import Payment from "./paymentPage";
import Settings from "./accountSettings";
import Category from "./cat";
import Linear1 from "./linear1";
import Linear3 from "./linear3Container";
import Map from "./cat";
import firebase from "firebase";
// import Map from "./cat";
import Chat from "./chat";
import Transaction from "./transaction";
const firebaseConfig = {
  apiKey: "AIzaSyAfGN94rWhA55dceve-ab5R5nEL6o4xXeg",
  authDomain: "new1-930be.firebaseapp.com",
  databaseURL: "https://new1-930be.firebaseio.com",
  projectId: "new1-930be",
  storageBucket: "new1-930be.appspot.com",
  messagingSenderId: "332990256430",
  appId: "1:332990256430:web:640a6413492c34bf2a96bf",
  measurementId: "G-SBPS6449GM",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
export default createAppContainer(
  createSwitchNavigator(
    {
      Signup,
      Register,
      Home,
      Settings,
      MapView,
      Linear1,
      Linear3,
      Category,
      Payment,
      Transaction,
      Chat,
      Map,
    },
    {
      initialRouteName: "Signup",
    }
  )
);
