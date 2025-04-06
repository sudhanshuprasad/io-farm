"use client"

import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import FarmerSection from './FarmerSection';

const Item = styled(Paper)(({ theme }: { theme: any }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: (theme?.vars ?? theme).palette.text.secondary,
    ...theme.applyStyles('dark', {
        backgroundColor: '#1A2027',
    }),
}));

export default function FarmerGrid() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid size={{ sm: 6, md: 4 }}>
                    <FarmerSection name="farmer1" />
                </Grid>
                <Grid size={{ sm: 6, md: 4 }}>
                    <FarmerSection name="farmer2" />
                </Grid>
                {/* <Grid size={{ sm: 6, md: 4 }}>
                    <FarmerSection name="farmer3" />
                </Grid> */}
            </Grid>
        </Box>
    );
}