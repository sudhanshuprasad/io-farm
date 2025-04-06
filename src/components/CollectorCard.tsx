import { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, CardContent, Button, Typography, TextField, InputAdornment } from '@mui/material';

export default function CollectorCard() {

  // const [allStock, setAllStock] = useState({ potato: 0, onion: 0, tomato: 0, potato_inquiry: 0, onion_inquiry: 0, tomato_inquiry: 0 });
  // const [allInquiry, setAllInquiry] = React.useState({ potato: 0, onion: 0, tomato: 0 });
  const [collector, setCollector] = useState({
    potato: { inquiry: "", sell: "", stock: "" },
    tomato: { inquiry: "", sell: "", stock: "" },
    onion: { inquiry: "", sell: "", stock: "" }
  });

  // const getAllStocks = async () => {
  //   try {
  //     const response: any = await axios.get(`/api/setCollectorData`);
  //     console.log(response?.data);
  //     setAllStock(response?.data);
  //   } catch (error) {
  //     console.error('Error fetching data:', error);
  //   }
  // };

  const getCollectorData = async () => {
    try {
      const response: any = await axios.get(`/api/setCollectorData`);
      console.log(response?.data);
      setCollector({
        potato: { inquiry: response?.data?.potato?.inquiry, sell: response?.data?.potato?.sell, stock: response?.data?.potato?.stock },
        tomato: { inquiry: response?.data?.tomato?.inquiry, sell: response?.data?.tomato?.sell, stock: response?.data?.tomato?.stock },
        onion: { inquiry: response?.data?.onion?.inquiry, sell: response?.data?.onion?.sell, stock: response?.data?.onion?.stock }
      });
      console.log(collector)
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  useEffect(() => {
    // getAllStocks();
    getCollectorData();
  }, []);

  const handleSubmit = () => {
    // Handle form submission logic here
    console.log('Form submitted!');
    console.log(collector);
    axios.post('/api/setCollectorData', {
      name: 'collector1',
      potato: collector.potato,
      onion: collector.onion,
      tomato: collector.tomato,
    })
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
            <Typography sx={{ textAlign: 'center', width: '100%', fontWeight: 'bold' }} variant="h6">Collector</Typography>
          </div>

          <ul className="list-disc list-inside mb-2 ml-5 flex flex-col gap-2">
            <li className='flex flex-row gap-2 justify-around text-center'>
              <Typography sx={{ marginBottom: '10px', justifyContent: 'left', width: '8rem' }} >Item:</Typography>
              <Typography sx={{ marginBottom: '10px', justifyContent: 'left', width: '8rem' }}>Stock:</Typography>
              <Typography sx={{ marginBottom: '10px', justifyContent: 'left', width: '8rem' }}>Inquiry:</Typography>
              <Typography sx={{ marginBottom: '10px', justifyContent: 'left', width: '8rem' }}>Sell:</Typography>
            </li>
            <li className='flex flex-row gap-2 justify-around'>
              <Typography sx={{ width: '8rem' }}>Potato:</Typography>
              <TextField variant="outlined" size='small' placeholder="100Kg" defaultValue={collector.potato.stock}
                onChange={
                  (e) => {
                    console.log(e.target.value);
                    setCollector({ ...collector, potato: { ...collector.potato, stock: e.target.value } });
                  }
                }
                slotProps={{
                  input: {
                    // readOnly: true,
                    endAdornment: <InputAdornment position="end">Kg</InputAdornment>,
                  },
                }}
              />
              <TextField variant="outlined" size='small' placeholder="80Kg" defaultValue={collector.potato.inquiry}
                onChange={
                  (e) => {
                    console.log(e.target.value);
                    setCollector({ ...collector, potato: { ...collector.potato, inquiry: e.target.value } });
                  }
                }
                slotProps={{
                  input: {
                    endAdornment: <InputAdornment position="end">Kg</InputAdornment>,
                  },
                }}
              />
              <TextField variant="outlined" size='small' placeholder="80Kg" defaultValue={collector.potato.sell}
                onChange={
                  (e) => {
                    console.log(e.target.value);
                    setCollector({ ...collector, potato: { ...collector.potato, sell: e.target.value } });
                  }
                }
                slotProps={{
                  input: {
                    endAdornment: <InputAdornment position="end">Kg</InputAdornment>,
                  },
                }}
              />
            </li>
            <li className='flex flex-row gap-2 justify-around'>
              <Typography sx={{ width: '8rem' }}>Onion:</Typography>
              <TextField variant="outlined" size='small' placeholder="50Kg" defaultValue={collector.onion.stock}
                onChange={
                  (e) => {
                    console.log(e.target.value);
                    setCollector({ ...collector, onion: { ...collector.onion, stock: e.target.value } });
                  }
                }
                slotProps={{
                  input: {
                    // readOnly: true,
                    endAdornment: <InputAdornment position="end">Kg</InputAdornment>,
                  },
                }}
              />
              <TextField variant="outlined" size='small' placeholder="50Kg" defaultValue={collector.onion.inquiry}
                onChange={
                  (e) => {
                    console.log(e.target.value);
                    setCollector({ ...collector, onion: { ...collector.onion, inquiry: e.target.value } });
                  }
                }
                slotProps={{
                  input: {
                    // readOnly: true,
                    endAdornment: <InputAdornment position="end">Kg</InputAdornment>,
                  },
                }}
              />
              <TextField variant="outlined" size='small' placeholder="50Kg" defaultValue={collector.onion.sell}
                onChange={
                  (e) => {
                    console.log(e.target.value);
                    setCollector({ ...collector, onion: { ...collector.onion, sell: e.target.value } });
                  }
                }
                slotProps={{
                  input: {
                    endAdornment: <InputAdornment position="end">Kg</InputAdornment>,
                  },
                }}
              />
            </li>
            <li className='flex flex-row gap-2 justify-around'>
              <Typography sx={{ width: '8rem' }}>Tomato:</Typography>
              <TextField variant="outlined" size='small' placeholder="150Kg" defaultValue={collector.tomato.stock}
                onChange={
                  (e) => {
                    console.log(e.target.value);
                    setCollector({ ...collector, tomato: { ...collector.tomato, stock: e.target.value } });
                  }
                }
                slotProps={{
                  input: {
                    endAdornment: <InputAdornment position="end">Kg</InputAdornment>,
                  },
                }} />
              <TextField variant="outlined" size='small' placeholder="150Kg" defaultValue={collector.tomato.inquiry}
                onChange={
                  (e) => {
                    console.log(e.target.value);
                    setCollector({ ...collector, tomato: { ...collector.tomato, inquiry: e.target.value } });
                  }
                }
                slotProps={{
                  input: {
                    endAdornment: <InputAdornment position="end">Kg</InputAdornment>,
                  },
                }} />
              <TextField variant="outlined" size='small' placeholder="150Kg" defaultValue={collector.tomato.sell}
                onChange={
                  (e) => {
                    console.log(e.target.value);
                    setCollector({ ...collector, tomato: { ...collector.tomato, sell: e.target.value } });
                  }
                }
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