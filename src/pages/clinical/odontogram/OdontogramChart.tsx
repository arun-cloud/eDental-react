// src/odontogram/OdontogramChart.tsx
import React, { useState } from 'react';
import { IndicatorMenu } from './IndicatorMenu';
import { SurfaceName, ToothState, OdontogramExport } from './types';
import { ToothContainer } from './ToothContainer';
import './odontogram.css';

const surfaceNames: SurfaceName[] = ['buccal', 'mesial', 'distal', 'lingual', 'occlusal'];

const createEmptyTooth = (id: number): ToothState => ({
    toothId: id,
    surfaces: surfaceNames.reduce((acc, s) => {
        acc[s] = { condition: 'healthy', indicatorId: null };
        return acc;
    }, {} as ToothState['surfaces']),
    toothIndicators: [],
    treatmentPlan: null,
});

// FDI (ISO 3950) numbering system for permanent teeth
// Quadrant 1: 11-18 (Upper Right)
// Quadrant 2: 21-28 (Upper Left)
// Quadrant 3: 31-38 (Lower Left)
// Quadrant 4: 41-48 (Lower Right)
const fdiToothIds = [
    ...Array.from({ length: 8 }, (_, i) => 11 + i), // 11-18
    ...Array.from({ length: 8 }, (_, i) => 21 + i), // 21-28
    ...Array.from({ length: 8 }, (_, i) => 31 + i), // 31-38
    ...Array.from({ length: 8 }, (_, i) => 41 + i), // 41-48
];

const initialTeeth: ToothState[] = fdiToothIds.map(id => createEmptyTooth(id));

// placeholder mapping; you will swap each id with correct PNG
const toothImageForId = (id: number): string =>
    `/assets/img/odontogram/tooth-${id}.png`;

export const OdontogramChart: React.FC = () => {
    const [teeth, setTeeth] = useState<ToothState[]>(initialTeeth);
    const [activeIndicatorId, setActiveIndicatorId] = useState<string | null>(null);

    const updateSurface = (toothId: number, surface: SurfaceName, indicatorId: string | null) => {
        setTeeth(prev =>
            prev.map(t =>
                t.toothId === toothId
                    ? {
                        ...t,
                        surfaces: {
                            ...t.surfaces,
                            [surface]: { ...t.surfaces[surface], indicatorId },
                        },
                    }
                    : t
            )
        );
    };

    const toggleToothIndicator = (toothId: number, indicatorId: string) => {
        setTeeth(prev =>
            prev.map(t => {
                if (t.toothId !== toothId) return t;
                const exists = t.toothIndicators.includes(indicatorId);
                return {
                    ...t,
                    toothIndicators: exists
                        ? t.toothIndicators.filter(id => id !== indicatorId)
                        : [...t.toothIndicators, indicatorId],
                };
            })
        );
    };

    const exportJson = (): OdontogramExport[] => {
        return teeth.map(t => ({
            toothId: t.toothId,
            surfaces: {
                buccal: t.surfaces.buccal.indicatorId ?? null,
                mesial: t.surfaces.mesial.indicatorId ?? null,
                distal: t.surfaces.distal.indicatorId ?? null,
                lingual: t.surfaces.lingual.indicatorId ?? null,
                occlusal: t.surfaces.occlusal.indicatorId ?? null,
            },
            toothIndicators: t.toothIndicators,
            treatmentPlan: t.treatmentPlan ?? undefined,
        }));
    };

    const handleSaveClick = () => {
        const data = exportJson();
        console.log('Odontogram JSON:', JSON.stringify(data, null, 2));
        // later: send to API
    };

    // Separate teeth by quadrants for proper FDI display
    // Upper: Q1 (11-18) + Q2 (21-28)
    // Lower: Q3 (31-38) + Q4 (41-48)
    const quadrant1 = teeth.filter(t => t.toothId >= 11 && t.toothId <= 18); // Upper Right
    const quadrant2 = teeth.filter(t => t.toothId >= 21 && t.toothId <= 28); // Upper Left
    const quadrant3 = teeth.filter(t => t.toothId >= 31 && t.toothId <= 38); // Lower Left
    const quadrant4 = teeth.filter(t => t.toothId >= 41 && t.toothId <= 48); // Lower Right

    return (
        <div>
            <IndicatorMenu
                activeIndicatorId={activeIndicatorId}
                onIndicatorSelect={setActiveIndicatorId}
            />

            <div style={{ padding: '8px 12px' }}>
                {/* Upper Arch: Q1 (18→11 reversed) + Q2 (21→28 forward) */}
                <div style={{ display: 'flex', justifyContent: 'center', gap: 6, marginBottom: 16 }}>
                    {quadrant1
                        .slice()
                        .reverse()
                        .map(t => (
                            <ToothContainer
                                key={t.toothId}
                                tooth={t}
                                toothImageSrc={toothImageForId(t.toothId)}
                                activeIndicatorId={activeIndicatorId}
                                onSurfaceUpdate={updateSurface}
                                onToothIndicatorToggle={toggleToothIndicator}
                            />
                        ))}
                    {quadrant2.map(t => (
                        <ToothContainer
                            key={t.toothId}
                            tooth={t}
                            toothImageSrc={toothImageForId(t.toothId)}
                            activeIndicatorId={activeIndicatorId}
                            onSurfaceUpdate={updateSurface}
                            onToothIndicatorToggle={toggleToothIndicator}
                        />
                    ))}
                </div>

                {/* Lower Arch: Q4 (48→41 reversed) + Q3 (31→38 forward) */}
                <div style={{ display: 'flex', justifyContent: 'center', gap: 6, marginTop: 40 }}>
                    {quadrant4
                        .slice()
                        .reverse()
                        .map(t => (
                            <ToothContainer
                                key={t.toothId}
                                tooth={t}
                                toothImageSrc={toothImageForId(t.toothId)}
                                activeIndicatorId={activeIndicatorId}
                                onSurfaceUpdate={updateSurface}
                                onToothIndicatorToggle={toggleToothIndicator}
                            />
                        ))}
                    {quadrant3.map(t => (
                        <ToothContainer
                            key={t.toothId}
                            tooth={t}
                            toothImageSrc={toothImageForId(t.toothId)}
                            activeIndicatorId={activeIndicatorId}
                            onSurfaceUpdate={updateSurface}
                            onToothIndicatorToggle={toggleToothIndicator}
                        />
                    ))}
                </div>

                <div style={{ marginTop: 16, textAlign: 'right' }}>
                    <button type="button" onClick={handleSaveClick}>
                        Save / Export JSON
                    </button>
                </div>
            </div>
        </div>
    );
};
