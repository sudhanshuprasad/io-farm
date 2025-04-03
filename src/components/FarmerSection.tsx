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
    // <div className="flex flex-col items-center w-full h-full bg-gray-50 p-4">
    <div>
      <Card className="bg-blue-500 text-white p-4">
        <CardContent className="flex flex-col space-y-2">
          <div className="full-width flex items-center justify-between mb-4">
            <Typography sx={{ textAlign: 'center', width: '100%', fontWeight: 'bold' }} variant="h6">Farmer 1</Typography>
          </div>

          <Typography>Agriculture land: </Typography>
          <ul className="list-disc list-inside mb-2">
            <li>Temperature</li>
            <li>Humidity</li>
            <li>Moisture</li>
          </ul>
          {/* <Typography>Temperature</Typography>
          <Typography>Humidity</Typography>
          <Typography>Moisture</Typography> */}
          <Typography>Pump status: on</Typography>
          <Typography>Graph</Typography>
          <Graph />
          <Typography className="mt-4">Yield:</Typography>
          <ul className="list-disc list-inside mb-2 ml-5 flex flex-col gap-2">
            <li className='flex flex-row gap-2'>
              <Typography>Potato:</Typography>
              <TextField variant="outlined" size='small' placeholder="100Kg" defaultValue={"100Kg"} />
            </li>
            <li className='flex flex-row gap-2'>
              <Typography>Onion:</Typography>
              <TextField variant="outlined" size='small' placeholder="50Kg" defaultValue={"50Kg"} />
            </li>
            <li className='flex flex-row gap-2'>
              <Typography>Tomato:</Typography>
              <TextField variant="outlined" size='small' placeholder="70Kg" defaultValue={"70Kg"} />
            </li>
            {/* <li>
              <Typography>Onion - 50Kg, Tomato - 70Kg</Typography>
            </li> */}
          </ul>

          <Button variant="contained" className="bg-white text-blue-500 mt-2" onClick={handleSubmit}>Submit</Button>
        </CardContent>
      </Card>
      {/* <Typography variant="h4" className="mb-6">Farmer page</Typography>

      <div className="flex flex-col space-y-4">
        <Card className="w-64 bg-blue-500 text-white p-4">
          <CardContent className="flex flex-col space-y-2">
            <Typography variant="h6">Farmer 1</Typography>
            <Typography>Argi land: Temperature</Typography>
            <Typography>Humidity</Typography>
            <Typography>Moisture</Typography>
            <Typography>Pump status</Typography>
            <Button variant="contained" className="bg-white text-blue-500">Graph</Button>
            <Typography className="mt-4">Yield: Potato - 100Kg</Typography>
            <Typography>Onion - 50Kg, Tomato - 70Kg</Typography>
            <Button variant="contained" className="bg-white text-blue-500 mt-2">Submit</Button>
          </CardContent>
        </Card>

        <Card className="w-64 h-32 bg-blue-500 text-white">
          <CardContent className="flex items-center justify-center">
            <Button variant="contained" className="bg-white text-blue-500 text-xl">Farmer 2</Button>
          </CardContent>
        </Card>
      </div> */}
    </div>
  );
}
