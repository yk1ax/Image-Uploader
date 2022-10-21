import React from "react";
import Card from 'react-bootstrap/Card';
import UploadBox from "./UploadBox";

export default function UploadCard() {
    return (
        <Card className="card p-3">
        <Card.Body>
            <h3>Upload your image</h3>
            File should be Jpeg, Png...
            <UploadBox />
            <p className="instruction">Or</p>
            <label className="custom-file-upload">
                <input type="file" accept="image/*" />
                <div className="btn btn-primary upload-btn" type="file" size="sm">
                    Choose a file
                </div>
            </label>
        </Card.Body>
        </Card>
    );
}