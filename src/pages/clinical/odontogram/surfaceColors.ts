// src/odontogram/surfaceColors.ts
import { SurfaceCondition } from './types';

export const getSurfaceFillColor = (condition: SurfaceCondition): string => {
    switch (condition) {
        case 'caries':
            return '#e53935'; // red
        case 'filled':
            return '#43a047'; // green
        case 'crown':
            return '#fdd835'; // yellow
        case 'fracture':
            return '#fb8c00'; // orange
        case 'missing':
            return '#9e9e9e'; // grey
        case 'healthy':
        default:
            return '#ffffff'; // white
    }
};

export const getSurfaceStrokeColor = (condition: SurfaceCondition): string => {
    if (condition === 'missing') {
        return '#9e9e9e';
    }
    return '#424242';
};
