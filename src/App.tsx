import React, { useState, useReducer } from "react";
import "./App.css";
import NavBarApp from "./components/ui-components/header/";
import AppRouter from "./components/containers/appRouter";
import { BrowserRouter as Router } from "react-router-dom";

const initialState = {
  meals: [],
  orders: [],
  users: [],
  lastOrderTime: "220-07-01",
  anotherConfigurationOption: { startsColor: "red" },
};

export const MealsContext: any = React.createContext(null);
export const ConfigurationContext: any = React.createContext(null);

interface IProps {
  type: string; // what am i doing
  payload: any; // what am i sending
}

function mealsReducer(state: any, action: IProps) {
  console.log(action.type);
  if (action.type === "ADD_MEAL") {
    const { payload } = action;
    return { ...state, orders: [...state.orders, payload] };
  }
  if (action.type === "GET_MEALS_FROM_SERVER_DONE") {
    const { payload } = action;
    return { ...state, meals: payload };
  }
  if (action.type === "REMOVE_MEAL") {
    const { payload } = action;
    const mealsWithoutDeletedMealArr = state.orders.filter((order: any) => { return order.name !== payload.name})
    return { ...state, orders: [...mealsWithoutDeletedMealArr] };
  }
  if (action.type === "CLEAR_ORDERS") {
    const { payload } = action;
    return { ...state, orders: payload };
  }

  return state;
}

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
