import React from "react";
import Card from 'react-bootstrap/Card';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Button from 'react-bootstrap/Button';
import { URL } from "../requests/requests";

export default function UploadedCard(props) {
    const imgSrc = URL + "/images/" + props.fileName;
    function handleClick() {
        // copy to clipboard
        navigator.clipboard.writeText(imgSrc);
    }
    return (
        <Card className="card p-3">
            <Card.Body>
                <CheckCircleIcon className="done-icon" />
                <h3>Uploaded Successfully!</h3>
                <img className="uploaded-img" src={imgSrc} alt="" />
                <div className="copy-link">
                    <input type="text" readOnly value={imgSrc} />
                    <Button onClick={handleClick} size="sm">Copy link</Button>
                </div>
            </Card.Body>
        </Card>
    );
}
