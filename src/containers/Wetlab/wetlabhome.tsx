import { Outlet } from "react-router-dom";
import "./wetlab.css";
import "../../components/Sidebar/sidebar.css";
import HomeSection from "../../components/HomeSection";

export default function WetlabHome() {
  const navigationLinks = [
    { href: "/design", label: "Design" },
    { href: "/experiments", label: "Experiments" },
    { href: "/protocols", label: "Protocols" },
    { href: "/parts", label: "Parts" },
    { href: "/notebook", label: "Notebook" },
    { href: "/results", label: "Results" }
  ];

  return (
    <HomeSection
      sectionName="Wet Lab"
      welcomeMessage="Discover the laboratory methods that transformed an ambitious idea into reality. From engineering microorganisms to crafting fire-resistant hydrogels, explore the cutting-edge protocols that powered our breakthrough in bio-based wildfire suppression."
      navigationTitle="Explore Our Lab Work"
      navigationLinks={navigationLinks}
      contentSections={[]}
    >
      {/* Nested routes will appear here */}
      <Outlet />
    </HomeSection>
  );
}
