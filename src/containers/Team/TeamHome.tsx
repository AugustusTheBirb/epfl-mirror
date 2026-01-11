import "./team.css";
import "../../components/Sidebar/sidebar.css";
import HomeSection from "../../components/HomeSection/HomeSection";

export const TeamHome = () => {
  const navigationLinks = [
    { href: "/roster", label: "Team Roster" },
    { href: "/attributions", label: "Attributions" },
  ];

  return (
    <HomeSection
      sectionName="Team"
      welcomeMessage="Meet the passionate minds behind Pyronix. Our diverse team of students, mentors, and advisors combines expertise in synthetic biology, engineering, and entrepreneurship to tackle one of our planet's most pressing challenges. Discover the people who turned an ambitious vision into reality."
      navigationTitle=""
      navigationLinks={navigationLinks}
      contentSections={[]}
    />
  );
};

export default TeamHome;