import React, { useState } from 'react';
import axios from 'axios';

function CustomerTransfer() {
  const [token, setToken] = useState('');

  const handleSubmit = async () => {
    try {
      const response = await axios.post('https://localhost:3333/customer-transfer', {}, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log('Response:', response.data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <>
      <input
        type="text"
        placeholder="Enter token"
        value={token}
        onChange={(e) => setToken(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>
    </>
  );
}

export default CustomerTransfer
