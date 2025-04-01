import { Card, CardContent } from '@mui/material';
import { Button, TextField, Typography } from '@mui/material';

export default function FarmerPage() {
  return (
    <div className="flex flex-col items-center w-full h-full bg-gray-50 p-4">
      <Typography variant="h4" className="mb-6">Farmer page</Typography>

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
      </div>
    </div>
  );
}
