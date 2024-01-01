import React from 'react'
import './homepage.css';
import { Link } from 'react-router-dom';

function Homepage() {
    return (
        <div className='d-flex justify-content-center align-items-center text-center flex-column'>
            <div className='firstimage'>

            </div>
            <div className='container mt-5'>
                <h1 className='m-4'>Save your details and make card here</h1>
                <Link to={'/add'}>
                 <button className='btn btn-info mb-4'>Create</button>
                </Link>
               
               
                <p>
                    Welcome to our company's online platform, a centralized hub designed to streamline and simplify the process of creating unique employee IDs. Our website facilitates the seamless storage of essential information, including names, contact numbers, email addresses, and associated batches. This comprehensive database serves as the foundation for generating personalized identification for each member of our organization. With a user-friendly interface, this platform empowers our company to efficiently manage and organize personnel data, ensuring accuracy and consistency in the creation of employee IDs. Whether you're a new hire or a seasoned team member, our website is here to support a smooth onboarding experience and contribute to the overall cohesion and efficiency of our company's identity management system. Welcome to a more connected and organized workplace through our innovative online platform.
                </p>

                <Link to={'/view'}>
                 <button className='btn btn-info mt-3 mb-4 me-3'>Search</button>
                </Link>

                <Link to={'/card'}>
                 <button className='btn btn-info mt-3 mb-4 ms-3'>Show</button>
                </Link>

             
                
           
                
            </div>

        </div>
    )
}

export default Homepage