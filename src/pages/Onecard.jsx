import React, { useEffect, useState } from 'react';
import { singleCard } from '../service/allapi';
import { Link, useParams } from 'react-router-dom';
import { Button } from 'react-bootstrap';



function Onecard() {
  const [oneCard, setoneCard] = useState([]);
  const { id } = useParams();



  const getsingleCard = async () => {
    try {
      let response = await singleCard(id);
      setoneCard(response.data);
    } catch (error) {
      console.error('Error fetching single card:', error);
    }
  };

  useEffect(() => {
    getsingleCard();
  }, [id]);



  return (
    <div className='container mt-5 text-center'>

      <Link to='/card'>
        <button className='btn btn-primary m-5'>Go back</button>
      </Link>
      <div className='card text-center'>
        <div className='card-header'>

        </div>
        {oneCard && (
          <div className='shadow-lg'>


            <div className='card-body'>
              <h1 className='card-title'>{oneCard.name}</h1>

              <ul className='list-group list-group-flush'>
                <li className='list-group-item'>
                  <strong style={{ color: 'red' }}>ID:</strong> {oneCard.id}
                </li>
                <li className='list-group-item'>
                  <strong>Email:</strong> {oneCard.email}
                </li>
                <li className='list-group-item'>
                  <strong>Phone:</strong> {oneCard.number}
                </li>
                <li className='list-group-item'>
                  <strong>Department:</strong> {oneCard.batch}
                </li>
                <li className='list-group-item'>
                  <strong>Location:</strong> {oneCard.location}
                </li>
                <li className='list-group-item'>
                  <strong>Date Of Birth:</strong> {oneCard.dob}
                </li>
              </ul>
              <img
                src={oneCard.imageurl}
                className='card-img-top'
                alt={oneCard.name}
              />
            </div>
            <Link to={`/edit/${oneCard.id}`}>
              <Button style={{width:"50%"}} className='m-4' variant="info">Edit</Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Onecard;