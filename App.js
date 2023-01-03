import PlaceNavigator from "./src/navigation/PlaceNavigator";
import { Provider } from "react-redux";
import React from "react";
import { init } from "./src/db";
import store from "./src/store";

init()
  .then(() => console.log("Database initialized"))
  .catch((err) => {
    console.log("Data base fail connect");
    console.log(err.message);
  });

export default function App() {
  return (
    <Provider store={store}>
      <PlaceNavigator />
    </Provider>
  );
}
