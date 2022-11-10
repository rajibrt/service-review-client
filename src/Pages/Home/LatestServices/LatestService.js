import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { Link } from 'react-router-dom';

// ..
AOS.init();

const LatestServices = () => {

    const [services, setServices] = useState([])
    // services.sort((a, b) =>{
    //     return new Date(b.updated_at) - new Date(<a href="" className="updated_at"></a>
    // }

    // useEffect(() => {
    //     fetch('http://localhost:4000/services')
    //         .then(res => res.json())
    //         .then(data => setServices(data));
    // }, [])
    useEffect(() => {
        const fetchData = () => {
            fetch('http://localhost:4000/services/home')
                .then(res => res.json())
                .then(json => {
                    const result = json.sort((a, b) => b._id.localeCompare(a._id))
                    setServices(result)
                })
                .catch(e => {
                    console.log("error", e)
                })
        }
        fetchData();

    }, [])

    return (
        <div className='m-auto w-2/3 text-center mb-10'>
            <div className='my-8'>
                <h2 className='text-gray-800 text-3xl font-bold'>My Latest Service</h2>
                <div className="divider"></div>
                <p>Take my service, hope I will give you a better experience. And give me positive feedback.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 justify-items-center'>
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>
                    )
                }
            </div>
            <Link className='btn' to='/services'>Sell All</Link>

        </div>
    );
};

export default LatestServices;