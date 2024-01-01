import React, { useState } from 'react';
import { addContact } from '../service/allapi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './addcontact.css';
import { Link, useNavigate } from 'react-router-dom';


function Addcontact() {
    
    const [createContact, setcreateContact] = useState({
        id: "",
        name: "",
        number: "",
        email: "",
        imageurl: "",
        batch: "",
        location: "",
        dob: "",
        pass: "",
        cpass: ""
    });

    const navigate =useNavigate()

    const setInput = (e) => {
        const { name, value } = e.target;
        if (name === 'number' && !/^\d{10}$/.test(value)) {
            toast.warn('Please enter a valid 10-digit phone number', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });

        }


        else {
            setcreateContact({
                ...createContact,
                [name]: value,

                id: `${createContact.name.slice(0, 3)}${createContact.number.slice(0, 3)}`

            });

        }



    };


    const handleCreate = async (e) => {
        e.preventDefault();

        const { name, number, email, imageurl, batch, location, dob, pass, cpass } = createContact;

        if (!name || !number || !email || !imageurl || !batch || !location || !dob || !pass || !cpass) {
            toast.warn('Please fill the form completely', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        } else if (pass !== cpass) {
            toast.error('Passwords do not match. Please enter matching passwords.', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        } else if (pass.length < 5 && cpass.length < 5) {
            toast.error('Password must have atleast 5 charactor.', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }

        else {
            try {
                const response = await addContact(createContact);

                if (response.status >= 200 && response.status < 300) {
                    console.log(response.data);

                    toast.success('New contact added successfully.', {
                        position: "top-right",
                        autoClose: 2000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });
                } else {
                    console.error('Error adding contact:', response.data);
                    toast.error('Id already exists. Provide a unique id.', {
                        position: "top-right",
                        autoClose: 2000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });
                }
            } catch (error) {
                console.error('Error adding contact:', error);
                toast.error('Failed to add contact. Please check the console for details.', {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            }
        }
    };

    return (
        <div className="container mt-5 anim">
            <div className="shadow-lg card p-3 mb-5 bg-body rounded">
                <div className="card-body">
                    <h5 className=" card-title text-center mb-4">Create Contact</h5>

                    <form onSubmit={handleCreate}>


                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Enter Your Name</label>
                            <input type="text" className="form-control" name="name" placeholder="Name" onChange={setInput} />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="number" className="form-label">Enter Your Number</label>
                            <input type="text" className="form-control" name="number" placeholder="Mobile Number" onChange={setInput} />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Enter Your Email</label>
                            <input type="text" className="form-control" name="email" placeholder="Email" onChange={setInput} />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="imageurl" className="form-label">Enter Your Image URL</label>
                            <input type="text" className="form-control" name="imageurl" placeholder="Image URL" onChange={setInput} />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="batch" className="form-label">Select Your Role</label>
                            <select className="form-select" name="batch" onChange={setInput}>
                                <option value="">Select Batch</option>
                                <option value="Trainee">Trainee</option>
                                <option value="Tech-Lead">Tech Lead</option>
                                <option value="Manager">Manager</option>
                                <option value="Designer">Designer</option>
                                <option value="Developer">Developer</option>
                                <option value="Tester">Tester</option>
                            </select>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="location" className="form-label">Enter Your Address Location</label>
                            <input type="text" className="form-control" name="location" placeholder="Location" onChange={setInput} />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="DOB" className="form-label">Enter Your Date Of Birth</label>
                            <input type="date" className="form-control" name="dob" placeholder="Location" onChange={setInput} />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="pass" className="form-label">Set a Password</label>
                            <input type="password" className="form-control" name="pass" placeholder="Password" onChange={setInput} />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="cpass" className="form-label">Conform password</label>
                            <input type="password" className="form-control" name="cpass" placeholder="confirm" onChange={setInput} />
                        </div>

                        <div className="text-center">
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                    </form>
                </div>
            </div>

            <Link to={'/card'}>
                <button className='btn btn-info mb-4'>Show</button>
            </Link>

            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </div>
    );
}

export default Addcontact;