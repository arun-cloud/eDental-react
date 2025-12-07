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
        acc[s] = { indicatorId: null };
        return acc;
    }, {} as ToothState['surfaces']),
    toothIndicators: [],
    treatmentPlan: null,
});

// for now, 32 teeth simple
const initialTeeth: ToothState[] = Array.from({ length: 32 }, (_, i) =>
    createEmptyTooth(i + 1)
);

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
                            [surface]: { indicatorId },
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
                buccal: t.surfaces.buccal.indicatorId,
                mesial: t.surfaces.mesial.indicatorId,
                distal: t.surfaces.distal.indicatorId,
                lingual: t.surfaces.lingual.indicatorId,
                occlusal: t.surfaces.occlusal.indicatorId,
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

    const upper = teeth.slice(0, 16);
    const lower = teeth.slice(16).slice().reverse(); // reverse visual order

    return (
        <div>
            <IndicatorMenu
                activeIndicatorId={activeIndicatorId}
                onIndicatorSelect={setActiveIndicatorId}
            />


            <div style={{ padding: '8px 12px' }}>
                <div style={{ display: 'flex', justifyContent: 'center', gap: 6, marginBottom: 16 }}>
                    {upper.map(t => (
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

                <div style={{ display: 'flex', justifyContent: 'center', gap: 6, marginTop: 12 }}>
                    {lower.map(t => (
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
