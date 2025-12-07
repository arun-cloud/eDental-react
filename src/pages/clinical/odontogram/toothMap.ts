// src/odontogram/toothMap.ts
import { ToothRecord, SurfaceName, SurfaceState } from './types';

const surfaceNames: SurfaceName[] = ['mesial', 'distal', 'buccal', 'lingual', 'occlusal'];

const createDefaultSurfaces = (): Record<SurfaceName, SurfaceState> => {
    const surfaces: Partial<Record<SurfaceName, SurfaceState>> = {};
    surfaceNames.forEach((s) => {
        surfaces[s] = { condition: 'healthy' };
    });
    return surfaces as Record<SurfaceName, SurfaceState>;
};

const createTooth = (
    id: number,
    arch: 'upper' | 'lower',
    indexInArch: number,
    label?: string
): ToothRecord => ({
    id,
    arch,
    indexInArch,
    label: label ?? id.toString(),
    surfaces: createDefaultSurfaces(),
    flags: [],
});

// Simple mapping: 1–16 upper, 17–32 lower
export const initialTeethArray: ToothRecord[] = [
    // Upper teeth 1–16
    ...Array.from({ length: 16 }, (_, i) => {
        const id = i + 1;
        return createTooth(id, 'upper', i + 1);
    }),
    // Lower teeth 17–32
    ...Array.from({ length: 16 }, (_, i) => {
        const id = 17 + i;
        return createTooth(id, 'lower', i + 1);
    }),
];

// For easier lookup by id
export const buildInitialToothState = (): Record<number, ToothRecord> => {
    const state: Record<number, ToothRecord> = {};
    initialTeethArray.forEach((t) => {
        state[t.id] = t;
    });
    return state;
};
