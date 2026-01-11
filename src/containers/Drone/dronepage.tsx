import './drone.css';
import "../../components/Sidebar/sidebar.css";
import HomeSection from "../../components/HomeSection";

export const DronePage = () => {
  const navigationLinks = [
    { href: "/hardware", label: "Hardware" },
    { href: "/software", label: "Software" },
    { href: "/modeling", label: "Modeling" }
  ];

  return (
    <HomeSection
      sectionName="Autonomous Drone System"
      welcomeMessage="This page introduces the engineering behind our drone system. From the mechanical hardware to open-source software and modeling tools, explore how we built and optimized a platform for autonomous deployment of our fire-retardant gel."
      navigationTitle="Explore Our Engineering"
      navigationLinks={navigationLinks}
      contentSections={[]}
    />
  );
};
