import { useState } from "react";
import UploadCard from "./UploadCard";
import UploadedCard from "./UploadedCard";

export default function CustomCard() {

  const [uploaded, setUploaded] = useState(false);
  const [fileName, setFileName] = useState("");

  function onUpload(name) {
    setFileName(name);
    setUploaded(true);
  }

  return (
    uploaded ?
      <UploadedCard fileName={fileName} />
      :
      <UploadCard onUpload={onUpload} />
  );
}
