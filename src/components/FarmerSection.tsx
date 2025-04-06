import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, CardContent, Button, Typography, Input, TextField, InputAdornment } from '@mui/material';
import Graph from './Graph';
export default function FarmerSection({ name }: { name?: string }) {

  const [farmerData, setFarmerData] = useState({
    temperature: 'loading...',
    humidity: 'loading...',
    moisture: 'loading...',
    pump: 'off',
    yield: { potato: '0', onion: '0', tomato: '0' }
  });

  // Fetch data from the server when the component mounts
  const fetchData = async () => {
    try {
      const response: any = await axios.get(`/api/setFarmerData?name=${name}`);
      console.log(response?.data);
      setFarmerData({
        temperature: response?.data?.temperature,
        humidity: response?.data?.humidity,
        moisture: response?.data?.moisture,
        pump: response?.data?.pump,
        yield: response?.data?.yield
      });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  useEffect(() => {
    fetchData();
  }
    , []); // Empty dependency array to run only once on mount

  const handleSubmit = () => {
    // Handle form submission logic here
    console.log('Form submitted!');
    axios.post('/api/setFarmerData', {
      name: name,
      potato: farmerData?.yield?.potato,
      onion: farmerData?.yield?.onion,
      tomato: farmerData?.yield?.tomato,

    })
  };

  return (
    // <div className="flex flex-col items-center w-full h-full bg-gray-50 p-4">
    <div>
      <Card className="bg-blue-500 text-white p-4">
        <CardContent className="flex flex-col space-y-2">
          <div className="full-width flex items-center justify-between mb-4">
            <Typography sx={{ textAlign: 'center', width: '100%', fontWeight: 'bold' }} variant="h6">{name}</Typography>
          </div>

          <Typography>Agriculture land:</Typography>
          <ul className="list-disc list-inside mb-2">
            <li>Temperature: {farmerData?.temperature}</li>
            <li>Humidity: {farmerData?.humidity}</li>
            <li>Moisture: {farmerData?.moisture}</li>
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
              <TextField variant="outlined" size='small' placeholder="100Kg" defaultValue={farmerData?.yield?.potato}
                onChange={(e) => {
                  console.log(e.target.value);
                  setFarmerData({ ...farmerData, yield: { ...farmerData.yield, potato: e.target.value } })
                }}
                slotProps={{
                  input: {
                    endAdornment: <InputAdornment position="end">Kg</InputAdornment>,
                  },
                }}
              />
            </li>
            <li className='flex flex-row gap-2'>
              <Typography>Onion:</Typography>
              <TextField variant="outlined" size='small' placeholder="50Kg" defaultValue={farmerData?.yield?.onion}
                onChange={(e) => {
                  console.log(e.target.value);
                  setFarmerData({ ...farmerData, yield: { ...farmerData.yield, onion: e.target.value } })
                }}
                slotProps={{
                  input: {
                    endAdornment: <InputAdornment position="end">Kg</InputAdornment>,
                  },
                }}
              />
            </li>
            <li className='flex flex-row gap-2'>
              <Typography>Tomato:</Typography>
              <TextField variant="outlined" size='small' placeholder="70Kg" defaultValue={farmerData?.yield?.tomato}
                onChange={(e) => {
                  console.log(e.target.value);
                  setFarmerData({ ...farmerData, yield: { ...farmerData.yield, tomato: e.target.value } })
                }}
                slotProps={{
                  input: {
                    endAdornment: <InputAdornment position="end">Kg</InputAdornment>,
                  },
                }}
              />
            </li>
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
