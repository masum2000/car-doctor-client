import { useEffect, useState } from "react";
import ServicesCard from "./ServicesCard";


const Services = () => {
    const [services, setServices] = useState([]);
    const [asc, setAsc] = useState(true);

    useEffect(() => {
        fetch(`http://localhost:5000/services?sort=${asc ?'asc':'desc'}`) 
            .then(res => res.json())
            .then(data => setServices(data))
    })
    return (
        <div className='mt-4'>
            <div className='text-center space-y-5'>
                <h2 className='text-3xl text-orange-600 font-bold'>Our Services</h2>
                <h2 className='text-5xl font-bold'>Our Services Area</h2>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                <button className="btn btn-primary"
                onClick={()=>setAsc(!asc)}>
                      {asc ? 'Price: High to Low' : 'Price:Low to High'}
                </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    services.map(service => <ServicesCard
                        key={service._id}
                        service={service}
                    ></ServicesCard>)
                }
            </div>
        </div>
    );
};

export default Services;