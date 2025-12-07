// src/features/patient/pages/OdontogramPage.tsx
import React from 'react';
import { Box, Paper } from '@mui/material';
import { OdontogramChart } from './OdontogramChart';

export const OdontogramPage: React.FC = () => {
    return (

        // <div className="card">
        //     <h5 className="card-header">Odontogram Chart</h5>
        //     <div className="card-body">

        //     <div className="error"></div>
        //     </div>

        //     <div className="card-body">
        //         <form action="">
        //             <div className="row">
        //                 <div className="mt-4">
        //                     <button aria-label='Click me' type="submit" className="btn btn-primary me-2">Save changes</button>
        //                     <button aria-label='Click me' type="reset" className="btn btn-outline-secondary">Discard</button>
        //                 </div>
        //             </div>
        //         </form>
        //     </div>
        // </div>
        <Box sx={{ p: 2 }}>
            <Paper sx={{ p: 2 }}>
                <OdontogramChart />
            </Paper>
        </Box>

    )
}
