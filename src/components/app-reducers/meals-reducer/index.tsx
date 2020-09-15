import React from 'react';


interface IProps {
    type: string; // what am i doing
    payload: any; // what am i sending
  }
  
export default function mealsReducer(state: any, action: IProps) {
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