import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { contactEdit, singleCard } from '../service/allapi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Edit() {
    const [contactData, setcontactData] = useState({
        name: "",
        number: "",
        email: "",
        location: "",
        dob:"",
        imageurl: "",
        batch: ""
    });

    const { id } = useParams();

    const navigate =useNavigate()

    useEffect(() => {
        // Fetching details 
        singleCard(id)
            .then(response => {
                setcontactData(response.data);
            })
            .catch(error => {
                console.error("Error fetching Details", error);
            });
    }, [id]);

    const handleInputChange = (e, fieldName) => {
        const { value } = e.target;

        setcontactData(prevData => ({
            ...prevData,
            [fieldName]: value,
        }), () => {
            console.log(contactData); 
        });
    };

    const handleSubmit =async () => {
        if (!contactData.name || !contactData.number || !contactData.email || !contactData.location || !contactData.dob || !contactData.imageurl || !contactData.batch) {
            toast.warn('Please fill all the required fields.', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });

        } else if (!/^\d{10}$/.test(contactData.number)) {
            toast.warn('Please enter a valid 10-digit phone number.', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });

        } else if (!contactData.email.endsWith('@gmail.com')) {
            toast.warn('Please enter a valid Gmail address ending with @gmail.com .', {
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
            
           await contactEdit(id, contactData)
                .then(() => {
                    toast.success('Updated successfully.', {
                        position: "top-right",
                        autoClose: 2000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });
                    navigate('/card')
                    
                })
                .catch((error) => {
                    console.error('Error updating contact:', error);
                });
        }
    };

    return (
        <>
            <section className='add-contact'>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <p className="h4">Edit Contact</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <form>
                                <div className="mb-2">
                                    <input
                                        type="text"
                                        className='form-control'
                                        placeholder='Name'
                                        value={contactData.name}
                                        onChange={(e) => handleInputChange(e, "name")}
                                    />
                                </div>
                                <div className="mb-2">
                                    <input
                                        type="number"
                                        className='form-control'
                                        placeholder='Mobile Number'
                                        value={contactData.number}
                                        onChange={(e) => handleInputChange(e, "number")}
                                    />
                                </div>
                                <div className="mb-2">
                                    <input
                                        type="email"
                                        className='form-control'
                                        placeholder='Email'
                                        value={contactData.email}
                                        onChange={(e) => handleInputChange(e, "email")}
                                    />
                                </div>

                                <div className="mb-2">
                                    <input
                                        type="email"
                                        className='form-control'
                                        placeholder='Location'
                                        value={contactData.location}
                                        onChange={(e) => handleInputChange(e, "location")}
                                    />
                                </div>
                                <div className="mb-2">
                                    DOB:{contactData.dob}
                                    <input
                                        type="date"
                                        className='form-control'
                                        placeholder={contactData.dob}
                                        value={contactData.dob}
                                        onChange={(e) => handleInputChange(e, "dob")}
                                    />
                                </div>
                                <div className="mb-2">
                                    <input
                                        type="text"
                                        className='form-control'
                                        placeholder='Photo url'
                                        value={contactData.imageurl}
                                        onChange={(e) => handleInputChange(e, "imageurl")}
                                    />
                                </div>
                                <div>
                                    <select className="form-select" value={contactData.batch} onChange={(e) => handleInputChange(e, "batch")}>
                                        <option value="">{contactData.batch}</option>
                                        <option value="Trainee">Trainee</option>
                                        <option value="Tech-Lead">Tech Lead</option>
                                        <option value="Manager">Manager</option>
                                        <option value="Designer">Designer</option>
                                        <option value="Developer">Developer</option>
                                        <option value="Tester">Tester</option>
                                    </select>
                                </div>
                                <div className="m-4">
                                    <input type="button" className='btn btn-primary' value='Update' onClick={handleSubmit} />
                                    <Link to={'/card'} className='btn btn-dark ms-2'>Cancel</Link>
                                </div>
                            </form>
                        </div>
                        <div className="col-md-6">
                            <img src={contactData.imageurl} alt="image not found" className='contact-img' width={500} height={500} />
                        </div>
                    </div>
                </div>
            </section>
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
        </>
    );
}

export default Edit;
