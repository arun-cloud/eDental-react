// src/odontogram/IndicatorMenu.tsx

import React, { useState } from "react";
import { useEffect, useRef } from "react";

import { INDICATOR_GROUPS, INDICATORS } from "./indicators";

export const IndicatorMenu = ({
    activeIndicatorId,
    onIndicatorSelect,
}: {
    activeIndicatorId: string | null;
    onIndicatorSelect: (id: string) => void;
}) => {
    const [openMenu, setOpenMenu] = useState<string | null>(null);

    const toggleMenu = (id: string) => {
        setOpenMenu(prev => (prev === id ? null : id));
    };
    const menuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
                setOpenMenu(null);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);



    return (
        <div className="indicator-menu" ref={menuRef} style={{ marginBottom: '20px' }}>
            {INDICATOR_GROUPS.map(group => (
                <div key={group.id} className="menu-item">
                    <button type="button"
                        className={`btn btn-primary ${openMenu === group.id ? "active" : ""}`}
                        onClick={() => toggleMenu(group.id)}
                        title={group.name}
                        style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
                    >
                        <i className={group.icon}></i>
                        <span>{group.name}</span>
                    </button>

                    {openMenu === group.id && (
                        <div className="menu-panel">
                            <div className="panel-header">{group.name}</div>

                            <div className="panel-grid">
                                {group.children.map(id => {
                                    const ind = INDICATORS.find(i => i.id === id)!;
                                    return (
                                        <button
                                            key={ind.id}
                                            className={`panel-item ${activeIndicatorId === ind.id ? "selected" : ""
                                                }`}
                                            onClick={() => {
                                                onIndicatorSelect(ind.id);
                                                setOpenMenu(null); // closes submenu
                                            }}
                                            title={ind.name}
                                        >
                                            <i className={ind.icon} style={{ color: ind.color }}></i>
                                            <span>{ind.name}</span>
                                        </button>
                                    );
                                })}
                            </div>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );

};
