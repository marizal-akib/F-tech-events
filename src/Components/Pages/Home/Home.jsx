import { useLoaderData } from "react-router-dom";
import NavBar from "../../NavBar/NavBar";
import Banner from "./Banner";
import Footer from "./Footer";
import Services from "./Services/Services";
import Testimonials from "./Testimonials";
import WhyUs from "./WhyUs";


const Home = () => {
    const services = useLoaderData();

    return (
        <div>
            <NavBar></NavBar>
            <Banner></Banner>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-blue-950 bg-opacity-10 pt-8 pb-8">
            {
                services.map(service => <Services key={service.id} service={service}></Services> )
            }
            </div>
           
            <WhyUs></WhyUs>
            <Testimonials></Testimonials>
            <Footer services={services}></Footer>

        </div>
    );
};

export default Home;