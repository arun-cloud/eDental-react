// src/odontogram/types.ts
import type { Indicator } from './indicators';

export type SurfaceName = 'mesial' | 'distal' | 'buccal' | 'lingual' | 'occlusal';

export type ToothFlag = 'rct' | 'implant' | 'crown' | 'missing';

export interface SurfaceState {
    condition: 'healthy' | 'caries' | 'filling' | 'crown' | 'missing';
    indicatorId?: string | null;   // e.g. "caries" or null
}

export interface ToothRecord {
    id: number;
    arch: 'upper' | 'lower';
    indexInArch: number;
    label: string;
    surfaces: Record<SurfaceName, SurfaceState>;
    flags: string[];
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

