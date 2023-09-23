import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import DropFileInput from '../components/drop-file-input/DropFileInput';
import { Button } from '@mui/base/Button';
import InputFileUpload from '../components/mrisection/fileupload';

function Braintumor() {
  const containerStyle = {
    backgroundColor: '#F3F3FD',
    width: '100%',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundSize: '100% 100%',
    backgroundImage:
      'linear-gradient(-45deg, yellow 0%, yellow 25%, yellow 51%, #ff357f 100%)',
    WebkitAnimation: 'AnimateBG 20s ease infinite',
    animation: 'AnimateBG 20s ease infinite',
  };
  const colStyle1 = {
    fontFamily: 'Montserrat',
    fontSize: '46px',
    fontStyle: 'normal',
    fontWeight: '800',
    lineHeight: 'normal',
    zIndex: '2000',
    background: 'linear-gradient(96deg, #3A8EF6 -10.84%, #6F3AFA 196.74%)',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    color: 'white',
    padding: '15px',
    borderRadius: '5px',
    display : 'flex',
    alignItems : 'center',
    justifyContent : 'center'
  };
  const colStyle2 = {
    width: '90vw',
    fontFamily: 'Montserrat',
    fontSize: '26px',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 'normal',
    padding: '15px',
    marginLeft: 'auto',
    marginRight: 'auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  };
  
  const divstyle1 = {
    marginTop : '50px',
    width: '400px',
    height: '350px',
    alignself : 'center',
    justifyContent: 'center',
    justifySelf: 'center',
    display: 'flex',
    borderRadius : '10px',
    flexDirection: 'column',
    gap: '5px',
  };
  


  return (
    <>
    
    <Container>
      <Row>
        <Col sm={12} md={6} style={colStyle1}>
          Brain Tumor Segmentation
        </Col>
        <Col sm={12} md={6} style={colStyle2}>
          Step into the future of brain tumor segmentation with our revolutionary technology. By simply uploading a .jpeg image and clicking 'Scan,' our advanced U-Net model swiftly identifies cancer locations, offering healthcare professionals a streamlined and efficient tool for brain tumor detection.
        </Col>
      </Row>
    </Container>
     <Container style = {{display : 'flex', flexDirection : 'row', justifyItems: 'center', alignContent: 'center', justifyContent: 'center'}}>
      <div style={divstyle1}>
      <DropFileInput onFileChange={(files) => onFileChange(files)} />
      <div >
            <InputFileUpload />
            </div>
          <Button  style={{ alignSelf: 'center', borderRadius: '25px',color: 'white', fontSize: '16px', fontStyle: 'normal', width: '400px',fontWeight: '500', lineHeight: 'normal', position: 'static' }}>Submit</Button>
      </div>
     </Container>
  


    </>
  );
}

export default Braintumor;
