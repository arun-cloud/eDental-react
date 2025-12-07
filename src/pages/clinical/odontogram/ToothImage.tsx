// src/odontogram/ToothImage.tsx
import React from 'react';
import { Box } from '@mui/material';

type ToothImageProps = {
    highlighted?: boolean;
};

export const ToothImage: React.FC<ToothImageProps> = ({ highlighted }) => {
    return (
        <Box
            sx={{
                width: 40,
                height: 55,
                borderRadius: '16px',
                background: 'linear-gradient(135deg, #fafafa, #e0e0e0)',
                border: highlighted ? '2px solid #1976d2' : '1px solid #bdbdbd',
                boxShadow: highlighted ? '0 0 6px rgba(25,118,210,0.7)' : '0 1px 2px rgba(0,0,0,0.2)',
            }}
        />
    );
};
