// src/odontogram/ToothContainer.tsx
import React from 'react';
import { SurfaceName, ToothState } from './types';
import { ToothSurfaceWheel } from './ToothSurfaceWheel';
import { indicatorById } from './indicatorUtils';

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

    return (
        <div className="tooth-wrapper">
            <div className="tooth-click-layer" onClick={handleToothClick}>
                <svg width={110} height={140}>

                    {/* tooth image at back */}
                    <image
                        href={toothImageSrc}
                        x={15}
                        y={0}
                        width={80}
                        height={75}
                        preserveAspectRatio="xMidYMid meet"
                    />

                    {/* wheel overlaid, snug to bottom of tooth image */}
                    <foreignObject x={25} y={54} width={wheelSize} height={wheelSize}>
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
                </svg>
            </div>
        </div>
    );
};
