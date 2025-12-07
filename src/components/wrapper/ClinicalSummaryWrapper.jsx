import React from 'react'
import { Link, useLocation } from 'react-router-dom';

const navData = [
    { link: '/clinical-screening', name: 'Screening', icon: 'bx bx-user' },
    { link: '/clinical/odontogram', name: 'Odontogram', icon: 'bx bx-alt' },
    { link: '/clinical/periodental', name: 'Periodental', icon: 'bx bx-dna' },
    { link: '/clinical/progress-notes', name: 'Progress Notes', icon: 'bx bx-notepad' },
    { link: '/clinical/treatment-plan', name: 'Treatment Plan', icon: 'bx bx-clipboard' },
    { link: '/clinical/procedures', name: 'Procedures', icon: 'bx bx-task' },
    { link: '/clinical/prescriptions', name: 'Prescriptions', icon: 'bx bx-capsule' }
];
const MenuItem = (item, index) => {
    const location = useLocation();
    const isActive = location.pathname === item.link;
    return (
        <li key={index} className="nav-item">
            <Link className={`nav-link ${isActive ? 'active' : ''}`} to={item.link} aria-label={`Go to ${item.ariaLabel}`}><i className={item.icon}></i>{item.name}</Link>
        </li>
    )
};
export const ClinicalSummaryWrapper = ({ title, children }) => {
    return (
        <>
            <h4 className="py-3 mb-4"><span className="text-muted fw-light">Clinical /</span> {title}</h4>

            <div className="row">
                <div className="col-md-12">
                    <ul className="nav nav-pills flex-column flex-md-row mb-3">
                        {navData.map(MenuItem)}
                    </ul>
                    {children}
                </div>
            </div>
        </>
    )
}
