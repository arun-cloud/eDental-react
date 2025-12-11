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
        const crownY = crownCenterY;

        switch (ind.id) {
            // --- FRACTURES & PATHOLOGY ---
            case 'periapical':
                return (
                    <g key={ind.id}>
                        {apexRoots.map((p, idx) => (
                            <circle
                                key={`${ind.id}-${idx}`}
                                cx={rootApexX + p.offsetX}
                                cy={rootApexY + (p.offsetY ?? 0)}
                                r={6}
                                stroke={ind.color}
                                fill="none"
                                strokeWidth={2}
                            />
                        ))}
                    </g>
                );

            case 'crown-fracture':
                return (
                    <path
                        key={ind.id}
                        d={`M ${centerX - 14} ${crownY - 8} L ${centerX - 4} ${crownY + 6} L ${centerX + 4} ${crownY - 6} L ${centerX + 14} ${crownY + 8}`}
                        stroke={ind.color}
                        strokeWidth={2}
                        fill="none"
                    />
                );

            case 'root-fracture':
                const rfY = rootApexY + (rootDirection * (toothHeight * 0.4));
                return (
                    <path
                        key={ind.id}
                        d={`M ${centerX - 10} ${rfY} L ${centerX + 2} ${rfY + (rootDirection * 6)} L ${centerX + 10} ${rfY - (rootDirection * 2)}`}
                        stroke={ind.color}
                        strokeWidth={2}
                        fill="none"
                    />
                );

            // --- RCT GROUP ---
            case 'rct':
            case 'incomplete-rct':
            case 'canal-fill':
            case 'improper-rct':
                const isDashed = ind.id === 'incomplete-rct';
                const isWarning = ind.id === 'improper-rct';
                return (
                    <g key={ind.id}>
                        {apexRoots.map((root, i) => {
                            const rX = rootApexX + root.offsetX;
                            const rY = rootApexY + (root.offsetY ?? 0);
                            return (
                                <line
                                    key={`${ind.id}-${i}`}
                                    x1={rX} y1={rY}
                                    x2={centerX} y2={crownY}
                                    stroke={ind.color}
                                    strokeWidth={isWarning ? 3 : 2}
                                    strokeDasharray={isDashed ? "5,3" : undefined}
                                    strokeLinecap="round"
                                />
                            );
                        })}
                        {isWarning && (
                            <text
                                x={centerX + 8}
                                y={rootApexY + rootDirection * (toothHeight * 0.3)}
                                fill={ind.color}
                                fontSize="16"
                                fontWeight="bold"
                            >!</text>
                        )}
                    </g>
                );

            // --- IMPLANT ---
            case 'implant':
                const screwLen = toothHeight * 0.55;
                const screwStep = screwLen / 6;
                return (
                    <g key={ind.id}>
                        {/* Main post */}
                        <line
                            x1={centerX} y1={rootApexY}
                            x2={centerX} y2={rootApexY + rootDirection * screwLen}
                            stroke={ind.color}
                            strokeWidth={6}
                            strokeLinecap="square"
                        />
                        {/* Threads */}
                        {[1, 2, 3, 4, 5].map(i => (
                            <line
                                key={i}
                                x1={centerX - 5}
                                y1={rootApexY + rootDirection * (i * screwStep)}
                                x2={centerX + 5}
                                y2={rootApexY + rootDirection * (i * screwStep)}
                                stroke={ind.color}
                                strokeWidth={2}
                            />
                        ))}
                    </g>
                );

            // --- MISSING ---
            case 'missing-noneed':
            case 'missing-need':
                return (
                    <g key={ind.id}>
                        <line
                            x1={toothImageX} y1={toothImageY}
                            x2={toothImageX + toothWidth} y2={toothImageY + toothHeight}
                            stroke={ind.color}
                            strokeWidth={3}
                            opacity={0.8}
                        />
                        <line
                            x1={toothImageX + toothWidth} y1={toothImageY}
                            x2={toothImageX} y2={toothImageY + toothHeight}
                            stroke={ind.color}
                            strokeWidth={3}
                            opacity={0.8}
                        />
                    </g>
                );

            // --- CROWNS & PROSTHETICS ---
            case 'metal-crown':
            case 'pfm-crown':
                // Draw a simple path simulating a crown cap
                const crownH = toothHeight * 0.35;
                // For Upper: Crown is at bottom of image (large Y). For Lower: Crown is at top (small Y).
                // crownCenterY is roughly center of crown.
                // We define a bounding box for the crown area.
                const cx = centerX;
                const cy = crownCenterY;
                const cw = toothWidth * 0.45;
                const ch = crownH * 0.8;
                return (
                    <g key={ind.id}>
                        <rect
                            x={cx - cw}
                            y={cy - ch}
                            width={cw * 2}
                            height={ch * 2}
                            rx={8}
                            stroke={ind.color}
                            strokeWidth={2}
                            fill={ind.id === 'metal-crown' ? ind.color : 'none'}
                            fillOpacity={ind.id === 'metal-crown' ? 0.3 : 0}
                        />
                        {ind.id === 'pfm-crown' && (
                            <path d={`M ${cx - cw} ${cy} L ${cx + cw} ${cy}`} stroke={ind.color} strokeWidth={1} />
                        )}
                        <text x={cx} y={cy} dy={4} textAnchor="middle" fontSize={10} fill={ind.color} fontWeight="bold">
                            {ind.id === 'metal-crown' ? 'M' : 'PFM'}
                        </text>
                    </g>
                );

            case 'bridge':
                return (
                    <g key={ind.id}>
                        <rect
                            x={centerX - 24} y={crownY - 8}
                            width={48} height={16}
                            stroke={ind.color} strokeWidth={3}
                            fill="none" rx={4}
                        />
                        <line x1={centerX - 24} y1={crownY} x2={toothImageX} y2={crownY} stroke={ind.color} strokeWidth={2} />
                        <line x1={centerX + 24} y1={crownY} x2={toothImageX + toothWidth} y2={crownY} stroke={ind.color} strokeWidth={2} />
                    </g>
                );

            case 'rpd':
                // Clasp hooks
                return (
                    <g key={ind.id}>
                        <path
                            d={`M ${centerX - 25} ${crownY - 10} Q ${centerX - 15} ${crownY} ${centerX - 25} ${crownY + 10}`}
                            stroke={ind.color} fill="none" strokeWidth={2}
                        />
                        <path
                            d={`M ${centerX + 25} ${crownY - 10} Q ${centerX + 15} ${crownY} ${centerX + 25} ${crownY + 10}`}
                            stroke={ind.color} fill="none" strokeWidth={2}
                        />
                    </g>
                );

            case 'restoration':
                // Fallback for generic restoration if exists in list but maybe not specific
                return (
                    <rect
                        key={ind.id}
                        x={centerX - 6}
                        y={crownY - 6}
                        width={12}
                        height={12}
                        fill={ind.color}
                        opacity={0.5}
                    />
                );

            // --- ERUPTION / POSITION / SOFT TISSUE ---
            case 'impacted':
                return (
                    <ellipse
                        key={ind.id}
                        cx={centerX} cy={toothImageY + toothHeight / 2}
                        rx={toothWidth * 0.4} ry={toothHeight * 0.4}
                        stroke={ind.color} fill="none" strokeWidth={2} strokeDasharray="4,2"
                    />
                );

            case 'partial-eruption':
                // Wavy line at "gum" level implies not fully out
                const gumY = rootApexY + rootDirection * (toothHeight * 0.7);
                return (
                    <path
                        key={ind.id}
                        d={`M ${centerX - 20} ${gumY} Q ${centerX - 10} ${gumY - 5} ${centerX} ${gumY} Q ${centerX + 10} ${gumY + 5} ${centerX + 20} ${gumY}`}
                        stroke={ind.color} strokeWidth={2} fill="none"
                    />
                );
            case 'soft-tissue':
                // Hash marks on root area
                return (
                    <g key={ind.id} opacity={0.6}>
                        <line x1={centerX - 10} y1={rootApexY + rootDirection * 20} x2={centerX} y2={rootApexY + rootDirection * 30} stroke={ind.color} strokeWidth={1} />
                        <line x1={centerX - 5} y1={rootApexY + rootDirection * 15} x2={centerX + 5} y2={rootApexY + rootDirection * 25} stroke={ind.color} strokeWidth={1} />
                        <circle cx={centerX} cy={rootApexY + rootDirection * 20} r={12} stroke={ind.color} fill="none" />
                    </g>
                );

            case 'retained-deciduous':
                return (
                    <text
                        key={ind.id}
                        x={centerX + 15} y={rootApexY + rootDirection * 15}
                        fill={ind.color} fontSize="12" fontWeight="bold"
                    >D</text>
                );

            case 'rotation':
                // Curved arrow with manual arrow head
                const rotStartX = centerX - 12;
                const rotStartY = crownY + 8;
                const rotEndX = centerX + 12;
                const rotEndY = crownY - 8;
                return (
                    <g key={ind.id}>
                        <path
                            d={`M ${rotStartX} ${rotStartY} A 12 12 0 1 1 ${rotEndX} ${rotEndY}`}
                            stroke={ind.color}
                            strokeWidth={2}
                            fill="none"
                        />
                        {/* Arrow head at end */}
                        <path
                            d={`M ${rotEndX + 2} ${rotEndY + 4} L ${rotEndX} ${rotEndY} L ${rotEndX - 4} ${rotEndY + 2}`}
                            stroke={ind.color} strokeWidth={2} fill="none"
                        />
                    </g>
                );

            case 'malposed':
                // Crossed arrows
                return (
                    <g key={ind.id}>
                        <line x1={centerX - 10} y1={crownY} x2={centerX + 10} y2={crownY} stroke={ind.color} strokeWidth={2} />
                        <line x1={centerX} y1={crownY - 10} x2={centerX} y2={crownY + 10} stroke={ind.color} strokeWidth={2} />
                        <circle cx={centerX} cy={crownY} r={14} stroke={ind.color} fill="none" strokeWidth={1} />
                    </g>
                );
            case 'extrusion':
                // Up/down arrow
                return (
                    <g key={ind.id}>
                        <line x1={centerX + 20} y1={crownY - 10} x2={centerX + 20} y2={crownY + 10} stroke={ind.color} strokeWidth={2} />
                        <path d={`M ${centerX + 17} ${crownY - 7} L ${centerX + 20} ${crownY - 12} L ${centerX + 23} ${crownY - 7}`} fill={ind.color} />
                        <path d={`M ${centerX + 17} ${crownY + 7} L ${centerX + 20} ${crownY + 12} L ${centerX + 23} ${crownY + 7}`} fill={ind.color} />
                    </g>
                );

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
