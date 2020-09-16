import React from 'react';


interface IProps {
    type: string; // what am i doing
    payload: any; // what am i sending
}
  
export default function configurationReducer(state: any, action: IProps) {
    if (action.type === 'CHANGE_STAR_COLOR') {
      const { payload } = action
      return { ...state, starsColor: payload}
    }
  
    return state;
}