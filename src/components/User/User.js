import React from 'react';

const User = (props) => {
    console.log(props.user);
    const {
        name:{first, last, title},
        gender, email, phone,
        picture:{large},
        dob:{age,date},
        location:{
            street:{number, name},
            city, state, country, postcode
        },
        login:{username}
    } = props.user;

    return (
        <div className='bg-gray-600 text-white sm:w-3/4 md:w-2/4 mx-auto py-5 px-5'>
            <div className='flex flex-col justify-center items-center mt-5'>
                <img src={large} alt="" className='rounded-full mb-5'/>
                <h4>Name: {title}. {first} {last}</h4>
                <p>Age: {age}</p>
            </div>
            <div className='flex justify-between mt-5'>
                <div className='flex flex-col items-start'>
                    <p>Email: {email}</p>
                    <p>User Name: {username}</p>
                    <p>Phone: {phone}</p>
                </div>
                <div className='flex flex-col items-start'>
                    <p>Street: {number}, {name}</p>
                    <p>Post Code: {postcode}</p>
                    <p>City: {city}</p>
                    <p>State: {state}</p>
                    <p>Country: {country}</p>

                </div>
            </div>
        </div>
    );
};

export default User;