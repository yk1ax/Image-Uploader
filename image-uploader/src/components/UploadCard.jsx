import React, { useState } from "react";
import DuringUploadCard from "./DuringUploadCard";
import { submitImage } from "../requests/requests"
import BeforeUploadCard from "./BeforeUploadCard";

export default function UploadCard(props) {

    const [uploading, setUploading] = useState(false);

    function onStartUpload() {
        setUploading(true);
    }

    function onCompleteUpload(name) {
        props.onUpload(name);
        setUploading(false);
    }

    function handleUpload(imageData) {
        if (imageData) {
            onStartUpload();
            submitImage(imageData, () => { onCompleteUpload(imageData.name) });
        } else {
            console.log("Not uploaded");
        }
    }

    return (
        uploading ?
            <DuringUploadCard />
            :
            <BeforeUploadCard handleUpload={handleUpload} />
    );
}
