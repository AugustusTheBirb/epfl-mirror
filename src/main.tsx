import React from "react";
import ReactDOM from "react-dom/client";
import App from "./containers/App/App.tsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop.tsx";
import './index.css';
import './components/ImageCaption/imageCaption.css';


import Homepage from "./containers/Homepage/homepage_2.tsx";

import ProjectHome from "./containers/Project/ProjectHome.tsx";
import Project_description from "./containers/Project/Project_description/project_description.tsx";
import ProofOfConcept from "./containers/Project/Proofofconcept/proofofconcept.tsx";
import BurnTest from "./containers/Project/Burntest/burntest.tsx";
import Contribution from "./containers/Project/Contribution/contribution.tsx";
import EngApp from "./containers/Project/Eng_App/eng_app.tsx";
import WildfireHeadline from "./containers/Project/Wildfireheadlines/wildfireheadline.tsx";


import { DronePage } from "./containers/Drone/dronepage.tsx";
import HardwareSection from "./containers/Drone/hardware.tsx";
import ModelingSection from "./containers/Drone/modelingdrone.tsx";
import SoftwareSection from "./containers/Drone/software.tsx";

import { EntrepreneurshipHome } from "./containers/Entrepreneurship/EntrepreneurshipHome.tsx";
import BusinessStrategy from "./containers/Entrepreneurship/business.tsx";
import { HumanPracticesPage }  from "./containers/HumanPractices/HumanPracticesPage.tsx";

import SafetyHome from "./containers/Safety/SafetyHome.tsx";
import SafetyDetails from "./containers/Safety/SafetyDetails.tsx";

import TeamHome from "./containers/Team/TeamHome.tsx";
import Roster from "./containers/Team/roster.tsx";
import Attributions from "./containers/Team/attribution.tsx";
import Awards from "./containers/Awards/awards.tsx";


import ProjectDescrip from "./containers/Project/Overview/project.tsx";
import  EducationPage  from "./containers/HumanPractices/Education/educationpage.tsx";
import { IntegratedHumanPractices } from "./containers/HumanPractices/Integrated/integratedhp.tsx";
import  MeetingsPage  from "./containers/HumanPractices/MeetingsPage/MeetingsPage.tsx";
import  Sustainability  from "./containers/HumanPractices/sustainability.tsx";

/* ==== Wetlab pages ==== */
import WetlabHome from "./containers/Wetlab/wetlabhome.tsx";          // Overview (index)
import WetlabPOV from "./containers/Wetlab/wetlabdesign.tsx";            // Overview page
import WetlabExperiments from "./containers/Wetlab/experiments.tsx";
import WetlabProtocols from "./containers/Wetlab/protocol.tsx";
import WetlabParts from "./containers/Wetlab/parts.tsx";
import WetlabNotebook from "./containers/Wetlab/notebook.tsx";
import WetlabResults from "./containers/Wetlab/results.tsx";


declare const __APP_BASE__: string;

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter basename={__APP_BASE__.replace(/\/$/, "")}>
      <ScrollToTop />
      <Routes>

       

        <Route path="/" element={<App />}>
          
          <Route index element={<Homepage />} />
          
          <Route path="project" element={<ProjectHome />} />
          <Route path="projectdescription" element={<Project_description/>}/>
          <Route path="proofofconcept" element={<ProofOfConcept/>} />
          <Route path="measurement" element={<BurnTest/>}/>
          <Route path="contribution" element={<Contribution/>} />
          <Route path="engineering" element={<EngApp/>} />
          <Route path="wildfireheadlines" element={<WildfireHeadline/>} />

          {/* ==== Wetlab pages ==== */}
          <Route path="wetlab" element={<WetlabHome />} />
          <Route path="design" element={<WetlabPOV />} />
          <Route path="experiments" element={<WetlabExperiments />} />
          <Route path="protocols" element={<WetlabProtocols />} />
          <Route path="parts" element={<WetlabParts />} />
          <Route path="notebook" element={<WetlabNotebook />} />
          <Route path="results" element={<WetlabResults />} />

          {/* ==== Drone pages ==== */}
          <Route path="drone" element={<DronePage />} />
          <Route path="hardware" element={<HardwareSection />} />
          <Route path="modeling" element={<ModelingSection />} />
          <Route path="software" element={<SoftwareSection/>}/>

          {/* ==== Entrepreneurship pages ==== */}
          <Route path="entrepreneurshiphome" element={<EntrepreneurshipHome />} />
          <Route path="entrepreneurship" element={<BusinessStrategy />} />

          {/* ==== Human Practices pages ==== */}
          <Route path="human-practices" element={<HumanPracticesPage />} />
          <Route path="education" element={<EducationPage />} />
          <Route path="integratedhumanpractice" element={<IntegratedHumanPractices />} />
          <Route path="meetings" element={<MeetingsPage />} />
          <Route path="sustainability" element={<Sustainability />} />

          {/* ==== Safety pages ==== */}
          <Route path="safetyhome" element={<SafetyHome />} />
          <Route path="safety" element={<SafetyDetails />} />

          {/* ==== Team pages ==== */}
          <Route path="team" element={<TeamHome />} />
          <Route path="roster" element={<Roster />} />
          <Route path="attributions" element={<Attributions />} />
          <Route path="awards" element={<Awards />} />

          <Route path="project-description" element={<ProjectDescrip />} />
          
          </Route>
        
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
