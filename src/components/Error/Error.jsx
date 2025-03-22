import { useRouteError } from "react-router-dom";

const Error = () => {
    const error = useRouteError();
    console.log(error);
    return (
        <div>
            <h3>Oopss!!!</h3>
            <i>{error.statusText || error.message}</i>
            <p>{error.status === 404 && <div>Page not Found</div> }</p>
        </div>
    );
};

export default Error;