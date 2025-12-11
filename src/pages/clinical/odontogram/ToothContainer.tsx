// src/odontogram/ToothContainer.tsx
import React from 'react';
import { SurfaceName, ToothState, ToothLayout } from './types';
import { ToothSurfaceWheel } from './ToothSurfaceWheel';
import { Indicator, indicatorById } from './indicators';


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




    // Position calculations
    const toothLayouts = new Map<number, ToothLayout>([
        // =========================
        // UPPER ARCH (11–28)
        // =========================
        [11, { arch: 'upper', toothImageX: 15, toothImageY: 0, wheelX: 25, wheelY: 54, toothWidth: 80, toothHeight: 75, apex: { roots: [{ offsetX: -10, offsetY: 4 }] } }],
        [12, { arch: 'upper', toothImageX: 15, toothImageY: 0, wheelX: 25, wheelY: 54, toothWidth: 80, toothHeight: 75, apex: { roots: [{ offsetX: -14, offsetY: 0 }] } }],
        [13, { arch: 'upper', toothImageX: 15, toothImageY: 0, wheelX: 25, wheelY: 54, toothWidth: 80, toothHeight: 75, apex: { roots: [{ offsetX: -10, offsetY: 0 }] } }],
        [14, { arch: 'upper', toothImageX: 15, toothImageY: 0, wheelX: 25, wheelY: 54, toothWidth: 80, toothHeight: 75, apex: { roots: [{ offsetX: -7, offsetY: 1 }] } }],
        [15, { arch: 'upper', toothImageX: 15, toothImageY: 0, wheelX: 25, wheelY: 54, toothWidth: 80, toothHeight: 75, apex: { roots: [{ offsetX: -8, offsetY: 2 }] } }],
        [16, { arch: 'upper', toothImageX: 15, toothImageY: 0, wheelX: 25, wheelY: 54, toothWidth: 80, toothHeight: 75, apex: { roots: [{ offsetX: -7, offsetY: 3 }] } }],
        [17, { arch: 'upper', toothImageX: 15, toothImageY: 0, wheelX: 25, wheelY: 54, toothWidth: 80, toothHeight: 75, apex: { roots: [{ offsetX: -8, offsetY: 4 }] } }],
        [18, { arch: 'upper', toothImageX: 15, toothImageY: 0, wheelX: 25, wheelY: 54, toothWidth: 80, toothHeight: 75, apex: { roots: [{ offsetX: -10, offsetY: 5 }] } }],

        [21, { arch: 'upper', toothImageX: 15, toothImageY: 0, wheelX: 25, wheelY: 54, toothWidth: 80, toothHeight: 75, apex: { roots: [{ offsetX: 7, offsetY: 3 }] } }],
        [22, { arch: 'upper', toothImageX: 15, toothImageY: 0, wheelX: 25, wheelY: 54, toothWidth: 80, toothHeight: 75, apex: { roots: [{ offsetX: 7, offsetY: 4 }] } }],
        [23, { arch: 'upper', toothImageX: 15, toothImageY: 0, wheelX: 25, wheelY: 54, toothWidth: 80, toothHeight: 75, apex: { roots: [{ offsetX: 7, offsetY: 3 }] } }],
        [24, { arch: 'upper', toothImageX: 13, toothImageY: 6, wheelX: 25, wheelY: 54, toothWidth: 80, toothHeight: 75, apex: { roots: [{ offsetX: 4, offsetY: 3 }] } }],
        [25, { arch: 'upper', toothImageX: 15, toothImageY: 0, wheelX: 25, wheelY: 54, toothWidth: 80, toothHeight: 75, apex: { roots: [{ offsetX: 4, offsetY: 3 }] } }],
        [26, { arch: 'upper', toothImageX: 15, toothImageY: 0, wheelX: 25, wheelY: 54, toothWidth: 80, toothHeight: 75, apex: { roots: [{ offsetX: 10, offsetY: 0 }] } }],
        [27, { arch: 'upper', toothImageX: 15, toothImageY: 0, wheelX: 25, wheelY: 54, toothWidth: 80, toothHeight: 75, apex: { roots: [{ offsetX: 10, offsetY: 4 }] } }],
        [28, { arch: 'upper', toothImageX: 15, toothImageY: 0, wheelX: 25, wheelY: 54, toothWidth: 80, toothHeight: 75, apex: { roots: [{ offsetX: 15, offsetY: 4 }] } }],

        // =========================
        // LOWER ARCH (31–48)
        // =========================
        [31, { arch: 'lower', toothImageX: 15, toothImageY: 40, wheelX: 25, wheelY: 0, toothWidth: 80, toothHeight: 75, apex: { roots: [{ offsetX: 0, offsetY: 0 }] } }],
        [32, { arch: 'lower', toothImageX: 15, toothImageY: 50, wheelX: 25, wheelY: 0, toothWidth: 80, toothHeight: 75, apex: { roots: [{ offsetX: 0, offsetY: -3 }] } }],
        [33, { arch: 'lower', toothImageX: 15, toothImageY: 50, wheelX: 25, wheelY: 0, toothWidth: 80, toothHeight: 75, apex: { roots: [{ offsetX: 9, offsetY: -2 }] } }],
        [34, { arch: 'lower', toothImageX: 15, toothImageY: 45, wheelX: 25, wheelY: 0, toothWidth: 80, toothHeight: 75, apex: { roots: [{ offsetX: 9, offsetY: -2 }] } }],
        [35, { arch: 'lower', toothImageX: 15, toothImageY: 40, wheelX: 25, wheelY: 0, toothWidth: 80, toothHeight: 75, apex: { roots: [{ offsetX: 5, offsetY: -2 }] } }],
        [36, { arch: 'lower', toothImageX: 18, toothImageY: 38, wheelX: 25, wheelY: 0, toothWidth: 80, toothHeight: 75, apex: { roots: [{ offsetX: 25, offsetY: -2 }] } }],
        [37, { arch: 'lower', toothImageX: 19, toothImageY: 38, wheelX: 25, wheelY: 0, toothWidth: 80, toothHeight: 75, apex: { roots: [{ offsetX: 0, offsetY: 0 }] } }],
        [38, { arch: 'lower', toothImageX: 20, toothImageY: 38, wheelX: 25, wheelY: 0, toothWidth: 80, toothHeight: 75, apex: { roots: [{ offsetX: 2, offsetY: -4 }] } }],

        [41, { arch: 'lower', toothImageX: 15, toothImageY: 50, wheelX: 25, wheelY: 0, toothWidth: 80, toothHeight: 75, apex: { roots: [{ offsetX: 0, offsetY: -3 }] } }],
        [42, { arch: 'lower', toothImageX: 15, toothImageY: 50, wheelX: 25, wheelY: 0, toothWidth: 80, toothHeight: 75, apex: { roots: [{ offsetX: 0, offsetY: -4 }] } }],
        [43, { arch: 'lower', toothImageX: 15, toothImageY: 50, wheelX: 25, wheelY: 0, toothWidth: 80, toothHeight: 75, apex: { roots: [{ offsetX: -6, offsetY: -4 }] } }],
        [44, { arch: 'lower', toothImageX: 15, toothImageY: 50, wheelX: 25, wheelY: 0, toothWidth: 80, toothHeight: 75, apex: { roots: [{ offsetX: -6, offsetY: -5 }] } }],
        [45, { arch: 'lower', toothImageX: 15, toothImageY: 45, wheelX: 25, wheelY: 0, toothWidth: 80, toothHeight: 75, apex: { roots: [{ offsetX: -3, offsetY: -8 }] } }],
        [46, { arch: 'lower', toothImageX: 12, toothImageY: 43, wheelX: 25, wheelY: 0, toothWidth: 80, toothHeight: 75, apex: { roots: [{ offsetX: 8, offsetY: -7 }] } }],
        [47, { arch: 'lower', toothImageX: 12, toothImageY: 38, wheelX: 25, wheelY: 0, toothWidth: 80, toothHeight: 75, apex: { roots: [{ offsetX: 0, offsetY: -3 }] } }],
        [48, { arch: 'lower', toothImageX: 8, toothImageY: 37, wheelX: 25, wheelY: 0, toothWidth: 80, toothHeight: 75, apex: { roots: [{ offsetX: -5, offsetY: 0 }] } }],
    ]);

    const DEFAULT_TOOTH_LAYOUT: ToothLayout = {
        arch: 'upper', // safe default, won't crash math
        toothImageX: 0,
        toothImageY: 0,
        wheelX: 0,
        wheelY: 0,
        toothWidth: 80,
        toothHeight: 75,
    };



    const currentToothLayout = toothLayouts.get(tooth.toothId) || DEFAULT_TOOTH_LAYOUT;
    // Fallback for unknown toothId

    if (!currentToothLayout) {
        throw new Error(`ToothLayout not found for toothId ${tooth.toothId}`);
    }

    const { arch, toothImageX, toothImageY, wheelX, wheelY, toothWidth, toothHeight, crown, root, apex } = currentToothLayout;

    const isUpperTooth = currentToothLayout.arch === 'upper';

    // 1) Basic vertical limits of the tooth image
    const toothTopY = toothImageY;                   // top edge of PNG
    const toothBottomY = toothImageY + toothHeight;  // bottom edge of PNG

    // 2) Horizontal center (tooth axis)
    const centerX = toothImageX + toothWidth / 2;

    // 3) Crown anchors
    const crownTopRatio = crown?.topRatio ?? 0.0;
    const crownCenterRatio = crown?.centerRatio ?? 0.25;

    const crownTopY = toothTopY + toothHeight * crownTopRatio; // incisal / occlusal edge
    const crownCenterY = toothTopY + toothHeight * crownCenterRatio;

    // 4) Root region inside the tooth  (ratio-based)
    const midRootRatio = root?.midRatio ?? 0.6;
    const midRootY = toothTopY + toothHeight * midRootRatio;

    // 5) Root apex (tip of root, slightly outside image)
    const apexOffset = root?.apexOffset ?? 4;



    const rootDirection = root?.direction ?? (arch === 'upper' ? 1 : -1);
    const rootApexX = centerX;


    const rootApexY = arch === 'upper' ? toothTopY : toothBottomY;






    const renderToothIndicator = (ind: Indicator) => {

        const apexRoots = currentToothLayout.apex?.roots ?? [{ offsetX: 0, offsetY: 0 }];
        switch (ind.id) {
            case 'periapical':
                return apexRoots.map((p, idx) => (
                    <circle
                        key={`${ind.id}-${idx}`}
                        cx={rootApexX + p.offsetX}
                        cy={rootApexY + (p.offsetY ?? 0)}
                        r={6}
                        stroke={ind.color}
                        fill="none"
                        strokeWidth={2}
                    />
                ));


            case 'rct':
                return (
                    <line
                        key={ind.id}
                        x1={rootApexX}
                        y1={rootApexY}
                        x2={rootApexX}
                        y2={rootApexY + rootDirection * 28}
                        stroke={ind.color}
                        strokeWidth={2}
                    />
                );

            case 'implant':
                return (
                    <rect
                        key={ind.id}
                        x={rootApexX - 5}
                        y={rootApexY + rootDirection * 6}
                        width={10}
                        height={10}
                        stroke={ind.color}
                        fill="none"
                        strokeWidth={2}
                    />
                );

            case 'restoration':
                return (
                    <rect
                        key={ind.id}
                        x={rootApexX - 5}
                        y={rootApexY + rootDirection * 6}
                        width={10}
                        height={10}
                        stroke={ind.color}
                        fill="none"
                        strokeWidth={2}
                    />
                );

            case 'crown-fracture':
                return (
                    <line
                        key={ind.id}
                        x1={rootApexX}
                        y1={rootApexY}
                        x2={rootApexX}
                        y2={rootApexY + rootDirection * 28}
                        stroke={ind.color}
                        strokeWidth={2}
                    />
                )

            case 'root-fracture':
                return (
                    <line
                        key={ind.id}
                        x1={rootApexX}
                        y1={rootApexY}
                        x2={rootApexX}
                        y2={rootApexY + rootDirection * 28}
                        stroke={ind.color}
                        strokeWidth={2}
                    />
                )



            default:
                return null;
        }

    };


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
                            renderToothIndicator(ind)
                        );
                    })}
                    <text x={45} y={139}>{tooth.toothId}</text>
                </svg>

            </div>
        </div>
    );
};
