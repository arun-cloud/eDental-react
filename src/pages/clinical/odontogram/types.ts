// src/odontogram/types.ts
import type { Indicator } from './indicators';

export type SurfaceName = 'mesial' | 'distal' | 'buccal' | 'lingual' | 'occlusal';

export interface SurfaceState {
    indicatorId: string | null;   // e.g. "caries" or null
}

export interface ToothState {
    toothId: number;
    surfaces: Record<SurfaceName, SurfaceState>;
    toothIndicators: string[];     // array of indicator IDs (rct, implant, etc.)
    treatmentPlan?: string | null;
}

export interface OdontogramExport {
    toothId: number;
    surfaces: Record<SurfaceName, string | null>;
    toothIndicators: string[];
    treatmentPlan?: string | null;
}

export type IndicatorMap = Record<string, Indicator>;
