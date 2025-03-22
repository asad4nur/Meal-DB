import { useLoaderData } from "react-router-dom";
import Meal from "../Meal/Meal";

const Meals = () => {
    const meals = useLoaderData();
    // console.log(meals);
    return (
        <div className="grid grid-cols-3 m-15">
            {
                meals.meals.map(meal => <Meal key={meal.idMeal} meal={meal}></Meal>)
            }
        </div>
    );
};

export default Meals;