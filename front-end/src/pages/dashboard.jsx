import React from "react";
import "./dashboard.css";
import {Link} from 'react-router-dom'
import Navy from '../assets/Navy.png';
import { Rectangle1224 } from "../assets/dashboard";
import { Rectangle1215 } from "../assets/dashboard";
import { Rectangle1216 } from "../assets/dashboard";
import { image18 } from "../assets/dashboard";
import { image6 } from "../assets/dashboard";
import { image3 } from "../assets/dashboard";
import { image19 } from "../assets/dashboard";
import DetectBrainTumors from "../components/dashboard/detectBrainTumors";


import QAForum from "../components/dashboard/QAForum";
import ViewPastReport from "../components/dashboard/ViewPastReport";

export const Dashboard = () => {
 

  return (
    <div className="dashboard">
   
     
          <div className="rectangle" />
          <Link to="/contact" className="text-wrapper">Log out</Link>
          <Link to ="/aboutus" className="text-wrapper-2">Profile</Link>
          <Link to="/" className="text-wrapper-3">Dashboard</Link>
          <Link to="/aboutus" className="text-wrapper-4">Home</Link>
          <div className="group">
            <div className="overlap-group">
              <p className="tumor-ai">
                <span className="span">Tumor</span>
                <span className="text-wrapper-5">.ai</span>
              </p>
              <img className="navy-modern-AI" alt="Navy modern AI" src={Navy} />
            </div>
          </div>
          <img className="image" alt="Image" src={ image18 } />
          <img className="img" alt="Image" src={ image3 } />
          <img className="image-2" alt="Image" src={ image6 } />
          <img className="image-3" alt="Image" src={ image19 } />
        
        
      <ViewPastReport/>
        <DetectBrainTumors/>
        <QAForum/>
        <div className="text-wrapper-8">Dashboard</div>
     
    </div>
  );
};

 