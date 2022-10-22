import axios from "axios";

const URL = process.env.BACKEND_URL || process.env.REACT_APP_BACKEND_URL;

function submitImage(imageData, onSuccess) {
    const data = new FormData();
    data.append("image", imageData);

    axios.post(URL + "/upload", data, {
        headers: {
            'Content-Type': 'multipart/form-data'
        },
    })
    .then(response => {
        console.log(response.data)
        onSuccess();
    })
    .catch(error => console.log("Failed to upload file: " + error));
}

export { submitImage, URL };
