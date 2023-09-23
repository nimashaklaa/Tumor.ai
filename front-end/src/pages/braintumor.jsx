import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import DropFileInput from '../components/drop-file-input/DropFileInput';
import { Button } from '@mui/base/Button';
import InputFileUpload from '../components/mrisection/fileupload';

function Braintumor() {
  const containerStyle = {
    backgroundColor: '#F3F3FD',
  };

  const colStyle1 = {
    fontFamily: 'Montserrat',
    fontSize: '24px',
    fontStyle: 'normal',
    fontWeight: '800',
    lineHeight: 'normal',
    zIndex: '2000',
    background: 'linear-gradient(96deg, #3A8EF6 -10.84%, #6F3AFA 196.74%)',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    color: 'white',
    padding: '10px',
    borderRadius: '5px',
  };

  const colStyle2 = {
    fontFamily: 'Montserrat',
    fontSize: '18px',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 'normal',
    padding: '10px',
  };

  const colStyle3 = {
    backgroundColor: 'green',
    height: '50vh',
    width: '50vw',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  };

  return (
    <>
    <Container style={containerStyle}>
      <Row>
        <Col sm={12} md={6} style={colStyle1}>
          Brain Tumor Segmentation
        </Col>
        <Col sm={12} md={6} style={colStyle2}>
          Step into the future of breast cancer segmentation with our revolutionary technology. By simply uploading a .jpeg image and clicking 'Scan,' our advanced U-Net model swiftly identifies cancer locations, offering healthcare professionals a streamlined and efficient tool for breast cancer detection.
        </Col>
      </Row>
    </Container>
    <Container>
      <Row style={{ display: 'flex' }}>
        <Col sm={6} md={3} style={{ backgroundColor: '#F3F3FD', height: '70vh', width: '50vw', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          <Row style={{ height: '40vh', width: '50vw', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <DropFileInput onFileChange={(files) => onFileChange(files)} />
          </Row>
          <Row style={{  height: '20vh', width: '50vw', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <InputFileUpload style={{  backgroundColor: 'linear-gradient(96deg, #3A8EF6 -10.84%, #6F3AFA 196.74%)'}} />
          </Row>
          <Row style={{ backgroundColor: 'blue', height: '10vh', width: '50vw', display: 'flex', alignItems: 'center', justifyContent: 'center' , alignContent: 'center', flexDirection: 'column'}}>
            <Button style={{ alignSelf: 'center', }}>Submit</Button>
          </Row>
        </Col>
        <Col sm={6} md={3} style={{ backgroundColor: 'yellow', height: '70vh', width: '50vw' ,  display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <Row style={{ backgroundColor: 'brown', height: '50vh', width: '50vw', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        
          </Row>
          <Row style={{  backgroundColor : 'purple',height: '20vh', width: '50vw', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Button>Download</Button>
            </div>
          </Row>
        </Col>
      </Row>
    </Container>
    </>
  );
}

export default Braintumor;
