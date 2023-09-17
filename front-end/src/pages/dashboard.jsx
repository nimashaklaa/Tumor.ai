import React from "react";
import "./dashboard.css";
import {Link} from 'react-router-dom'
import Navy from '../assets/Navy.png';
import {Rectangle1217}  from "../assets/dashboard";
import { Rectangle1215 } from "../assets/dashboard";
import { Rectangle1224 } from "../assets/dashboard";
import { Rectangle1216 } from "../assets/dashboard";

import Icons from "../components/dashboard/Icons";

export const Dashboard = () => {
 return(
 
<div className="dashboard">
<Icons/>
          <div className="text-wrapperdash">Dashboard</div> 
          <div className="rectangle1" />
          <Link to='/uploadmri'>
          <img className="rectangle1217" alt="Rectangle" src={Rectangle1217}/>
          </Link>
          <div className="text-wrapper1217">Tumor Segmentation</div>
          <div className="rectangle2" />
          <Link to='/uploadimage'>
          <img className="rectangle1215" alt="Rectangle" src={Rectangle1215}/>
          </Link>
          <div className="text-wrapper1215">Breast Cancer Detection</div>
          <div className="rectangle3" />
          <Link to='/history'>
          <img className="rectangle1224" alt="Rectangle" src={Rectangle1216}/>
          </Link>
          <div className="text-wrapper1224">View Past Reports</div>
</div>

    
    
    
  );
};

export default Dashboard;





































// import React from "react";
// import "./Dashboard.css";
// import {Link} from 'react-router-dom'
// import Navy from '../assets/Navy.png';
// import {Rectangle1217}  from "../assets/dashboard";
// import { Rectangle1215 } from "../assets/dashboard";
// import { Rectangle1224 } from "../assets/dashboard";
// import { Rectangle1216 } from "../assets/dashboard";
// import { image18 } from "../assets/dashboard";
// import { image6 } from "../assets/dashboard";
// import { image3 } from "../assets/dashboard";
// import { image19 } from "../assets/dashboard";
// import DetectBrainTumors from "../components/dashboard/DetectBrainTumors";


// import "./Dashboard.css";
// import QAForum from "../components/dashboard/QAForum";
// import ViewPastReport from "../components/dashboard/ViewPastReport";
// import Icons from "../components/dashboard/Icons";

// export const Dashboard = () => {
 

  
//   return (
  
  
//     <div className="dashboard">
     
   
//           <Icons/>
//           <div className="text-wrapperdash">Dashboard</div>
//           <div className="rectangle1" />
//           <Link to='/aboutus'>
//           <img className="rectangle1217" alt="Rectangle" src={Rectangle1217}/>
//           </Link>
//           <div className="text-wrapper1217">Tumor Segmentation</div>
//           <div className="rectangle2" />
//           <Link to='/aboutus'>
//           <img className="rectangle1215" alt="Rectangle" src={Rectangle1215}/>
//           </Link>
//           <div className="text-wrapper1215">Tumor Classification</div>
//           <div className="rectangle3" />
//           <Link to='/aboutus'>
//           <img className="rectangle1224" alt="Rectangle" src={Rectangle1224}/>
//           </Link>
//           <div className="text-wrapper1224">Q & A Forum</div>
//           <div className="rectangle4" />
//           <Link to='/aboutus'>
//           <img className="rectangle1216" alt="Rectangle" src={Rectangle1216}/>
//           </Link>
//           <div className="text-wrapper1216">View Past Reports</div>
//       </div>
    
    
//   );
// };