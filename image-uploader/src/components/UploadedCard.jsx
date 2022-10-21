import React from "react";
import Card from 'react-bootstrap/Card';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Button from 'react-bootstrap/Button';


export default function UploadedCard() {
    const imgSrc = "https://picsum.photos/400/300";
    return (
        <Card className="card p-3">
            <Card.Body>
                <CheckCircleIcon className="done-icon" />
                <h3>Uploaded Successfully!</h3>
                <img className="uploaded-img" src={imgSrc} alt="" />
                <div className="copy-link">
                    <input type="text" readOnly value={imgSrc} />
                    <Button style={{marginLeft: "auto"}} >Copy link</Button>
                </div>
            </Card.Body>
        </Card>
    );
}