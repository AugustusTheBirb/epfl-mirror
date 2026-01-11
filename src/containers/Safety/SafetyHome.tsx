import "./safety.css";
import "../../components/Sidebar/sidebar.css";
import HomeSection from "../../components/HomeSection";


export default function SafetyHome(){
  const navigationLinks = [
    { href: "/safety", label: "View All Safety Measures" },
  ];

  return (
    <HomeSection
      sectionName="Safety & Security"
      welcomeMessage="Ensuring responsible innovation through comprehensive safety protocols and risk management. Explore our thorough approach to laboratory safety, biosafety measures, and environmental protection that guide every aspect of our wildfire suppression research."
      navigationTitle="Explore Our Safety Measures"
      navigationLinks={navigationLinks}
      contentSections={[]}
    />
  );
}