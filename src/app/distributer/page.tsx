"use client";

import GMap from "@/components/GMap";
// import Map from "@/components/Map";
import { Button, Card, CardContent, InputAdornment, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Collector() {

  const [farmerData, setFarmerData] = useState({
    potato_inquiry: 'loading...',
    potato_stock: 'loading...',
    onion_inquiry: 'loading...',
    onion_stock: 'loading...',
    tomato_inquiry: 'loading...',
    tomato_stock: 'loading...',
  });

  const [allStock, setAllStock] = useState({ potato: 0, onion: 0, tomato: 0, potato_inquiry: 0, onion_inquiry: 0, tomato_inquiry: 0 });

  const getAllStocks = async () => {
    try {
      const response: any = await axios.get(`/api/setCollectorData`);
      console.log(response?.data);
      setAllStock(response?.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    getAllStocks();
  }, []);

  const handleSubmit = () => {
    // Handle form submission logic here
    console.log('Form submitted!');
    console.log(farmerData);
    axios.post('/api/setFarmerData', {
      name: 'Collector 1',
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
            <Typography sx={{ textAlign: 'center', width: '100%', fontWeight: 'bold' }} variant="h6">Distributer 1</Typography>
          </div>

          <ul className="list-disc list-inside mb-2 ml-5 flex flex-col gap-2">
            <li className='flex flex-row gap-2 justify-around text-center'>
              <Typography sx={{ marginBottom: '10px', justifyContent: 'left' }} ></Typography>
              <Typography sx={{ marginBottom: '10px', justifyContent: 'left' }} >Stock:</Typography>
              <Typography sx={{ marginBottom: '10px', justifyContent: 'left' }}>Inquiry:</Typography>
              <Typography sx={{ marginBottom: '10px', justifyContent: 'left' }}>Sell:</Typography>
            </li>
            <li className='flex flex-row gap-2 justify-around'>
              <Typography sx={{ width: '8rem' }}>Potato:</Typography>
              <TextField variant="outlined" size='small' placeholder="0Kg" defaultValue={allStock.potato_inquiry}
                onChange={(e) => {
                  console.log(e.target.value)
                  setFarmerData({ ...farmerData, potato_inquiry: e.target.value })
                }}
                slotProps={{
                  input: {
                    endAdornment: <InputAdornment position="end">Kg</InputAdornment>,
                  },
                }}
              />
              <TextField variant="outlined" size='small' placeholder="0Kg" defaultValue={allStock.potato}
                onChange={(e) => {
                  console.log(e.target.value)
                  setFarmerData({ ...farmerData, potato_stock: e.target.value })
                }}
                slotProps={{
                  input: {
                    endAdornment: <InputAdornment position="end">Kg</InputAdornment>,
                  },
                }}
              />
              <TextField variant="outlined" size='small' placeholder="0Kg" defaultValue={allStock.potato}
                onChange={(e) => {
                  console.log(e.target.value)
                  setFarmerData({ ...farmerData, potato_stock: e.target.value })
                }}
                slotProps={{
                  input: {
                    endAdornment: <InputAdornment position="end">Kg</InputAdornment>,
                  },
                }}
              />
            </li>

            <li className='flex flex-row gap-2 justify-around'>
              <Typography sx={{ width: '8rem' }}>Onion:</Typography>
              <TextField variant="outlined" size='small' placeholder="0" defaultValue={allStock.onion_inquiry}
                onChange={(e) => {
                  console.log(e.target.value)
                  setFarmerData({ ...farmerData, onion_inquiry: e.target.value })
                }}
                slotProps={{
                  input: {
                    endAdornment: <InputAdornment position="end">Kg</InputAdornment>,
                  },
                }}
              />
              <TextField variant="outlined" size='small' placeholder="0" defaultValue={allStock.onion}
                onChange={(e) => {
                  console.log(e.target.value)
                  setFarmerData({ ...farmerData, onion_stock: e.target.value })
                }}
                slotProps={{
                  input: {
                    endAdornment: <InputAdornment position="end">Kg</InputAdornment>,
                  },
                }}
              />
              <TextField variant="outlined" size='small' placeholder="0" defaultValue={allStock.onion}
                onChange={(e) => {
                  console.log(e.target.value)
                  setFarmerData({ ...farmerData, onion_stock: e.target.value })
                }}
                slotProps={{
                  input: {
                    endAdornment: <InputAdornment position="end">Kg</InputAdornment>,
                  },
                }}
              />
            </li>

            <li className='flex flex-row gap-2 justify-around'>
              <Typography sx={{ width: '8rem' }}>Tomato:</Typography>
              <TextField variant="outlined" size='small' placeholder="0" defaultValue={allStock.tomato_inquiry}
                onChange={(e) => {
                  console.log(e.target.value)
                  setFarmerData({ ...farmerData, tomato_inquiry: e.target.value })
                }}
                slotProps={{
                  input: {
                    endAdornment: <InputAdornment position="end">Kg</InputAdornment>,
                  },
                }}
              />
              <TextField variant="outlined" size='small' placeholder="0" defaultValue={allStock.tomato}
                onChange={(e) => {
                  console.log(e.target.value)
                  setFarmerData({ ...farmerData, tomato_stock: e.target.value })
                }}
                slotProps={{
                  input: {
                    endAdornment: <InputAdornment position="end">Kg</InputAdornment>,
                  },
                }}
              />
              <TextField variant="outlined" size='small' placeholder="0" defaultValue={allStock.tomato}
                onChange={(e) => {
                  console.log(e.target.value)
                  setFarmerData({ ...farmerData, tomato_stock: e.target.value })
                }}
                slotProps={{
                  input: {
                    endAdornment: <InputAdornment position="end">Kg</InputAdornment>,
                  },
                }}
              />
            </li>

          </ul>

          <Button variant="contained" style={{ marginTop: '10px' }} className="bg-white text-blue-500 mt-2" onClick={handleSubmit}>Submit</Button>
        </CardContent>
      </Card>

      {/* <Map latitude={23.342} longitude={67.234} /> */}
      <GMap />

    </div>
  );
}
