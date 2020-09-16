import React, { useReducer } from "react";
import "./App.css";
import NavBarApp from "./components/ui-components/header/";
import AppRouter from "./components/containers/appRouter";
import { BrowserRouter as Router } from "react-router-dom";
import mealsReducer from "components/app-reducers/meals-reducer";
import configurationReducer from "components/app-reducers/config-reducer";

const initialState = {
  meals: [],
  orders: [],
  users: [],
  lastOrderTime: "220-07-01",
  anotherConfigurationOption: { startsColor: "red" },
};
const configInitialState = {
  starsColor: "red" 
}

export const MealsContext: any = React.createContext(null);
export const ConfigurationContext: any = React.createContext(null);

function App() {
  const [mealsState, mealsDispatch] = useReducer(mealsReducer, initialState);
  const [configState, configDispatch] = useReducer(configurationReducer, configInitialState)
  
  return (
    <Router>
      <ConfigurationContext.Provider value={[configState, configDispatch]}>
        <MealsContext.Provider value={[mealsState, mealsDispatch]} >
          <div className="container">
            <NavBarApp />
            <AppRouter />
          </div>
        </MealsContext.Provider>
      </ConfigurationContext.Provider>
    </Router>
  );
}

export default App;
