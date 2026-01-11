import './entrepreneur.css';
import "../../components/Sidebar/sidebar.css";
import HomeSection from "../../components/HomeSection/HomeSection";

export const EntrepreneurshipHome = () => {
  const navigationLinks = [
    { href: "/entrepreneurship", 
      label: "Market Analysis -- Development Timeline -- Business Strategy" },
  ];

  return (
    <HomeSection
      sectionName="Entrepreneurship"
      welcomeMessage="This page explores the business potential and market strategy behind our wildfire protection system. From market analysis to commercialization roadmap, discover how we're building a sustainable business that addresses real-world environmental challenges while creating economic value."
      navigationTitle="Explore Our Business Strategy"
      navigationLinks={navigationLinks}
      contentSections={[]}
    />
  );
};