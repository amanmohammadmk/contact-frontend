import React, { useEffect, useState } from 'react';
import { getContact } from '../service/allapi';


function ContactlistView() {
  const [allContacts, setallContacts] = useState();
  const [searchQuery, setSearchQuery] = useState("");

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

  const filteredContacts = allContacts?.filter((contact) =>
    contact.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <section className='contact-list'>
        <div className="container">
          <div>
            <div className="mb-3">
              <label htmlFor="search" className="form-label">Search by Name:</label>
              <input
                type="text"
                className="form-control"
                id="search"
                placeholder="Enter name to search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <table className='mt-5 align-items-center table rounded'>
              <thead>
                <tr>
                  <th>SI.NO</th>
                  <th>NAME</th>
                  <th>EMAIL</th>
                  <th>Department</th>
                </tr>
              </thead>
              <tbody>
                {filteredContacts?.map((fullcontacts, index) => (
                  <tr key={fullcontacts.id}>
                    <td>{index + 1}</td>
                    <td>{fullcontacts.name}</td>
                    <td>{fullcontacts.email}</td>
                    <td>{fullcontacts.batch}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactlistView;