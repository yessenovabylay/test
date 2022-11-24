import '../App.css';
import React, { useState, useRef } from 'react';

import { Card } from '../Card'; 

export const CardList = ({ citiesList }) => {
    
    
    
    return (
            <div className="CardList">
                {
                    citiesList.map(city => <Card key={city} city = {city} />)
                }
            </div>
        )
};