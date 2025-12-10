// src/odontogram/ToothSurfaceWheel.tsx
import React from 'react';
import { SurfaceName, SurfaceState } from './types';
import { getSurfaceColor, getStrokeColor } from './indicators';

type Props = {
    size?: number;
    surfaces: Record<SurfaceName, SurfaceState>;
    onSurfaceClick?: (surface: SurfaceName) => void;
};

const sliceOrder: SurfaceName[] = ['buccal', 'mesial', 'distal', 'lingual']; // 4 slices, center = occlusal

export const ToothSurfaceWheel: React.FC<Props> = ({
    size = 60,
    surfaces,
    onSurfaceClick,
}) => {
    const cx = size / 2;
    const cy = size / 2;
    const innerR = size * 0.20;
    const outerR = size * 0.40;
    const anglePerSlice = (2 * Math.PI) / 4; // 4 outer slices

    const handleClick = (s: SurfaceName) => {
        onSurfaceClick && onSurfaceClick(s);
    };

    const makeSlicePath = (index: number) => {
        const start = -Math.PI / 2 + index * anglePerSlice;
        const end = start + anglePerSlice;

        const x1o = cx + outerR * Math.cos(start);
        const y1o = cy + outerR * Math.sin(start);
        const x2o = cx + outerR * Math.cos(end);
        const y2o = cy + outerR * Math.sin(end);

        const x1i = cx + innerR * Math.cos(start);
        const y1i = cy + innerR * Math.sin(start);
        const x2i = cx + innerR * Math.cos(end);
        const y2i = cy + innerR * Math.sin(end);

        return `
      M ${x1i} ${y1i}
      L ${x1o} ${y1o}
      A ${outerR} ${outerR} 0 0 1 ${x2o} ${y2o}
      L ${x2i} ${y2i}
      A ${innerR} ${innerR} 0 0 0 ${x1i} ${y1i}
    `;
    };

    return (
        <svg width={size} height={size}>
            {sliceOrder.map((surface, idx) => {
                const state = surfaces[surface];
                return (
                    <path
                        key={surface}
                        d={makeSlicePath(idx)}
                        fill={getSurfaceColor(state.indicatorId)}
                        stroke={getStrokeColor(state.indicatorId)}
                        strokeWidth={1.3}
                        onClick={() => handleClick(surface)}
                        style={{ cursor: 'pointer' }}
                    />
                );
            })}

            {/* Occlusal center */}
            <circle
                cx={cx}
                cy={cy}
                r={innerR * 0.9}
                fill={getSurfaceColor(surfaces.occlusal.indicatorId)}
                stroke={getStrokeColor(surfaces.occlusal.indicatorId)}
                strokeWidth={1.3}
                onClick={() => handleClick('occlusal')}
                style={{ cursor: 'pointer' }}
            />
        </svg>

    );
};
