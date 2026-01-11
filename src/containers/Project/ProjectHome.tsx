import "./Overview/project.css";
import "../../components/Sidebar/sidebar.css";
import HomeSection from "../../components/HomeSection";

export default function ProjectHome(){
  const navigationLinks = [
    { href: "/projectdescription", label: "Project Description" },
    { href: "/proofofconcept", label: "Proof of Concept" },
    { href: "/measurement", label: "Burn Measurement" },
    { href: "/contribution", label: "Contribution" },
    { href: "/engineering", label: "Engineering Application" },
    { href: "/wildfireheadlines", label: "Wildfire Headlines" }
  ];

  return (
    <HomeSection
      sectionName="Project"
      welcomeMessage="Explore our comprehensive approach to wildfire prevention through innovative biotechnology. From initial concept to real-world application, discover how we're revolutionizing fire suppression with sustainable, bio-based solutions that protect both people and the environment."
      navigationTitle="Explore Our Project"
      navigationLinks={navigationLinks}
      contentSections={[]}
    />
  );
}