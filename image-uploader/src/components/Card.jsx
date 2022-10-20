import Card from 'react-bootstrap/Card';
import UploadBox from "./UploadBox";
import Button from 'react-bootstrap/Button'

function CustomCard() {
  return (
    <Card className="upload-card p-3">
      <Card.Body>
      <h3>Upload your image</h3>
      File should be Jpeg, Png...
      <UploadBox />
      </Card.Body>
      <p className="instruction">Or</p>
      <Button className="upload-btn" size="sm" variant="primary">Choose a file</Button>
    </Card>
  );
}

export default CustomCard;