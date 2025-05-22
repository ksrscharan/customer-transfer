import React, { useState } from 'react';

import axios from 'axios';

function CustomerTransfer() {
  const [token, setToken] = useState('');

  const [responseJson, setResponseJson] = useState(null);
  const [statusCode, setStatusCode] = useState(null);

  const handleSubmit = async () => {
    setResponseJson(null);
    setStatusCode(null);
    try {
      const response = await axios.post('http://localhost:3333/api/customer-transfer', {}, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setResponseJson(response.data);
      setStatusCode(response.status);
    } catch (error) {
      if (error.response) {
        setResponseJson(error.response.data);
        setStatusCode(error.response.status);
      } else {
        setResponseJson({ message: 'Network error or server not reachable' });
        setStatusCode(null);
      }
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
      {responseJson && (
        <pre>
          {JSON.stringify({ status: statusCode, ...responseJson }, null, 2)}
        </pre>
      )}
    </>
  );
}

export default CustomerTransfer
