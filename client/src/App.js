import React, { useState, useEffect } from 'react';

const App = () => {
  const [name, setName] = useState([]);

  useEffect(() => {
    fetch('https://name-generator-backend-f3vn.onrender.com/api/generate')
      .then((res) => res.json())
      .then((nme) => setName([nme]));
  }, []);

  return <h1>{name}</h1>;
};

export default App;
