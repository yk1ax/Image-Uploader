import React from "react";

export default function UploadBox(props) {

  function fileDropHandler(ev) {
    console.log('File dropped');

    // Prevent default behavior (Prevent file from being opened)
    ev.preventDefault();
    ev.target.classList.remove("file-drag");

    if (ev.dataTransfer.items) {
      // Use DataTransferItemList interface to access the file(s)
      const item = ev.dataTransfer.items[0];
      if (item.kind === 'file') {
        const file = item.getAsFile();
        props.handleUpload(file);
      }
    } else {
      // Use DataTransfer interface to access the file(s)
      const file = ev.dataTransfer.files[0];
      props.handleUpload(file);
    }
  }

  function dragOverHandler(ev) {

    // Prevent default behavior (Prevent file from being opened)
    ev.preventDefault();
  }

  function dragEnterHandler(ev) {
    ev.target.classList.add("file-drag");
  }

  function dragLeaveHandler(ev) {
    ev.target.classList.remove("file-drag");
  }
  
  return (
    <div className="upload-box" onDrop={fileDropHandler} onDragOver={dragOverHandler} onDragEnter={dragEnterHandler} onDragLeave={dragLeaveHandler} >
      <img src="image.svg" alt="" />
      <p className="instruction">Drag & Drop your image here</p>
    </div>
  );
}
