import { useState } from "react";
import UploadCard from "./UploadCard";
import UploadingCard from "./UploadingCard"
import UploadedCard from "./UploadedCard";

function CustomCard() {

  const [uploading, setUploading] = useState(false);
  const [uploaded, setUploaded] = useState(true);
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