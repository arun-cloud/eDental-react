// src/odontogram/indicatorUtils.ts
import { INDICATORS, type Indicator } from './indicators';
import type { IndicatorMap } from './types';

export const indicatorById: IndicatorMap = INDICATORS.reduce((acc, ind) => {
    acc[ind.id] = ind;
    return acc;
}, {} as IndicatorMap);

export const getSurfaceColor = (indicatorId: string | null): string => {
    if (!indicatorId) return '#FFFFFF';
    const ind = indicatorById[indicatorId];
    return ind?.color ?? '#FFFFFF';
};

export const getStrokeColor = (indicatorId: string | null): string => {
    if (!indicatorId) return '#424242';
    const ind = indicatorById[indicatorId];
    if (!ind) return '#424242';
    return ind.level === 'surface' ? '#424242' : ind.color;
};
