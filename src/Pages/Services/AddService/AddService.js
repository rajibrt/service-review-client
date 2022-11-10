import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import moment from 'moment';
import useTitle from '../../../hooks/useTitle';


const AddService = () => {
    useTitle('Add Service')
    const [service, setService] = useState({});

    const addService = event => {
        event.preventDefault();
        const form = event.target;
        const submissionTime = new Date().getTime();
        const image = form.image.value;
        const rating = form.rating.value;
        const title = form.title.value;
        const content = form.content.value;



        const service = {
            submissionTime,
            image,
            rating,
            title,
            content,
        }


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

    // const handleInputBlur = event => {
    //     const field = event.target.name;
    //     const value = event.target.value;
    //     const time = new Date();
    //     const newService = { ...service }
    //     newService[field] = value;
    //     setService(newService);
    // }


    return (
        <div className='grid justify-items-center my-8'>
            <h2>Add Service</h2>
            <form onSubmit={addService} className='mt-4 grid gap-2 w-96'>

                <input type="text" name='title' placeholder="Service Title" className="input input-bordered w-full" required />
                <input type="link" name='image' placeholder="Service Image" className="input input-bordered w-full" required />

                <div className='flex gap-4'>
                    <input type="text" name='price' className="input input-bordered w-1/2" placeholder="Price $" required></input>
                    <input type="number" name='rating' placeholder="Rating 1 to 5" min="1" max="5" step="0.5" className="input input-bordered w-1/2" required />
                </div>

                <textarea type="text" name='content' className="textarea textarea-bordered" placeholder="Fill Up" required></textarea>
                <button type='submit' className='btn'>Add Service</button>
                <Toaster />

            </form>
        </div>
    );
};

export default AddService;