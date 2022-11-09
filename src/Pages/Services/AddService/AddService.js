import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import moment from 'moment';


const AddService = () => {
    const [service, setService] = useState({});
    const addService = event => {
        event.preventDefault();
        console.log(service)

        fetch('http://localhost:4000/service', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(service)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    <div>
                        {toast.success('Service added successfully!')}
                        < Toaster />
                    </div>
                    event.target.reset();
                }
            })
    }

    const handleInputBlur = event => {
        const field = event.target.name;
        const value = event.target.value;
        const newService = { ...service }
        newService[field] = value;
        setService(newService);
    }


    return (
        <div className='grid justify-items-center my-8'>
            <h2>Post Service</h2>
            <form onSubmit={addService} className='mt-4 grid gap-2 w-96'>
                <input hidden onBlur={handleInputBlur} type="text" name='time' placeholder="Time & Date" defaultValue={moment().format()} className="input input-bordered w-full" />
                <input onBlur={handleInputBlur} type="text" name='title' placeholder="Service Title" className="input input-bordered w-full" required />
                <input onBlur={handleInputBlur} type="link" name='image' placeholder="Service Image" className="input input-bordered w-full" required />

                <div className='flex gap-4'>
                    <input onBlur={handleInputBlur} type="text" name='price' className="input input-bordered w-1/2" placeholder="Price $" required></input>
                    <input onBlur={handleInputBlur} type="number" name='rating' placeholder="Rating 1 to 5" min="1" max="5" step="0.5" className="input input-bordered w-1/2" required />
                </div>

                <textarea onBlur={handleInputBlur} type="text" name='content' className="textarea textarea-bordered" placeholder="Fill Up" required></textarea>
                <button type='submit' className='btn'>Add Service</button>
                <Toaster />

            </form>
        </div>
    );
};

export default AddService;