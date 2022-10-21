import { useState } from "react";
import Card from 'react-bootstrap/Card';
import UploadCard from "./UploadCard";
import UploadingCard from "./UploadingCard"
import UploadedCard from "./UploadedCard";

function CustomCard() {

  const [uploading, setUploading] = useState(true);
  const [uploaded, setUploaded] = useState(false);
  return (
    uploading ?
      <UploadingCard />
      :
      uploaded ?
        <UploadedCard />
        :
        <UploadCard />
  );
}

export default CustomCard;