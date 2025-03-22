import { useLoaderData, useNavigate } from "react-router-dom";

const MealDetails = () => {

    const meal = useLoaderData();
    console.log(meal);

    const navigate = useNavigate();
    const handleGOBack = () => {
        navigate(-1)
    }
    return (
        <div>
            <h3>Hellow meal ddddddd</h3>
            <button className="bg-amber-600 text-black p-3 rounded-2xl" onClick={handleGOBack}>Go Back</button>
        </div>
    );
};

export default MealDetails;