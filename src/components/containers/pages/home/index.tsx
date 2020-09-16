import React, { useContext, useEffect } from "react";
import { MealsContext } from "App";
import axios from "axios";
import Meal, { IMeal } from "components/ui-components/meal";
import FilterUI from "components/ui-components/Filter-ui";

export default function HomePage() {
  const [mealsState, mealsDispatch] = useContext(MealsContext);
  const [filterState ,filterDispatch] = useContext(MealsContext)

  async function getRecipesApi() {
    try {
      const result = await axios.get("http://localhost:5200/meals");
      mealsDispatch({ type: "GET_MEALS_FROM_SERVER_DONE", payload: result.data });
    } catch (ex) {
      console.log(ex)
    }
  }

  function addMeal(meal: IMeal) {
    mealsDispatch({ type: "ADD_MEAL", payload: meal });
  }
  function searchMeal({value, by}: any) {
    filterDispatch({ type: by, payload: value})
  }
  useEffect(() => {
    getRecipesApi();
  }, []);
  if (!mealsState.meals) return <span> No Meals </span>;
  return (
    <div className={'container'}>
      <FilterUI action={searchMeal}/>
      <div className="row">
        {mealsState?.meals.map((meal: any) => {
          return (
            <Meal
              key={meal.name}
              actionTitle="Order Now"
              {...meal}
              action={addMeal}
            />
          );
        })}
      </div>
    </div>
  );
}
