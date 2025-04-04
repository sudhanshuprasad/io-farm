import React from 'react';
import axios from 'axios';
import { Card, CardContent, Button, Typography, Input, TextField } from '@mui/material';
import Graph from './Graph';
export default function FarmerSection() {

  const handleSubmit = () => {
    // Handle form submission logic here
    console.log('Form submitted!');
    axios.post('/api/setFarmerData', {
      potato: '100Kg',
      onion: '50Kg',
      tomato: '70Kg',

    })
  };

  return (
    <div>
      <Card className="bg-blue-500 text-white p-4">
        <CardContent className="flex flex-col space-y-2">
          <div className="full-width flex items-center justify-between mb-4">
            <Typography sx={{ textAlign: 'center', width: '100%', fontWeight: 'bold' }} variant="h6">Vender 1</Typography>
          </div>

          <Typography style={{marginBottom: '10px'}}>Market Demand:</Typography>
          <ul className="list-disc list-inside mb-2 ml-5 flex flex-col gap-2">
            <li className='flex flex-row gap-2 justify-around'>
              <Typography>Potato:</Typography>
              <TextField variant="outlined" size='small' placeholder="80Kg" defaultValue={"80Kg"} />
            </li>
            <li className='flex flex-row gap-2 justify-around'>
              <Typography>Onion:</Typography>
              <TextField variant="outlined" size='small' placeholder="50Kg" defaultValue={"50Kg"} />
            </li>
            <li className='flex flex-row gap-2 justify-around'>
              <Typography>Tomato:</Typography>
              <TextField variant="outlined" size='small' placeholder="150Kg" defaultValue={"150Kg"} />
            </li>
          </ul>

          <Button variant="contained" style={{marginTop: '10px'}} className="bg-white text-blue-500 mt-2" onClick={handleSubmit}>Inquire</Button>
        </CardContent>
      </Card>

    </div>
  );
}