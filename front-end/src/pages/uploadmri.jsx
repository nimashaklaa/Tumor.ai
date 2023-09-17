import React from 'react'
import InputFileUpload from '../components/mrisection/fileupload'
import './uploadmri.css'
import { Newlogo} from '../assets/index';
import DropFileInput from '../components/drop-file-input/DropFileInput';
import { Button } from '@mui/base/Button';





export const Uploadmri = () => {
    const onFileChange = (files) => {
        console.log(files);
    }
  return (
    <>
    <img src={Newlogo} alt='newlogo' className='newlogo-1' />
    <div className='white-box-1'>
    <div className='fileup-1'><InputFileUpload /></div>
    <DropFileInput
                onFileChange={(files) => onFileChange(files)}
            />
    <p id='uploadmri-1'>Brain Tumor Detection</p>
    </div>
    <Button className='submit-1'>Submit</Button>
    <p className='top-txt-1'>Upload MRI Image</p>
    </>
  )
}

