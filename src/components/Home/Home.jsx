import { Outlet, useNavigation } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer";

const Home = () => {

    const navigations = useNavigation();

    return (
        <div>
            <Header></Header>
            {
                navigations.state === "loading" ? <p>Loading</p> : <Outlet></Outlet>
            }
            <Footer></Footer>
        </div>
    );
};

export default Home;

