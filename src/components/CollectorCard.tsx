import React, { use, useEffect } from 'react';
import axios, { all } from 'axios';
import { Card, CardContent, Button, Typography, Input, TextField, InputAdornment } from '@mui/material';

export default function CollectorCard() {

  const [allStock, setAllStock] = React.useState({ potato: 0, onion: 0, tomato: 0, potato_inquiry: 0, onion_inquiry: 0, tomato_inquiry: 0 });
  // const [allInquiry, setAllInquiry] = React.useState({ potato: 0, onion: 0, tomato: 0 });

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
    // axios.post('/api/setFarmerData', {
    //   name: 'Collector 1',
    //   potato: '100Kg',
    //   onion: '50Kg',
    //   tomato: '70Kg',

    // })
  };

  return (
    <div>

      <Card className="bg-blue-500 text-white p-4">
        <CardContent className="flex flex-col space-y-2">
          <div className="full-width flex items-center justify-between mb-4">
            <Typography sx={{ textAlign: 'center', width: '100%', fontWeight: 'bold' }} variant="h6">Collector 1</Typography>
          </div>

          <ul className="list-disc list-inside mb-2 ml-5 flex flex-col gap-2">
            <li className='flex flex-row gap-2 justify-around text-center'>
              <Typography sx={{ marginBottom: '10px', justifyContent: 'left' }} >Item:</Typography>
              <Typography sx={{ marginBottom: '10px', justifyContent: 'left' }}>Stock:</Typography>
              <Typography sx={{ marginBottom: '10px', justifyContent: 'left' }}>Inquiry:</Typography>
              <Typography sx={{ marginBottom: '10px', justifyContent: 'left' }}>Sell:</Typography>
            </li>
            <li className='flex flex-row gap-2 justify-around'>
              <Typography sx={{ width: '8rem' }}>Potato:</Typography>
              <TextField variant="outlined" size='small' placeholder="80Kg" defaultValue={allStock.potato}
                slotProps={{
                  input: {
                    endAdornment: <InputAdornment position="end">Kg</InputAdornment>,
                  },
                }} />
              <TextField variant="outlined" size='small' placeholder="80Kg" defaultValue={allStock.potato_inquiry}
                slotProps={{
                  input: {
                    endAdornment: <InputAdornment position="end">Kg</InputAdornment>,
                  },
                }} />
              <TextField variant="outlined" size='small' placeholder="80Kg" defaultValue={allStock.potato_inquiry}
                slotProps={{
                  input: {
                    endAdornment: <InputAdornment position="end">Kg</InputAdornment>,
                  },
                }} />
            </li>
            <li className='flex flex-row gap-2 justify-around'>
              <Typography sx={{ width: '8rem' }}>Onion:</Typography>
              <TextField variant="outlined" size='small' placeholder="50Kg" defaultValue={allStock.onion}
                slotProps={{
                  input: {
                    endAdornment: <InputAdornment position="end">Kg</InputAdornment>,
                  },
                }} />
              <TextField variant="outlined" size='small' placeholder="50Kg" defaultValue={allStock.onion_inquiry}
                slotProps={{
                  input: {
                    endAdornment: <InputAdornment position="end">Kg</InputAdornment>,
                  },
                }} />
              <TextField variant="outlined" size='small' placeholder="50Kg" defaultValue={allStock.onion_inquiry}
                slotProps={{
                  input: {
                    endAdornment: <InputAdornment position="end">Kg</InputAdornment>,
                  },
                }} />
            </li>
            <li className='flex flex-row gap-2 justify-around'>
              <Typography sx={{ width: '8rem' }}>Tomato:</Typography>
              <TextField variant="outlined" size='small' placeholder="150Kg" defaultValue={allStock.tomato}
                slotProps={{
                  input: {
                    endAdornment: <InputAdornment position="end">Kg</InputAdornment>,
                  },
                }} />
              <TextField variant="outlined" size='small' placeholder="150Kg" defaultValue={allStock.tomato_inquiry}
                slotProps={{
                  input: {
                    endAdornment: <InputAdornment position="end">Kg</InputAdornment>,
                  },
                }} />
              <TextField variant="outlined" size='small' placeholder="150Kg" defaultValue={allStock.tomato_inquiry}
                slotProps={{
                  input: {
                    endAdornment: <InputAdornment position="end">Kg</InputAdornment>,
                  },
                }} />
            </li>
          </ul>

          <Button variant="contained" style={{ marginTop: '10px' }} className="bg-white text-blue-500 mt-2" onClick={handleSubmit}>Submit</Button>
        </CardContent>
      </Card>

    </div>
  );
}