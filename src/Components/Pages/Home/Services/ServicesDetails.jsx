import { useParams } from "react-router-dom";


const ServicesDetails = () => {
    const {id} = useParams();
    return (
        <div>
            <h2>servicesDetails</h2>
            <p>{id}</p>
        </div>
    );
};

export default ServicesDetails;