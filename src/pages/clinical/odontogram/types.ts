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

export interface ToothLayout {
    /** Tooth image placement inside SVG */
    toothImageX: number;
    toothImageY: number;
    toothWidth: number;
    toothHeight: number;

    /** Surface wheel placement */
    wheelX: number;
    wheelY: number;
    wheelSize?: number;

    /** Orientation info */
    arch: 'upper' | 'lower';

    /**
     * Crown anatomy tuning (percentages of toothHeight)
     * Defaults are safe if omitted
     */
    crown?: {
        topRatio?: number;        // default: 0.0
        centerRatio?: number;     // default: 0.25
        cervicalRatio?: number;   // default: 0.45
    };

    /**
     * Root anatomy tuning
     */
    root?: {
        midRatio?: number;        // default: 0.6
        lowerRatio?: number;      // default: 0.75

        /**
         * Apex offset outside image (px)
         * controls how far indicator sits beyond PNG
         */
        apexOffset?: number;      // default: 4

        /**
         * Root direction override (rare case)
         * normally inferred from arch
         */
        direction?: 1 | -1;
    };

    /**
     * Apex definition (single or multiple roots)
     * Offsets are relative to tooth center
     */
    apex?: {
        roots: {
            offsetX: number;        // horizontal shift from centerX
            offsetY?: number;       // optional vertical fine-tuning
            label?: 'mesial' | 'distal' | 'palatal' | 'buccal';
        }[];
    };

    /**
     * Optional correction zones (future-proofing)
     */
    corrections?: {
        rotationDeg?: number;     // visual rotation indicators
        scaleX?: number;
        scaleY?: number;
    };
}

