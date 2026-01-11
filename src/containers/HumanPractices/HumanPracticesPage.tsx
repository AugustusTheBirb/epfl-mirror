
import './humanpractice.css';
import "../../components/Sidebar/sidebar.css";
import HomeSection from "../../components/HomeSection/HomeSection";

export const HumanPracticesPage = () => {
  const navigationLinks = [
    { href: "/education", label: "Education" },
    { href: "/integratedhumanpractice", label: "Integrated Human Practices" },
    { href: "/meetings", label: "Meeting iGEM Teams" },
    { href: "/sustainability", label: "Sustainability" }
  ];

  return (
    <HomeSection
      sectionName="Human Practices"
      welcomeMessage="Discover how our project meets the world. Human Practices at iGEM EPFL 2025 means education, engagement, and collaboration—ensuring our science is responsible, inclusive, and impactful. Learn about our educational outreach, how we integrated feedback from stakeholders, and our collaborations with iGEM teams worldwide."
      navigationTitle="Explore our Impact"
      navigationLinks={navigationLinks}
      contentSections={[]}
    />
  );
};
