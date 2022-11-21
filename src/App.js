import React, { useState, useRef } from 'react';

import './App.css';

import { Input } from './Input';
import { Card } from './Card';

function App() {
  const [citiesList, setCitiesList] = useState([])
  const ref = useRef(null);
  return (
    <div className="Main">
      <Input setCitiesList={setCitiesList}/>
      <div className="CardList">
        {
          citiesList.map(city => <Card key={city} city = {city} />)
        }
      </div>
    </div>
  );
}

export default App;
