import React, { useState, useReducer } from "react";
import "./App.css";
import NavBarApp from "./components/ui-components/header/";
import AppRouter from "./components/containers/appRouter";
import { BrowserRouter as Router } from "react-router-dom";
import mealsReducer from "components/app-reducers/meals-reducer";

const initialState = {
  meals: [],
  orders: [],
  users: [],
  lastOrderTime: "220-07-01",
  anotherConfigurationOption: { startsColor: "red" },
};

export const MealsContext: any = React.createContext(null);
export const ConfigurationContext: any = React.createContext(null);

function App() {
  const [state, dispatch] = useReducer(mealsReducer, initialState);
  const initialConfigurationState = { starsColor: "red" };
  const [getConfig, setConfig] = useState(initialConfigurationState);

  return (
    <Router>
      <ConfigurationContext.Provider value={[getConfig, setConfig]}>
        <MealsContext.Provider value={[state, dispatch]}>
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
