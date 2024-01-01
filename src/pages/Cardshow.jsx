import React, { useEffect, useState } from 'react';
import { deleteContact, getContact } from '../service/allapi';
import Card from 'react-bootstrap/Card';
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import './cardshow.css';
import { Link } from 'react-router-dom';







function Cardshow() {
    const [allContacts, setallContacts] = useState();
 
    const getallContacts = async () => {
        try {
            let response = await getContact();
            setallContacts(response.data);
        } catch (error) {
            console.error('Error fetching contacts:', error);
        }
    };

    useEffect(() => {
        getallContacts();
    }, []);

    const handleDeletecontact = async (e, id) => {

        e.preventDefault()
        console.log(id);


        if (true) {
            await deleteContact(id)
            alert("ARE YOU SURE ON DELETING")
        }




        getallContacts()
    }






    return (
        <>
            <section className='contact-list'>
                <div className="container">
                    <div>



                        <Row>
                            {allContacts?.map((fullcontacts) => (
                                <Col className='ps-3 mb-3' sm={7} md={6} lg={4} key={fullcontacts.id}>

                                    <Card className='crd' style={{ width: '18rem' }}>
                                        <Card.Img variant="top" src={fullcontacts.imageurl} alt='please add a correct image path' />
                                        <Card.Body>
                                            <Card.Title className='name'>Name : {fullcontacts.name}</Card.Title>
                                            <Card.Title><h5 style={{ color: "red" }}>ID : {fullcontacts.id}</h5></Card.Title>
                                            <Card.Text>Department: {fullcontacts.batch} </Card.Text>
                                            <Button onClick={e => handleDeletecontact(e, fullcontacts?.id)} variant="danger">Delete</Button>
                                            <Link to={`/onecard/${fullcontacts.id}`}>
                                            <Button className='ms-1'  variant="info">view</Button>
                                            </Link>

                                            <Link to={`/edit/${fullcontacts.id}`}>
                                            <Button className='ms-1'  variant="info">edit</Button>
                                            </Link>
                                           
                                            
                                        </Card.Body>
                                    </Card>

                                </Col>
                            ))}

                        </Row>


                  
                     


                    </div>
                </div>
            </section>
        </>
    );
}

export default Cardshow;