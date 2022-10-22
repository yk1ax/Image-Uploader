import React from "react";
import Card from 'react-bootstrap/Card';
import UploadBox from "./UploadBox";

export default function BeforeUploadCard(props) {
    function handleClick(ev) {
        if (!ev.target.files) {
            return;
        }
        const imageData = ev.target.files.item(0);
        if (imageData) {
            props.handleUpload(imageData);
        } else {
            console.log("Not uploaded");
        }
    }
    return (
        <Card className="card p-3">
            <Card.Body>
                <h3>Upload your image</h3>
                File should be Jpeg, Png...
                <UploadBox handleUpload={props.handleUpload} />
                <p className="instruction">Or</p>
                <label className="custom-file-upload">
                    <input type="file" accept="image/*" onChange={handleClick} />
                    <div className="btn btn-primary upload-btn" type="file" size="sm">
                        Choose a file
                    </div>
                </label>
            </Card.Body>
        </Card>
    );
}
