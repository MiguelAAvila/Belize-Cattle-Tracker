import React from "react";
import { DataGrid } from '@mui/x-data-grid';
import { Card, Typography } from '@material-ui/core'

const columns = [
    { field: 'id', headerName: 'Cattle ID', type: 'number', width: 100 },
    { field: 'farmer', headerName: 'Farmer', width: 150 },
    { field: 'breed', headerName: 'Breed', width: 150 },
    { field: 'gender', headerName: 'Gender', width: 100 },
    { field: 'weight', headerName: 'Weight (lbs)', type: 'number', width: 100 },
    { field: 'antibio', headerName: 'Antibiotics', width: 150 },
    { field: 'dna', headerName: 'DNA', width: 100 },
    { field: 'tag', headerName: 'Tag', type: 'number', width: 100 },
    { field: 'location', headerName: 'Location', width: 220 },
    { field: 'hIssues', headerName: 'Health Issues', width: 220 },
    { field: 'rearType', headerName: 'Rearing Type', width: 150 },
    { field: 'reproStatus', headerName: 'Reproduction Status', width: 150 },
];

const rows = [
    { id: 1, farmer: "Bob Ross", breed: "Brahma", gender: "Male" }
];

export default function DataTable() {
    return (
        <div className="createInfo" style={{ marginTop: '30px' }}>
            <Card style={{ maxWidth: 1050, height: "auto", padding: "20px 5px", margin: "0 auto", backgroundColor: "unset" }}>
                <Typography gutterBottom variant="h4" align="center">
                    Birth Information Reports
                </Typography>
                <DataGrid
                    style={{ maxWidth: 1050, height: 600, padding: "20px 5px", margin: "0 auto", border: "none", paddingTop: 0 }}
                    rows={rows}
                    columns={columns}
                    pageSize={10}
                    rowsPerPageOptions={[10]}
                />
            </Card>

        </div>
    );
}