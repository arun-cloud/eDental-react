// src/odontogram/indicators.ts

export type IndicatorLevel = 'surface' | 'tooth';

export interface Indicator {
    id: string;
    name: string;
    level: IndicatorLevel;
    style?: 'fill' | 'outline' | 'corner';
    draw?: string;
    color: string;
    icon: string; // font-awesome class
}

export const INDICATORS: Indicator[] = [
    // Surface based
    { id: 'caries', name: 'Dental Caries', level: 'surface', style: 'fill', color: '#FF0000', icon: 'fa-solid fa-circle-dot text-red-600' },
    { id: 'amalgam', name: 'Amalgam Restoration', level: 'surface', style: 'fill', color: '#0047AB', icon: 'fa-solid fa-fill-drip text-blue-700' },
    { id: 'composite', name: 'Composite Restoration', level: 'surface', style: 'outline', color: '#2196F3', icon: 'fa-regular fa-square text-blue-500' },
    { id: 'temporary', name: 'Temporary Filling', level: 'surface', style: 'fill', color: '#FFD700', icon: 'fa-solid fa-clock text-yellow-500' },
    { id: 'sealant', name: 'Sealant', level: 'surface', style: 'outline', color: '#00C853', icon: 'fa-solid fa-shield-halved text-green-600' },
    { id: 'restoration-failure', name: 'Restoration Needs Intervention', level: 'surface', style: 'outline', color: '#FF0000', icon: 'fa-solid fa-triangle-exclamation text-red-600' },
    { id: 'overhang', name: 'Overhanging Restoration', level: 'surface', style: 'corner', color: '#FF0000', icon: 'fa-solid fa-caret-right text-red-600' },

    // Tooth based: fractures / pathology
    { id: 'crown-fracture', name: 'Crown Fracture', level: 'tooth', draw: 'crown-fracture', color: '#FF0000', icon: 'fa-solid fa-bolt text-red-600' },
    { id: 'root-fracture', name: 'Root Fracture', level: 'tooth', draw: 'root-fracture', color: '#FF0000', icon: 'fa-solid fa-bolt text-red-600' },
    { id: 'periapical', name: 'Periapical Pathology', level: 'tooth', draw: 'periapical', color: '#FF0000', icon: 'fa-solid fa-virus text-red-600' },

    // Tooth based: RCT indicators
    { id: 'rct', name: 'Root Canal Filled (Complete)', level: 'tooth', draw: 'rct', color: '#2196F3', icon: 'fa-solid fa-syringe text-blue-600' },
    { id: 'incomplete-rct', name: 'Incomplete Root Canal', level: 'tooth', draw: 'rct-dashed', color: '#2196F3', icon: 'fa-solid fa-syringe text-blue-600 opacity-60' },
    { id: 'canal-fill', name: 'Canal Filling (Single)', level: 'tooth', draw: 'rct-single', color: '#2196F3', icon: 'fa-solid fa-circle text-blue-600' },
    { id: 'improper-rct', name: 'Improper RCT (Needs Intervention)', level: 'tooth', draw: 'rct-warning', color: '#FF0000', icon: 'fa-solid fa-triangle-exclamation text-red-600' },

    // Tooth based: eruption / soft tissue / retention
    { id: 'impacted', name: 'Impacted Tooth', level: 'tooth', draw: 'impaction', color: '#FF0000', icon: 'fa-solid fa-arrow-down-long text-red-600' },
    { id: 'partial-eruption', name: 'Partial Eruption', level: 'tooth', draw: 'eruption-line', color: '#FF0000', icon: 'fa-solid fa-arrows-up-down text-red-600' },
    { id: 'soft-tissue', name: 'Soft Tissue Abnormality', level: 'tooth', draw: 'gingival-wave', color: '#FF0000', icon: 'fa-solid fa-wave-square text-red-600' },
    { id: 'retained-deciduous', name: 'Retained Deciduous Tooth', level: 'tooth', draw: 'retained-D', color: '#2196F3', icon: 'fa-solid fa-baby text-blue-600' },

    // Missing teeth
    { id: 'missing-noneed', name: 'Missing Tooth – No Intervention', level: 'tooth', draw: 'x-blue', color: '#2196F3', icon: 'fa-solid fa-xmark text-blue-600' },
    { id: 'missing-need', name: 'Missing Tooth – Needs Intervention', level: 'tooth', draw: 'x-red', color: '#FF0000', icon: 'fa-solid fa-xmark text-red-600' },

    // Prosthetics
    { id: 'metal-crown', name: 'Metal Crown', level: 'tooth', draw: 'crown-metal', color: '#2196F3', icon: 'fa-solid fa-chess-king text-blue-600' },
    { id: 'pfm-crown', name: 'Porcelain-Fused-to-Metal Crown', level: 'tooth', draw: 'crown-pfm', color: '#2196F3', icon: 'fa-solid fa-chess-queen text-blue-600' },
    { id: 'rpd', name: 'Removable Partial Denture', level: 'tooth', draw: 'rpd', color: '#2196F3', icon: 'fa-solid fa-teeth-open text-blue-600' },
    { id: 'bridge', name: 'Fixed Bridge', level: 'tooth', draw: 'bridge', color: '#2196F3', icon: 'fa-solid fa-link text-blue-600' },
    { id: 'implant', name: 'Implant', level: 'tooth', draw: 'implant', color: '#2196F3', icon: 'fa-solid fa-screwdriver-wrench text-blue-600' },

    // Position
    { id: 'rotation', name: 'Rotation', level: 'tooth', draw: 'rotation', color: '#FF0000', icon: 'fa-solid fa-rotate-right text-red-600' },
    { id: 'malposed', name: 'Malposed Tooth', level: 'tooth', draw: 'malposition', color: '#FF0000', icon: 'fa-solid fa-up-down-left-right text-red-600' },
    { id: 'extrusion', name: 'Extrusion / Intrusion', level: 'tooth', draw: 'extrusion', color: '#FF0000', icon: 'fa-solid fa-arrows-up-down text-red-600' },
];

export const INDICATOR_GROUPS = [
    {
        id: 'surface-basic',
        name: 'Caries / Restorations',
        icon: 'fa-solid fa-tooth',
        children: ['caries', 'amalgam', 'composite', 'temporary', 'sealant', 'restoration-failure', 'overhang'],
    },
    {
        id: 'fracture-pathology',
        name: 'Fracture / Pathology',
        icon: 'fa-solid fa-bolt',
        children: ['crown-fracture', 'root-fracture', 'periapical'],
    },
    {
        id: 'rct-group',
        name: 'Root Canal',
        icon: 'fa-solid fa-syringe',
        children: ['rct', 'incomplete-rct', 'canal-fill', 'improper-rct'],
    },
    {
        id: 'eruption-soft',
        name: 'Eruption / Soft tissue',
        icon: 'fa-solid fa-arrow-down-long',
        children: ['impacted', 'partial-eruption', 'soft-tissue', 'retained-deciduous'],
    },
    {
        id: 'missing-prosthetic',
        name: 'Missing / Prosthetic',
        icon: 'fa-solid fa-chess-king',
        children: ['missing-noneed', 'missing-need', 'metal-crown', 'pfm-crown', 'rpd', 'bridge', 'implant'],
    },
    {
        id: 'position-group',
        name: 'Tooth Position',
        icon: 'fa-solid fa-compass',
        children: ['rotation', 'malposed', 'extrusion'],
    },
];

// Utility functions for working with indicators
export type IndicatorMap = Record<string, Indicator>;

export const indicatorById: IndicatorMap = INDICATORS.reduce((acc, ind) => {
    acc[ind.id] = ind;
    return acc;
}, {} as IndicatorMap);

export const getSurfaceColor = (indicatorId: string | null | undefined): string => {
    if (!indicatorId) return '#FFFFFF';
    const ind = indicatorById[indicatorId];
    return ind?.color ?? '#FFFFFF';
};

export const getStrokeColor = (indicatorId: string | null | undefined): string => {
    if (!indicatorId) return '#424242';
    const ind = indicatorById[indicatorId];
    if (!ind) return '#424242';
    return ind.level === 'surface' ? '#424242' : ind.color;
};

