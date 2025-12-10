// src/odontogram/ToothContainer.tsx
import React from 'react';
import { SurfaceName, ToothState } from './types';
import { ToothSurfaceWheel } from './ToothSurfaceWheel';
import { indicatorById } from './indicators';

type Props = {
    tooth: ToothState;
    toothImageSrc: string;
    activeIndicatorId: string | null;
    onSurfaceUpdate: (toothId: number, surface: SurfaceName, indicatorId: string | null) => void;
    onToothIndicatorToggle: (toothId: number, indicatorId: string) => void;
};

export const ToothContainer: React.FC<Props> = ({
    tooth,
    toothImageSrc,
    activeIndicatorId,
    onSurfaceUpdate,
    onToothIndicatorToggle,
}) => {
    const activeIndicator = activeIndicatorId ? indicatorById[activeIndicatorId] : null;

    const handleSurfaceClick = (surface: SurfaceName) => {
        if (!activeIndicator || activeIndicator.level !== 'surface') return;
        onSurfaceUpdate(tooth.toothId, surface, activeIndicator.id);
    };

    const handleToothClick = () => {
        if (!activeIndicator || activeIndicator.level !== 'tooth') return;
        onToothIndicatorToggle(tooth.toothId, activeIndicator.id);
    };

    const wheelSize = 60;

    // Determine if tooth is upper or lower based on FDI numbering
    // Upper: 11-18, 21-28 (first digit is 1 or 2)
    // Lower: 31-38, 41-48 (first digit is 3 or 4)
    const isUpperTooth = tooth.toothId >= 11 && tooth.toothId <= 28;


    // Position calculations
    const toothLayouts = new Map<number, {
        toothImageX: number;
        toothImageY: number;
        wheelX: number;
        wheelY: number;
        toothWidth: number;
        toothHeight: number;
    }>([
        // Upper teeth (11-28)
        [11, { toothImageX: 15, toothImageY: 0, wheelX: 25, wheelY: 54, toothWidth: 80, toothHeight: 75 }],
        [12, { toothImageX: 15, toothImageY: 0, wheelX: 25, wheelY: 54, toothWidth: 80, toothHeight: 75 }],
        [13, { toothImageX: 15, toothImageY: 0, wheelX: 25, wheelY: 54, toothWidth: 80, toothHeight: 75 }],
        [14, { toothImageX: 15, toothImageY: 0, wheelX: 25, wheelY: 54, toothWidth: 80, toothHeight: 75 }],
        [15, { toothImageX: 15, toothImageY: 0, wheelX: 25, wheelY: 54, toothWidth: 80, toothHeight: 75 }],
        [16, { toothImageX: 15, toothImageY: 0, wheelX: 25, wheelY: 54, toothWidth: 80, toothHeight: 75 }],
        [17, { toothImageX: 15, toothImageY: 0, wheelX: 25, wheelY: 54, toothWidth: 80, toothHeight: 75 }],
        [18, { toothImageX: 15, toothImageY: 0, wheelX: 25, wheelY: 54, toothWidth: 80, toothHeight: 75 }],
        [21, { toothImageX: 15, toothImageY: 0, wheelX: 25, wheelY: 54, toothWidth: 80, toothHeight: 75 }],
        [22, { toothImageX: 15, toothImageY: 0, wheelX: 25, wheelY: 54, toothWidth: 80, toothHeight: 75 }],
        [23, { toothImageX: 15, toothImageY: 0, wheelX: 25, wheelY: 54, toothWidth: 80, toothHeight: 75 }],
        [24, { toothImageX: 13, toothImageY: 6, wheelX: 25, wheelY: 54, toothWidth: 80, toothHeight: 75 }],
        [25, { toothImageX: 15, toothImageY: 0, wheelX: 25, wheelY: 54, toothWidth: 80, toothHeight: 75 }],
        [26, { toothImageX: 15, toothImageY: 0, wheelX: 25, wheelY: 54, toothWidth: 80, toothHeight: 75 }],
        [27, { toothImageX: 15, toothImageY: 0, wheelX: 25, wheelY: 54, toothWidth: 80, toothHeight: 75 }],
        [28, { toothImageX: 15, toothImageY: 0, wheelX: 25, wheelY: 54, toothWidth: 80, toothHeight: 75 }],
        // Lower teeth (31-48)
        [31, { toothImageX: 15, toothImageY: 40, wheelX: 25, wheelY: 0, toothWidth: 80, toothHeight: 75 }],
        [32, { toothImageX: 15, toothImageY: 50, wheelX: 25, wheelY: 0, toothWidth: 80, toothHeight: 75 }],
        [33, { toothImageX: 15, toothImageY: 50, wheelX: 25, wheelY: 0, toothWidth: 80, toothHeight: 75 }],
        [34, { toothImageX: 15, toothImageY: 45, wheelX: 25, wheelY: 0, toothWidth: 80, toothHeight: 75 }],
        [35, { toothImageX: 15, toothImageY: 40, wheelX: 25, wheelY: 0, toothWidth: 80, toothHeight: 75 }],
        [36, { toothImageX: 18, toothImageY: 38, wheelX: 25, wheelY: 0, toothWidth: 80, toothHeight: 75 }],
        [37, { toothImageX: 19, toothImageY: 38, wheelX: 25, wheelY: 0, toothWidth: 80, toothHeight: 75 }],
        [38, { toothImageX: 20, toothImageY: 38, wheelX: 25, wheelY: 0, toothWidth: 80, toothHeight: 75 }],

        [41, { toothImageX: 15, toothImageY: 50, wheelX: 25, wheelY: 0, toothWidth: 80, toothHeight: 75 }],
        [42, { toothImageX: 15, toothImageY: 50, wheelX: 25, wheelY: 0, toothWidth: 80, toothHeight: 75 }],
        [43, { toothImageX: 15, toothImageY: 50, wheelX: 25, wheelY: 0, toothWidth: 80, toothHeight: 75 }],
        [44, { toothImageX: 15, toothImageY: 50, wheelX: 25, wheelY: 0, toothWidth: 80, toothHeight: 75 }],
        [45, { toothImageX: 15, toothImageY: 45, wheelX: 25, wheelY: 0, toothWidth: 80, toothHeight: 75 }],
        [46, { toothImageX: 12, toothImageY: 43, wheelX: 25, wheelY: 0, toothWidth: 80, toothHeight: 75 }],
        [47, { toothImageX: 12, toothImageY: 38, wheelX: 25, wheelY: 0, toothWidth: 80, toothHeight: 75 }],
        [48, { toothImageX: 8, toothImageY: 37, wheelX: 25, wheelY: 0, toothWidth: 80, toothHeight: 75 }],
    ]);

    const currentToothLayout = toothLayouts.get(tooth.toothId) || {
        toothImageX: 0, toothImageY: 0, wheelX: 0, wheelY: 0, toothWidth: 80, toothHeight: 75
    }; // Fallback for unknown toothId

    const { toothImageX, toothImageY, wheelX, wheelY, toothWidth, toothHeight } = currentToothLayout;


    return (
        <div className="tooth-wrapper">
            <div className="tooth-click-layer" onClick={handleToothClick}>
                <svg width={110} height={140}>

                    {/* tooth image at back */}
                    <image
                        href={toothImageSrc}
                        x={toothImageX}
                        y={toothImageY}
                        width={toothWidth}
                        height={toothHeight}
                        preserveAspectRatio="xMidYMid meet"
                    />


                    {/* wheel overlaid, positioned based on arch */}
                    <foreignObject x={wheelX} y={wheelY} width={wheelSize} height={wheelSize}>
                        <ToothSurfaceWheel
                            size={wheelSize}
                            surfaces={tooth.surfaces}
                            onSurfaceClick={handleSurfaceClick}
                        />
                    </foreignObject>



                    {/* tooth-level indicator overlays – simple example: small tags inside tooth */}
                    {tooth.toothIndicators.map(id => {
                        const ind = indicatorById[id];
                        return (
                            <text
                                key={id}
                                x={55}
                                y={20 + 10 * tooth.toothIndicators.indexOf(id)}
                                fontSize="8"
                                textAnchor="middle"
                                fill={ind.color}
                            >
                                *
                            </text>
                        );
                    })}
                    <text x={45} y={139}>{tooth.toothId}</text>
                </svg>

            </div>
        </div>
    );
};
