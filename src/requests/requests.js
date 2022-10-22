import axios from "axios";

const URL = "http://localhost:3001";

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
