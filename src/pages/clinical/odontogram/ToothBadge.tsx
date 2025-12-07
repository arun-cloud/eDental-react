// src/odontogram/ToothBadge.tsx
import React from 'react';
import { Chip, Stack } from '@mui/material';
import { ToothFlag } from './types';

type ToothBadgeProps = {
    flags: ToothFlag[];
};

const flagLabelMap: Record<ToothFlag, string> = {
    rct: 'RCT',
    implant: 'Implant',
    crown: 'Crown',
    missing: 'Missing',
};

export const ToothBadge: React.FC<ToothBadgeProps> = ({ flags }) => {
    if (!flags.length) return null;

    return (
        <Stack direction="row" spacing={0.5} sx={{ mt: 0.5 }}>
            {flags.map((flag) => (
                <Chip
                    key={flag}
                    label={flagLabelMap[flag]}
                    size="small"
                    sx={{ fontSize: '0.6rem', height: 18 }}
                />
            ))}
        </Stack>
    );
};
