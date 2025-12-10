// src/features/patient/pages/OdontogramPage.tsx
import React from 'react';
import { Box, Paper } from '@mui/material';
import { OdontogramChart } from './OdontogramChart';

export const OdontogramPage: React.FC = () => {
    return (
        <Box sx={{ p: 2 }}>
            <Paper sx={{ p: 2 }}>
                <OdontogramChart />
            </Paper>
        </Box>

    )
}
