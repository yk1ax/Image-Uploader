import React from "react";
import Card from 'react-bootstrap/Card';
import LinearProgress from '@mui/material/LinearProgress';

export default function UploadingCard() {
    return (
        <Card className="card p-3">
        <Card.Body >
            <h3>Uploading...</h3>
            <LinearProgress className="mt-4" />
        </Card.Body>
        </Card>
    );
}