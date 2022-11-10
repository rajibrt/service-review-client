import React, { useEffect, useState } from 'react';
import useTitle from '../../../hooks/useTitle';
import ServiceCard from '../../Home/LatestServices/ServiceCard';
import PostReview from '../../Shared/Reviews/PostReview';

const Services = () => {
    const [services, setServices] = useState([])
    useTitle('Services')
    // useEffect(() => {
    //     fetch('https://onclick-server.vercel.app/services')
    //         .then(res => res.json())
    //         .then(data => setServices(data));
    // }, [])

    useEffect(() => {
        const fetchData = () => {
            fetch('https://onclick-server.vercel.app/services')
                .then(res => res.json())
                .then(data => {
                    const result = data.sort((a, b) => b._id.localeCompare(a._id))
                    setServices(result)
                })
                .catch(e => {
                    console.log("error", e)
                })
        }
        fetchData();

    }, [])

    return (
        <div>
            <div className='m-auto w-2/3 text-center'>
                <div className='my-8'>
                    <h2 className='text-gray-800 text-3xl font-bold'>My Services</h2>
                    <div className="divider"></div>
                    <p>Take my service, hope I will give you a better experience. And give me a positive feedback.</p>
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
            </div>
        </div>
    );
};

export default Services;