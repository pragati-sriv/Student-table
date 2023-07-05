import React, { useState } from 'react';

export default function Table() {
  const [name, setName] = useState('');
  const [last, setLast] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [tableData, setTableData] = useState([]);

  function handleName(e) {
    setName(e.target.value);
  }

  function handleLast(e) {
    setLast(e.target.value);
  }

  function handleEmail(e) {
    setEmail(e.target.value);
  }

  function handleNumber(e) {
    setNumber(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    const newData = {
      name: name,
      last: last,
      email: email,
      number: number,
    };
    setTableData([...tableData, newData]);
    setEmail('');
    setLast('');
    setName('');
    setNumber('');
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={handleName}
        />
        <br />
        <br />
        <input
          type="text"
          placeholder="Last"
          value={last}
          onChange={handleLast}
        />
        <br />
        <br />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={handleEmail}
        />
        <br />
        <br />
        <input
          type="number"
          placeholder="Number"
          value={number}
          onChange={handleNumber}
        />
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Last</th>
            <th>Email</th>
            <th>Number</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((el, index) => {
            return (
              <tr key={index}>
                <td>{el.name}</td>
                <td>{el.last}</td>
                <td>{el.email}</td>
                <td>{el.number}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
