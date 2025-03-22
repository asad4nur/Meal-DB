import { Navigate, useNavigate } from "react-router-dom";

const Meal = ({ meal }) => {
    const { idMeal, strMeal, strMealThumb } = meal;
    const navigate = useNavigate();

    const handleMealDetails = () => {
        navigate(`/meals/${idMeal}`)
    }

    return (
        <div className="m-5 border rounded-2xl">
            <img className="w-full mb-5 rounded-t-2xl" src={strMealThumb} alt="" />
            <div className="flex justify-between">
                <p className="py-5 pl-3 font-bold text-2xl">{strMeal}</p>
                <button onClick={handleMealDetails} className="p-3 cursor-pointer mb-3 mr-3 bg-orange-400 rounded-2xl text-yellow-50 font-semibold">View Details</button>
            </div>
        </div>
    );
};

export default Meal;