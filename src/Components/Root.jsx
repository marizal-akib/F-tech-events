import { Helmet } from "react-helmet-async";
import { Outlet } from "react-router-dom";


const Root = () => {
    return (
        <div className="max-w-7xl mx-auto font-roboto">
            <Helmet>
                <title>Ftech Events</title>
            </Helmet>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;