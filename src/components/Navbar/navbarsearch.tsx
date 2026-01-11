import React, { useState, useRef, useEffect } from 'react';
import { Search, X, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { title } from 'process';

const NavbarSearch = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [isLocked, setIsLocked] = useState(false); // Lock state for click
  const inputRef = useRef<HTMLInputElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  // Your website's navigation structure
  const navigationItems = [
    { title: 'Home', path: '/', keywords: ['homepage', 'main', 'landing', 'start', 'wildfire'] },
    
    // Project Section
    { title: 'Project Overview', path: '/project', keywords: ['overview', 'description', 'about', 'summary'] },
    { title: 'Project Description', path: '/projectdescription', keywords: ['details', 'description', 'explanation','wildfire problem','climate change','fire retardant pollution','environmental impact of fire retardants','sustainable firefighting','wildfire prevention','Pyronix hydrogel','biodegradable hydrogel','non-toxic fire retardant','bio-based fire retardant','wildfire drone','drone spraying system','synthetic biology hydrogel','E. coli cellulose production','yeast chitosan production','silicatein silica beads','SRSF1 fire retardant protein','cellulose chitosan hydrogel','cross linking','hydrogel structure','char formation','insulating layer','microbial hydrogel production','biomanufacturing fire retardant','forest fire protection','hydrogel composition','hydrogel polymers','environmental firefighting solutions','hydrogel applications','future improvements Pyronix','human practice','education outreach synthetic biology','biotech', 'bioengineering', 'fire safety', 'forest management', 'sustainability', 'green technology', 'innovation', 'environment', 'ecology', 'biomaterials', 'fire protection', 'firefighting', 'fire control', 'fire suppression', 'wildfire solution', 'hydrogel innovation', 'biological solution', 'nature-based solution', 'ecosystem protection', 'forest conservation'] },
    { title: 'Proof of Concept', path: '/proofofconcept', keywords: ['proof', 'concept', 'validation', 'testing', 'hydrogel function','fire retardant hydrogel','microbial hydrogel production','sprayable hydrogel','drone-compatible hydrogel','Pyronix hydrogel functions','sustainable firefighting material','bioengineered fire retardant','viscosity measurement','rheology test','shear stress vs viscosity','cross fluid model','burn test wood samples','fire retardancy test','infrared imaging fire test','cellulose chitosan silica SRSF1 formulation','char formation analysis','silicatein transformation E. coli','silicatein plasmid design','ompA tag','cellulose binding domain (CBD)','silica production by bacteria','fluorescence microscopy silica detection','rhodamine 123 silica assay','yeast chitosan synthesis','Rho1 transcription factor','chitosan deacetylase CDA','Amylomyces rouxii enzyme','FACS chitin chitosan analysis','SRSF1 and SRPK1 production','protein phosphorylation','western blot verification','chromatography purification','microbial hydrogel optimization','enhanced fire retardant proteins','hydrogel composition improvement','compatibility with firefighting equipment','drone spraying optimization','GMO inactivation safety','microbial factory design','synthetic biology automation','biofabrication of hydrogels','next-generation wildfire prevention'] },
    { 
      title: 'Burn Measurement', 
      path: '/measurement', 
      keywords: [
        'burn', 'test', 'fire', 'flame', 'testing',
        'burn test', 'fire-retardant properties', 'hydrogel', 'controlled conditions',
        'resist ignition', 'effective charring', 'protect underlying substrate',
        'qualitative observations', 'quantitative analysis', 'burn rates',
        'treated wood', 'untreated wood', 'treated vs untreated wood samples',
        'burning process', 'combustion', 'burn duration', 'burn damage',
        'wood boards', 'direct flame', 'clamp', 'support rod', 'water tray',
        'infrared cameras', 'IR cameras', 'thermal impact', 'damage distribution',
        'infrared image', 'IR capture', 'thermal distribution', 'thermal gradient',
        'heat distribution', 'heat penetration', 'charring', 'charred area',
        'damage progression', 'burn rate', 'mass loss', 'thermal intensity',
        'flame contact point', 'final damaged area', 'Welch’s Student t-test',
        'Bonferroni correction', 'statistical significance', 'endpoint comparisons',
        'time-course assessment', 'damage progression over time',
        'reduced burn rate', 'reduced heat penetration', 'flame spread',
        'localized charring', 'fire resistance', 'protective effect',
        'strong protection', 'measurable fire-retardant properties',
        'significant protection', 'gas source consistency'
      ] 
    },
    { title: 'Contribution', path: '/contribution', keywords: ['contribution', 'impact', 'community', 'legacy'] },
    { title: 'Engineering & Application', path: '/engineering', keywords: ['engineering', 'application', 'implementation','build','test', 'learn','design','cycle'] },
    { title: 'Wildfire Headlines', path: '/wildfireheadlines', keywords: ['wildfire', 'headlines', 'news', 'fires'] },
    
    // Wetlab Section
    { title: 'Wet Lab Home', path: '/wetlab', keywords: ['wetlab', 'lab', 'laboratory', 'biology'] },
    { title: 'Experiments', path: '/experiments', keywords: ['experiments', 'testing', 'lab work', 'research', 'Expression', 'Western blot', 'SDS-PAGE','His','Tag', 'Purification', 'FPLC', 'Chromatography', 'Fluorescence', 'Microscopy', 'Flow cell cytometry', 'Hydrogel rheology'] },
    { title: 'Protocols', path: '/protocols', keywords: ['protocols', 'procedures', 'methods', 'techniques', 'Bacterial Transformation','Miniprep Plasmid Extraction','Overnight Bacterial liquid culture','IPTG-Induced Expression in Bacteria','Glycerol stock','Yeast Transformation','Yeast Passaging','Yeast Protein Expression and Extraction','SDS-PAGE gel and transfer on membrane','Coomassie and Ponceau S staining','Western Blot','Protein Purification via His-tag Affinity Chromatography (FPLC)','Size-Exclusion Chromatography','Staining of Yeast Samples and Flow Cytometry Analysis for Chitosan Overproduction','Fluorescent Microscopy for Visualization of Silica Bioencapsulation','Hydrogel assembly','Rheological characterization of hydrogels'] },
    { title: 'Parts', path: '/parts', keywords: ['parts', 'biobricks', 'components', 'registry', 'DNA', 'Sequence', 'Plasmid', 'Construct', 'Gene', 'Composite', 'New','pET', 'pESC-CUP1', 'Kanamycin', 'Ampicillin','pESC-CUP1_RHO1Q68H_HA-LEU', 'RHO1-Q68H', 'HA tag', 'Mutation','Overproduction', 'Chitin', 'CDA', 'pESC-CUP1_CDA_V5-URA','Uracil', 'Leucine', 'Deacetylase', 'Chitosan', 'V5 tag','pET-Kan-CBD-SRSF1-His', 'SRSF1', 'Cellulose-binding domain','His tag', 'SRPK1-Strep', 'Fire-resistant', 'Kinase','Phosphorylation', 'INP-CBD', 'Strep tag', 'INP-SIL','Silica', 'Polymerization'] },
    { title: 'Lab Notebook', path: '/notebook', keywords: ['notebook', 'journal', 'log', 'notes', 'daily',"Timeline","Planning","Steps","Foundation & setup","Dual-system development","Characterization & testing"] },
    { title: 'Results', path: '/results', keywords: ['results', 'data', 'findings', 'outcomes', 'analysis','Expression',"Western blot","SDS-PAGE","His","Tag","Purification","FPLC","Chromatography","Fluorescence","Microscopy","Flow","Cytometry","Hydrogel","Rheology"] },
    { title: 'Design', path: '/design', keywords: ['design', 'plan', 'blueprint', 'strategy','Modeling','Simulation','CAD','CFD','Computational Fluid Dynamics','Drone design','Hydrogel design','Fire retardant design','Synthetic biology design','Genetic circuit design','Plasmid design','Protein engineering','Bioinformatics','System architecture','Integration','Optimization'] },

    // Drone Section
    { title: 'Drone Overview', path: '/drone', keywords: ['drone', 'uav', 'aerial', 'technology'] },
{
  title: 'Drone Hardware',
  path: '/hardware',
  keywords: [
    'hardware', 'components', 'electronics', 'physical',
    'carbon fiber', 'frame', 'custom frame',
    'motors', 'ESC', 'Pixhawk 6C', 'flight controller',
    'battery', 'LiPo', 'battery holder',
    'payload', 'stereo cameras', 'IR camera', 'infrared imaging',
    'distance sensor', 'ultrasonic module', 'autonomous navigation',
    'assembly', 'camera holder', 'propulsion system',
    'thrust distribution', 'wiring', 'integration',
    'spraying system', 'structural integrity',
    'demo flight', 'flight'
  ]
},
{
  title: 'Drone Modeling',
  path: '/modeling',
  keywords: [
    'modeling', 'simulation', 'design', 'model',
    '3D digital twin', 'Fusion 360', 'Isaac Sim', 'Pegasus Simulator', 'Gazebo',
    'PX4 integration', 'ROS2', 'stereo vision pipeline', 'SLAM', 'routing',
    'fire detection', 'simulation', 'physics-based environment', 'RTX GPU support',
    'drone model', 'control algorithms', '2D scanner', 'vibration isolation',
    'modular design', 'spraying system', 'CO₂ actuated system', 'centrifugal disk',
    'viscous gel', 'nozzle design', 'aerial systems'
  ]
}
,{
  title: 'Drone Software',
  path: '/software',
  keywords: [
    'software', 'code', 'programming', 'algorithm',
    'ROS', 'Robot Operating System', 'PX4', 'UAV', 'autonomous',
    'sensor data', 'make decisions', 'coordinate components', 'minimal human input',
    'Jetson', 'QGroundControl', 'ground station',
    'open-source frameworks', 'modules', 'components',
    'stereo vision', 'depth estimation', 'depth maps',
    'detect obstacles', 'navigate safely', 'dense forests',
    'IR cameras', 'thermal/infrared feed', 'RGB cameras', 'camera input',
    'real-time processing', 'onboard inference', 'stereo processing',
    'foundation stereo processing', 'I²C', 'SPI', 'I²C / SPI',
    'thermal gradient', 'temperature readings', 'forest monitoring',
    'obstacle detection', 'failsafe', 'recalibration button',
    'built-in video recording', 'GUI'
  ]
},    
    // Human Practices
    { title: 'Human Practices', path: '/human-practices', keywords: ['human practices', 'ethics', 'society', 'stakeholders'] },
{
  title: 'Integrated Human Practices',
  path: '/integratedhumanpractices',
  keywords: [
    'integrated', 'ihp', 'feedback', 'collaboration',
    'Integrated Human Practice', 'Human Practices', 'iHP',
    'wildfire prevention', 'wildfire suppression',
    'firefighting hydrogel', 'sustainable firefighting',
    'environmental responsibility', 'human safety', 'social impact',
    'community engagement', 'stakeholders', 'real world needs',
    'EPFL', 'Swiss Federal Laboratories for Materials Science and Technology',
    'EMPA', 'St Gallen', 'Switzerland',
    'Swiss Federal Institute for Forest Snow and Landscape Research', 'WSL',
    'Swissfire database', 'FireNiche model', 'MeteoSwiss',
    'forest fire modeling', 'fire spread', 'fuel types', 'moisture', 'wind',
    'model limitations', 'model validation', 'simplified modeling',
    'FireRein', 'Eco Gel', 'plant based hydrogel', 'starch',
    'plant based gums', 'viscosity', 'viscosity range', 'rheology',
    'rheological profile', 'shear thinning', 'flow characteristics',
    'compatibility with firefighting equipment', 'nozzles', 'viscometer',
    'Soft Materials Lab', 'microscope', 'sensor integration', 'proof of concept',
    'Lebanon', 'Lebanese firefighters', 'Chief of Operations',
    'firefighting protocols', 'fire retardant application', 'operational feasibility',
    'data collection', 'IR camera', 'infrared camera', 'temperature readings',
    'Voliro', 'advanced drones', 'aerial drone', 'spraying viscous materials',
    'drone design', 'use cases', 'technical review', 'project guidance',
    'British Columbia Wildfire Service', 'British Columbia', 'Canada',
    'frontline firefighters', 'operational workflows', 'equipment compatibility',
    'flow and delivery methods', 'National Aerial Firefighting Centre', 'NAFC',
    'Melbourne', 'Australia', 'aerial firefighting', 'satellite detection',
    'real time data', 'monitoring and intelligence', 'scalability',
    'payload capacity', 'helicopters', 'fixed wing aircraft', 'flat plains',
    'mountainous terrain', 'geography and operations',
    'The Mirror Foundation', 'Thailand', 'dry leaves', 'leaf blowers',
    'firebreaks', 'satellites', 'mobile application', 'real time tracking',
    'budget constraints', 'localized drone interventions',
    'SOS Energie', 'Burkina Faso', 'deforestation', 'charcoal production',
    'ground operations', 'safety risks', 'cost constraints', 'affordable solutions',
    'Fundo Casa Socioambiental', 'Brasilia', 'Brazil', 'grassroots initiatives',
    'sustainable fire management', 'market for green solutions',
    'environmental responsibility', 'business model refinement',
    'Cambodian Fairwind Enterprises', 'CFE', 'Cambodia', 'fire safety standards',
    'national fire prevention guidelines', 'agriculture', 'crop protection',
    'industrial fire safety', 'regulatory frameworks', 'eco friendly fire retardants',
    'DIN CERTCO', 'bio certification', 'certification process',
    'biological labels', 'Europe', 'testing protocol', 'reproducibility',
    'standardized wood samples', 'Bunsen burner test', 'ignition',
    'self extinguishing behavior', 'dripping', 'char formation',
    'cone calorimetry', 'controls', 'uncoated wood', 'water only control',
    'uniform coating', 'coating thickness', 'triplicate tests',
    'performance metrics', 'establish contact', 'learn adapt improve',
    'iterative process', 'global collaboration', 'scalability is everything',
    'versatile equipment', 'quick deployment', 'intuitive to use',
    'consent to publish', 'interview summary', 'Human Practices page',
    'iGEM website', 'EPFL iGEM 2025 Team', 'contact request',
    'Nafi', 'Cynthia'
  ]
},
{
  title: 'Education',
  path: '/education',
  keywords: [
    'education', 'outreach', 'teaching', 'learning', 'communication',
    'Dive into STEM', 'S4S', 'Student for Student', 'EPFL Association',
    'SV Industry', 'AESV', 'science', 'STEM', 'research',
    'cutting-edge research', 'university experience', 'synthetic biology',
    'genetically engineered bacteria', 'pigment-producing proteins',
    'seven colors', 'petri dishes', 'petri dish art', 'bacterial artwork',
    'bacterial art', 'lab safety', 'pipetting techniques', 'plasmid integration',
    'cell culture', 'culture tubes', 'laboratory', 'hands-on lab experiments',
    'hands-on', 'interactive learning', 'immersive experience', 'workshop',
    'lecture hall', 'real lab techniques', 'ask questions', 'first-year students',
    'high school students', 'EPFL students', 'peer support', 'curiosity',
    'creativity', 'inspiration', 'mentoring', 'recruitment', 'cohort',
    'team presentation', 'goals and progress', 'get involved', 'poster',
    'auditorium', 'student projects', 'conference', 'start of each semester',
    'academic year', 'presenters', 'next generation', 'previous teams'
  ]
},
{
  title: 'Meetings',
  path: '/meetings',
  keywords: [
    'meetings', 'meetups', 'collaboration', 'teams', 'networking',
    'EPFL', 'UNIL', 'University of Zurich', 'University of Basel',
    'La Rosée', 'Lausanne', 'Lausanne campus', 'Switzerland',
    'Zurich', 'Basel', 'Beijing', 'iGEM', 'symposium', 'meetup',
    'meeting', 'community', 'season', 'mini jamboree', 'jamboree',
    'European teams', 'SHSD', 'SHSD team', 'Climate Crisis Village',
    'enzyme based PET plastic degradation', 'enzyme based PET degradation',
    'PET plastic', 'PET degradation', 'enzyme degradation', 'enzymes',
    'Zoom', 'Zoom meeting', 'video conference', 'remote meeting',
    'networking lunch', 'Italian restaurant', 'The Piano', 'Informal',
    'exchanges', 'presentations', 'project presentations',
    'practice presenting', 'training experience', 'lively discussions',
    'asking questions', 'answering questions', 'interactive Q&A', 'Q&A',
    'feedback', 'collaborative environment', 'peer feedback',
    'shared challenges', 'opportunities for improvement', 'refining projects',
    'refining pitch', 'communicating results', 'connections',
    'community building', 'knowledge sharing', 'exchange of ideas',
    'competition', 'students', 'high school team', 'young scientists',
    'project', 'approach', 'goals', 'results', 'wiki homepage', '5 October 2025'
  ]
},
{
  title: 'Sustainability',
  path: '/sustainability',
  keywords: [
    'sustainability', 'environment', 'green', 'eco-friendly',
    'sustainable development', 'Sustainable Development Goals', 'SDGs',
    'wildfire suppression', 'fire management', 'first-attack', 'prevention',
    'early detection', 'ignition risk', 'climate–fire feedback loop',
    'emissions', 'CO₂', 'black carbon', 'adaptation', 'resilience',
    'ecosystem protection', 'biodiversity', 'habitat integrity',
    'post-fire recovery', 'equity', 'access gaps', 'affordability',
    'open documentation', 'interoperability', 'lifecycle impacts',
    'refillability', 'low-toxicity', 'low-runoff', 'biocompatibility',
    'burden-shifting', 'environmental footprint', 'closed-loop systems',
    'SDG 10', 'Reduced Inequalities', 'SDG 13', 'Climate Action',
    'SDG 14', 'Life Below Water', 'SDG 15', 'Life on Land',
    'drones', 'UAV', 'electric drones', 'precision spraying',
    'standardized data', 'simple analytics', 'situational awareness',
    'targeted treatment', 'pre-emptive application', 'microbial biosynthesis',
    'engineered E. coli', 'Saccharomyces cerevisiae',
    'life-cycle assessment (LCA)', 'fire retardants', 'foams', 'PFAS',
    'ammonium phosphate', 'kerosene-powered aircraft', 'toxic runoff',
    'aquatic contamination', 'nutrient pollution', 'eutrophication',
    'dead zones', 'microplastics', 'heavy-metal bioaccumulation',
    'hydrophobic soils', 'erosion', 'desertification', 'hottest year on record',
    '+1.45 °C', 'greenhouse gas emissions', 'carbon sinks',
    'carbon sequestration', 'forest cover', 'evapotranspiration',
    'low-carbon manufacturing', 'low-emission deployment',
    'renewable energy', 'deployment time', 'responder injuries',
    'cost-per-hectare protected', 'adoption rates', 'burn rate reduction',
    'surface temperature reduction', 'soil nutrient preservation',
    'soil water retention', 'ecosystem recovery', 'biodiversity resilience',
    'The Mirror Foundation', 'SOS Énergie', 'Fundo Casa Socioambiental',
    'BC Wildfire Service', 'NAFC', 'Lebanese Firefighters', 'WSL', 'UNDRR',
    'WMO', 'EPA', 'UN DESA', 'IPCC', 'ETH Zurich', 'Gaia Education',
    'Tunley Environmental', 'Thailand', 'Burkina Faso', 'Brazil', 'Canada',
    'Australia', 'Lebanon', 'firefighting gel', 'fire retardant gel',
    'drone firefighting', 'aerial suppression', 'early mitigation',
    'prevention and preparedness', 'habitat protection', 'soil integrity',
    'water quality', 'marine health', 'freshwater protection',
    'carbon-neutral operations', 'equitable access', 'maintainable hardware',
    'reproducible setup', 'open workflows'
  ]
},
    
    // Team Section
    { title: 'Team Roster', path: '/roster', keywords: ['team', 'roster', 'members', 'people', 'students'] },
    { title: 'Attributions', path: '/attributions', keywords: ['attributions', 'credits', 'acknowledgments', 'thanks', 'sponsors'] },
    
    
{
  title: 'Entrepreneurship',
  path: '/entrepreneurship',
  keywords: [
    'entrepreneurship', 'business', 'startup', 'commercialization',
    'Wildfire suppression', 'Wildfire solution', 'Wildfire business',
    'Startup business wildfire suppression', 'Innovative firefighting venture',
    'Sustainable entrepreneurship fire protection', 'Green tech entrepreneurship',
    'Biotech startup hydrogel', 'Drone-based wildfire',
    'Flame retardant market', 'Fire retardant market',
    'Wildfire protection systems industry', 'Firefighting innovation 2025',
    'Wildfire suppression market growth', 'TAM SAM SOM analysis wildfire market',
    'Total Addressable Market (TAM) wildfires',
    'Serviceable Available Market (SAM) wildfires',
    'Serviceable Obtainable Market (SOM) wildfires',
    'B2G wildfire suppression contracts',
    'Subscription-based fire protection services',
    'Scalable manufacturing entrepreneurship',
    'Scalable hydrogel production', 'Fire tech startup',
    'Drone firefighting deployment', 'Investment firefighting',
    'Partnership firefighting equipment',
    'Environmental compliance wildfire solutions',
    'Climate-driven wildfire surge', 'Fire suppression cost reduction',
    'Sustainable raw materials firefighting',
    'Build Measure Learn feedback loop business'
  ]
},
    { title: 'Safety', path: '/safety', keywords: ['safety', 'security', 'biosafety', 'risk', 'protocols'] },
    { title: 'Awards', path: '/awards', keywords: ['awards', 'recognition', 'achievements', 'honors', 'software', 'sustainable', 'medals', 'gold', 'silver', 'bronze'] }
  ];


  
  // Filtrer les suggestions selon la requête de recherche
const filteredSuggestions = navigationItems.filter(item => {
  const query = searchQuery.toLowerCase();
  const keywordBlob = item.keywords.join(' ').toLowerCase();
  return (
    item.title.toLowerCase().includes(query) ||
    keywordBlob.includes(query)
  );
});

  
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    setShowSuggestions(searchQuery.length > 0 && filteredSuggestions.length > 0);
  }, [searchQuery, filteredSuggestions.length]);

  const handleClear = () => {
    setSearchQuery('');
    setShowSuggestions(false);
  };

  const handleSuggestionClick = (path: string) => {
    console.log('Navigating to:', path); // Debug log
    navigate(path);
    setSearchQuery('');
    setShowSuggestions(false);
    setIsOpen(false);
    setIsLocked(false);
  };

  const handleIconClick = () => {
    setIsLocked(true); // Lock when clicking
    setIsOpen(true);
  };

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    // Don't close if locked OR if focused on input
    if (!isLocked && document.activeElement !== inputRef.current) {
      setIsOpen(false);
    }
  };

  // Keep dropdown open when typing
  const handleInputFocus = () => {
    setIsOpen(true);
  };



  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setIsLocked(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <>
      <style>{`
        @import url('https://static.igem.wiki/teams/5590/fonts/fontroboto.css');

        * {
          box-sizing: border-box;
        }

        .navbar-search-wrapper {
          position: relative;
        }

        .search-icon-button {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0;
          background: transparent;
          border: none;
          color: #B6E3D2;
          cursor: pointer;
          transition: all 0.3s ease;
          font-family: 'Roboto', sans-serif;
        }

        .search-icon-button:hover {
          color: #FF9243;
          transform: scale(1.1);
        }

        .search-icon-button.active {
          color: #FF9243;
        }

        .search-icon {
          width: 24px;
          height: 24px;
        }

        /* Dropdown Panel */
        .search-dropdown-panel {
          position: absolute;
          top: calc(100% + 20px);
          right: 0;
          width: 500px;
          max-width: 90vw;
          background: rgba(0, 0, 0, 0.98);
          border: 1px solid rgba(182, 227, 210, 0.2);
          border-radius: 16px;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.8);
          backdrop-filter: blur(10px);
          z-index: 1000;
          animation: dropdownSlide 0.3s ease;
          overflow: hidden;
        }

        @keyframes dropdownSlide {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .search-dropdown-content {
          padding: 1.5rem;
        }

        /* Search Input */
        .search-input-container {
          position: relative;
          margin-bottom: 1rem;
        }

        .search-input {
          width: 100%;
          padding: 0.875rem 3rem 0.875rem 3rem;
          background: rgba(0, 114, 122, 0.15);
          border: 2px solid rgba(182, 227, 210, 0.3);
          border-radius: 12px;
          color: #FAFAF6;
          font-family: 'Roboto', sans-serif;
          font-size: 1rem;
          font-weight: 300;
          outline: none;
          transition: all 0.3s ease;
        }

        .search-input::placeholder {
          color: rgba(182, 227, 210, 0.5);
        }

        .search-input:focus {
          background: rgba(0, 114, 122, 0.2);
          border-color: #FF9243;
          box-shadow: 0 0 0 3px rgba(255, 146, 67, 0.1);
        }

        .search-input-icon {
          position: absolute;
          left: 1rem;
          top: 50%;
          transform: translateY(-50%);
          color: #B6E3D2;
          width: 18px;
          height: 18px;
          pointer-events: none;
        }

        .clear-input-button {
          position: absolute;
          right: 1rem;
          top: 50%;
          transform: translateY(-50%);
          background: none;
          border: none;
          color: #FF9243;
          cursor: pointer;
          padding: 0.25rem;
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0.7;
          transition: all 0.2s ease;
          border-radius: 4px;
        }

        .clear-input-button:hover {
          opacity: 1;
          background: rgba(255, 146, 67, 0.1);
        }

        /* Suggestions */
        .suggestions-container {
          max-height: 350px;
          overflow-y: auto;
          border-radius: 8px;
        }

        .suggestions-container::-webkit-scrollbar {
          width: 6px;
        }

        .suggestions-container::-webkit-scrollbar-track {
          background: rgba(0, 114, 122, 0.1);
          border-radius: 3px;
        }

        .suggestions-container::-webkit-scrollbar-thumb {
          background: rgba(182, 227, 210, 0.3);
          border-radius: 3px;
        }

        .suggestions-container::-webkit-scrollbar-thumb:hover {
          background: rgba(182, 227, 210, 0.5);
        }

        .suggestion-item {
          padding: 0.875rem 1rem;
          color: #FAFAF6;
          cursor: pointer;
          transition: all 0.2s ease;
          border-bottom: 1px solid rgba(182, 227, 210, 0.1);
          font-family: 'Roboto', sans-serif;
          display: flex;
          align-items: center;
          gap: 0.75rem;
          border-radius: 8px;
          margin-bottom: 0.25rem;
        }

        .suggestion-item:last-child {
          border-bottom: none;
          margin-bottom: 0;
        }

        .suggestion-item:hover {
          background: rgba(255, 146, 67, 0.15);
          padding-left: 1.5rem;
        }

        .suggestion-item:hover .suggestion-arrow {
          opacity: 1;
          transform: translateX(0);
        }

        .suggestion-arrow {
          width: 18px;
          height: 18px;
          color: rgba(182, 227, 210, 0.6);
          flex-shrink: 0;
          opacity: 0;
          transform: translateX(-10px);
          transition: all 0.3s ease;
        }

        .suggestion-title {
          font-weight: 500;
          font-size: 0.95rem;
          flex: 1;
        }

        .search-hint {
          padding: 2rem 1rem;
          color: rgba(182, 227, 210, 0.6);
          font-size: 0.875rem;
          text-align: center;
          font-family: 'Roboto', sans-serif;
        }

        .no-results {
          padding: 2rem 1rem;
          color: rgba(182, 227, 210, 0.6);
          font-size: 0.875rem;
          text-align: center;
          font-family: 'Roboto', sans-serif;
        }

        @media (max-width: 768px) {
          .search-dropdown-panel {
            width: 90vw;
            right: -20px;
          }

          .search-input {
            font-size: 0.9rem;
            padding: 0.75rem 2.5rem 0.75rem 2.5rem;
          }

          .suggestion-item {
            padding: 0.75rem 0.875rem;
          }
        }
      `}</style>

      <div 
        className="navbar-search-wrapper" 
        ref={wrapperRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <button 
          className={`search-icon-button ${isOpen ? 'active' : ''}`}
          onClick={handleIconClick}
          aria-label="Toggle search"
        >
          <Search className="search-icon" />
        </button>

        {isOpen && (
          <div className="search-dropdown-panel">
            <div className="search-dropdown-content">
              <div className="search-input-container">
                <Search className="search-input-icon" />
                <input
                  ref={inputRef}
                  type="text"
                  className="search-input"
                  placeholder="Search pages..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={handleInputFocus}
                  onKeyDown={(e) => {
                    if (e.key === 'Escape') {
                      setIsOpen(false);
                      setIsLocked(false);
                    }
                  }}
                />
                {searchQuery && (
                  <button 
                    className="clear-input-button"
                    onClick={handleClear}
                    aria-label="Clear search"
                  >
                    <X size={18} />
                  </button>
                )}
              </div>

              {showSuggestions && (
                <div className="suggestions-container">
                  {filteredSuggestions.map((item, index) => (
                    <div
                      key={index}
                      className="suggestion-item"
                      onClick={() => handleSuggestionClick(item.path)}
                    >
                      <ArrowRight className="suggestion-arrow" />
                      <span className="suggestion-title">{item.title}</span>
                    </div>
                  ))}
                </div>
              )}

              {!showSuggestions && searchQuery && (
                <div className="no-results">No results found</div>
              )}

              {!searchQuery && (
                <div className="search-hint">Start typing to search pages...</div>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default NavbarSearch;